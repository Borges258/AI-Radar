import { normalizeText, normalizeUrl, sha256 } from "./util";
import type { DedupedLink, RawLink } from "./types";

/** 文本指纹：规范化后取 SHA-256，空文本返回空串 */
function fingerprint(text: string): string {
  const normalized = normalizeText(text);
  if (!normalized) return "";
  return sha256(normalized);
}

/** 为链接计算多维度指纹（URL / 标题 / 内容） */
export function buildFingerprints(link: RawLink): DedupedLink {
  return {
    ...link,
    normalizedUrl: normalizeUrl(link.url),
    titleHash: fingerprint(link.title),
    contentHash: fingerprint(`${link.title} ${link.summary ?? ""}`.slice(0, 4000)),
  };
}

/** 词元集合（用于近似内容相似度） */
export function tokenize(text: string): Set<string> {
  return new Set(normalizeText(text).split(" ").filter((t) => t.length > 2));
}

/** Jaccard 相似度，衡量两条内容的重叠程度 */
export function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return inter / (a.size + b.size - inter);
}