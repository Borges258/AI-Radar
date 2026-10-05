import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Recommendation, ScoredLink } from "./types";

export interface OutputContent {
  date: string;
  recommendations: Recommendation[];
  links: ScoredLink[];
  summary?: string;
  stats: { scraped: number; deduped: number; scored: number };
}

/** 生成 Markdown + JSON 结构化输出，返回写入的文件列表 */
export function writeOutput(content: OutputContent): string[] {
  const dir = join("digests", content.date);
  mkdirSync(dir, { recursive: true });

  const files: Array<[string, string]> = [
    ["recommendations.md", renderRecommendations(content.date, content.recommendations, content.summary)],
    ["links.md", renderAllLinks(content.date, content.links, content.stats)],
    ["links.json", JSON.stringify(serialize(content), null, 2)],
  ];

  const written: string[] = [];
  for (const [name, data] of files) {
    const p = join(dir, name);
    writeFileSync(p, data, "utf-8");
    written.push(p);
  }
  return written;
}

function serialize(content: OutputContent): Record<string, unknown> {
  return {
    date: content.date,
    stats: content.stats,
    summary: content.summary,
    recommendations: content.recommendations,
    links: content.links,
  };
}

function renderRecommendations(date: string, recs: Recommendation[], summary?: string): string {
  const lines: string[] = [
    `# 信息雷达 · 每日推荐 (${date})`,
    "",
    `> 共推荐 ${recs.length} 条高质量内容，按综合评分排序`,
    "",
  ];
  if (summary) {
    lines.push("## 每日摘要", "");
    lines.push(summary, "");
  }
  recs.forEach((r) => {
    lines.push(`## ${r.rank}. ${r.title}`);
    lines.push("");
    lines.push(`- **来源**: ${r.sourceName}`);
    lines.push(`- **链接**: ${r.url}`);
    if (r.overview) lines.push(`- **概述**: ${r.overview}`);
    if (r.summary) lines.push(`- **摘要**: ${r.summary}`);
    if (r.author) lines.push(`- **作者**: ${r.author}`);
    lines.push(`- **综合评分**: ${r.score} (相关性 ${pct(r.breakdown.relevance)} / 权威性 ${pct(r.breakdown.authority)} / 时效性 ${pct(r.breakdown.timeliness)} / 热度 ${pct(r.breakdown.engagement)})`);
    lines.push(`- **推荐理由**: ${r.reasons.join("；")}`);
    lines.push("");
  });
  return lines.join("\n");
}

function renderAllLinks(date: string, links: ScoredLink[], stats: { scraped: number; deduped: number; scored: number }): string {
  const bySource = new Map<string, ScoredLink[]>();
  for (const l of links) {
    const arr = bySource.get(l.sourceName) ?? [];
    arr.push(l);
    bySource.set(l.sourceName, arr);
  }

  const lines: string[] = [
    `# 信息雷达 · 全部有效链接 (${date})`,
    "",
    `> ${stats.scraped} 条原始链接 -> 去重后 ${stats.deduped} 条 -> 评分 ${stats.scored} 条`,
    "",
  ];

  for (const [name, arr] of [...bySource.entries()].sort((a, b) => b[1].length - a[1].length)) {
    lines.push(`## ${name} (${arr.length} 条)`);
    lines.push("");
    for (const l of [...arr].sort((a, b) => b.score - a.score)) {
      lines.push(`- [${l.title}](${l.url}) — 评分 ${l.score}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

function pct(n: number): string {
  return `${Math.round(n * 100)}%`;
}