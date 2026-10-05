import type { DedupedLink, ScoredLink } from "./types";
import type { RadarConfig } from "./config";
import { clamp01, hoursSince, normalizeText } from "./util";

/** 来源权威权重（0-1），新增来源时可在这里补充 */
const SOURCE_AUTHORITY: Record<string, number> = {
  arxiv: 0.95,
  huggingface: 0.85,
  github: 0.85,
  lobsters: 0.75,
  hackernews: 0.7,
  devto: 0.5,
};

// 综合评分权重
const W_RELEVANCE = 0.4;
const W_AUTHORITY = 0.25;
const W_TIMELINESS = 0.2;
const W_ENGAGEMENT = 0.15;

/** 对链接进行量化评分，返回 0-100 的综合分及维度分解 */
export function scoreLinks(links: DedupedLink[], config: RadarConfig): ScoredLink[] {
  return links.map((link) => {
    const relevance = scoreRelevance(link, config.keywords);
    const authority = scoreAuthority(link);
    const timeliness = scoreTimeliness(link.publishedAt);
    const engagement = scoreEngagement(link.engagement);
    const total = Math.round(
      100 * (W_RELEVANCE * relevance + W_AUTHORITY * authority + W_TIMELINESS * timeliness + W_ENGAGEMENT * engagement),
    );
    return { ...link, score: total, breakdown: { relevance, authority, timeliness, engagement } };
  });
}

/** 相关性：关键词命中数加权 */
function scoreRelevance(link: DedupedLink, keywords: string[]): number {
  const text = normalizeText(`${link.title} ${link.summary ?? ""} ${(link.tags ?? []).join(" ")}`);
  if (!text) return 0.3;
  let hits = 0;
  for (const kw of keywords) {
    const k = normalizeText(kw);
    if (k && text.includes(k)) hits++;
  }
  return clamp01(0.3 + hits * 0.15);
}

/** 权威性：来源权重 + 内容完整度修正 */
function scoreAuthority(link: DedupedLink): number {
  const base = SOURCE_AUTHORITY[link.source] ?? 0.5;
  let boost = 0;
  if (link.author) boost += 0.05;
  if (link.summary && link.summary.length > 80) boost += 0.05;
  return clamp01(base + boost);
}

/** 时效性：72 小时半衰期指数衰减 */
function scoreTimeliness(publishedAt?: string): number {
  const h = hoursSince(publishedAt);
  if (!Number.isFinite(h)) return 0.4;
  return clamp01(Math.pow(0.5, h / 72));
}

/** 社区热度：对数缩放，约 1000 交互接近满分 */
function scoreEngagement(engagement?: number): number {
  const e = engagement ?? 0;
  if (e <= 0) return 0;
  return clamp01(Math.log10(e + 1) / 3);
}