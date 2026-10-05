import type { DedupedLink, RawLink } from "./types";
import type { Logger } from "./logger";
import { buildFingerprints, jaccard, tokenize } from "./fingerprint";

export interface DedupResult {
  links: DedupedLink[];
  removed: number;
}

/**
 * 多维度去重：
 * 1) URL 维度 —— 规范化 URL 精确匹配（含历史已见 URL）
 * 2) 标题维度 —— 规范化标题的指纹匹配（含历史）
 * 3) 内容维度 —— 标题+摘要的 SHA-256 指纹精确匹配（含历史）
 * 4) 内容相似度 —— 相近内容（不同 URL）的 Jaccard 近似去重
 *
 * @param seen 历史已见指纹集合（用于跨日去重）
 */
export function deduplicate(
  rawLinks: RawLink[],
  seen: Set<string>,
  similarityThreshold: number,
  log: Logger,
): DedupResult {
  const seenUrl = new Set<string>();
  const seenTitle = new Set<string>();
  const seenContent = new Set<string>();
  const tokenCache = new Map<string, Set<string>>();

  const out: DedupedLink[] = [];
  let removed = 0;

  for (const link of rawLinks) {
    const fp = buildFingerprints(link);

    if (seenUrl.has(fp.normalizedUrl) || seen.has(`u:${fp.normalizedUrl}`)) {
      removed++;
      continue;
    }
    if (fp.titleHash && (seenTitle.has(fp.titleHash) || seen.has(`t:${fp.titleHash}`))) {
      removed++;
      continue;
    }
    if (fp.contentHash && (seenContent.has(fp.contentHash) || seen.has(`c:${fp.contentHash}`))) {
      removed++;
      continue;
    }

    // 近似内容去重
    const tokens = tokenize(`${link.title} ${link.summary ?? ""}`);
    let nearDup = false;
    for (const existing of out) {
      const et = tokenCache.get(existing.normalizedUrl);
      if (et && jaccard(tokens, et) >= similarityThreshold) {
        nearDup = true;
        break;
      }
    }
    if (nearDup) {
      removed++;
      continue;
    }

    seenUrl.add(fp.normalizedUrl);
    if (fp.titleHash) seenTitle.add(fp.titleHash);
    if (fp.contentHash) seenContent.add(fp.contentHash);
    tokenCache.set(fp.normalizedUrl, tokens);
    out.push(fp);
  }

  log.info(`去重: ${rawLinks.length} -> ${out.length} (移除 ${removed} 条重复)`);
  return { links: out, removed };
}