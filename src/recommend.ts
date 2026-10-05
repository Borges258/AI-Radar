import type { Recommendation, ScoredLink, UserPreference } from "./types";
import type { RadarConfig } from "./config";

/**
 * 推荐：默认按综合评分降序取 Top N。
 * 用户偏好通过 config.preference 注入（当前默认纯评分，预留扩展点）。
 */
export function recommend(links: ScoredLink[], config: RadarConfig): Recommendation[] {
  const filtered = applyPreference(links, config.preference);
  const sorted = [...filtered].sort((a, b) => b.score - a.score);
  return sorted.slice(0, config.recommendationCount).map((link, i) => ({
    ...link,
    rank: i + 1,
    reasons: buildReasons(link),
  }));
}

/**
 * 用户偏好接口：当前实现来源排除/优先、最低分过滤；
 * 关键词加权等更复杂的偏好在此处扩展，无需改动推荐主流程。
 */
function applyPreference(links: ScoredLink[], pref: UserPreference): ScoredLink[] {
  let out = links;

  if (pref.excludedSources?.length) {
    const excluded = new Set(pref.excludedSources);
    out = out.filter((l) => !excluded.has(l.source));
  }
  const minScore = pref.minScore;
  if (typeof minScore === "number" && minScore > 0) {
    out = out.filter((l) => l.score >= minScore);
  }
  if (pref.preferredSources?.length) {
    const preferred = new Set(pref.preferredSources);
    out = [...out].sort((a, b) => {
      const pa = preferred.has(a.source) ? 1 : 0;
      const pb = preferred.has(b.source) ? 1 : 0;
      return pb - pa || b.score - a.score;
    });
  }
  // 关键词偏好（预留）：可在此对命中 pref.keywords 的链接做加权重排

  return out;
}

function buildReasons(link: ScoredLink): string[] {
  const r = link.breakdown;
  const reasons: string[] = [];
  if (r.relevance >= 0.7) reasons.push("领域相关性高");
  if (r.authority >= 0.8) reasons.push("来源权威");
  if (r.timeliness >= 0.8) reasons.push("时效性强");
  if (r.engagement >= 0.5) reasons.push("社区热度高");
  reasons.push(`综合评分 ${link.score}`);
  return reasons.slice(0, 3);
}