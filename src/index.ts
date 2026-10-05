import { log } from "./logger";
import { runPipeline } from "./pipeline";

async function main(): Promise<void> {
  // 加载本地 .env（若存在）；密钥不入库
  try {
    process.loadEnvFile();
  } catch {
    // .env 不存在则忽略
  }
  log.info("=== 信息雷达 pipeline 启动 ===");
  const start = Date.now();
  try {
    const result = await runPipeline(log);
    const s = result.stats;
    log.info(
      `执行完成，耗时 ${((Date.now() - start) / 1000).toFixed(1)}s | 抓取 ${s.scraped} / 去重后 ${s.deduped} / 推荐 ${result.recommendations.length}`,
    );
    if (s.errors.length > 0) {
      log.warn(`部分来源失败 (${s.errors.length}): ${s.errors.map((e) => e.source).join(", ")}`);
    }
  } catch (e) {
    log.error("pipeline 致命错误", e);
    process.exit(1);
  }
}

main();