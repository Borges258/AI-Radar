import type { PipelineResult } from "./types";
import type { Logger } from "./logger";
import { loadConfig } from "./config";
import { buildSources, fetchAll } from "./sources/registry";
import { deduplicate } from "./dedup";
import { scoreLinks } from "./scoring";
import { recommend } from "./recommend";
import { generateReport, loadLlmConfig, llmEnabled } from "./llm";
import { Store } from "./store";
import { writeOutput } from "./writer";
import { todayShanghai } from "./util";

/**
 * 流水线编排：抓取 -> 去重 -> 评分 -> 推荐 -> 输出。
 * 每日定时执行的全流程入口。
 */
export async function runPipeline(log: Logger): Promise<PipelineResult> {
  const config = loadConfig();
  const store = new Store("data", "state.json", log);
  const seen = store.loadSeen();

  // 1) 抓取
  const runners = buildSources(config.sources);
  const { links: raw, fetched, errors } = await fetchAll(runners, log);
  log.info(`抓取完成: ${raw.length} 条原始链接 (${fetched.length} 个来源成功)`);

  // 2) 去重
  const dedupResult = deduplicate(raw, seen, config.dedupSimilarityThreshold, log);

  // 3) 评分
  const scored = scoreLinks(dedupResult.links, config);

  // 4) 推荐
  const recommendations = recommend(scored, config);

  // 4.5) LLM 生成推荐报告（可选，未配置密钥时跳过）
  let summary: string | undefined;
  const llmCfg = loadLlmConfig();
  if (llmEnabled(llmCfg)) {
    try {
      const report = await generateReport(recommendations);
      summary = report.summary || undefined;
      if (report.reasons.length === recommendations.length) {
        recommendations.forEach((r, i) => {
          r.reasons = [report.reasons[i]];
        });
      }
      if (report.overviews.length === recommendations.length) {
        recommendations.forEach((r, i) => {
          r.overview = report.overviews[i];
        });
      }
      log.info(`LLM (${llmCfg.model}) 已生成推荐报告与个性化理由`);
    } catch (e) {
      log.error("LLM 生成失败，回退到规则理由", e);
    }
  } else {
    log.info("未配置 LLM_API_KEY，跳过 LLM 报告生成（使用规则推荐理由）");
  }

  // 5) 输出 + 持久化状态
  const date = todayShanghai();
  const written = writeOutput({
    date,
    summary,
    recommendations,
    links: scored,
    stats: { scraped: raw.length, deduped: dedupResult.links.length, scored: scored.length },
  });
  store.save(scored, seen);

  if (scored.length < config.targetLinks) {
    log.warn(`有效链接 ${scored.length} 条，低于目标 ${config.targetLinks} 条（可检查来源是否受限或调整阈值）`);
  }

  log.info(`输出文件: ${written.join(", ")}`);

  return {
    stats: {
      date,
      scraped: raw.length,
      deduped: dedupResult.links.length,
      scored: scored.length,
      errors,
    },
    summary,
    recommendations,
    links: scored,
  };
}