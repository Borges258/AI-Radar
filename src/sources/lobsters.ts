import type { RawLink } from "../types";
import type { Source } from "./types";
import { getJson } from "../http";
import { sleep } from "../util";

/** Lobste.rs 数据源：JSON API，抓取 AI/ML 相关标签的故事 */
export class LobstersSource implements Source {
  id = "lobsters";
  name = "Lobste.rs";

  async fetch(): Promise<RawLink[]> {
    const tags = ["ai", "machinelearning", "programming"];
    const links: RawLink[] = [];

    for (const tag of tags) {
      try {
        const items = (await getJson(`https://lobste.rs/t/${tag}.json`)) as LobstersItem[];
        for (const it of items) {
          links.push({
            url: it.url,
            title: it.title,
            source: this.id,
            sourceName: this.name,
            summary: it.description || undefined,
            author: it.submitter_user,
            publishedAt: it.created_at,
            engagement: it.score ?? 0,
            tags: [...(it.tags ?? []), "tech-news"],
          });
        }
      } catch {
        // 某些标签可能不存在，跳过即可
      }
      await sleep(200);
    }
    return links;
  }
}

interface LobstersItem {
  url: string;
  title: string;
  description?: string;
  submitter_user?: string;
  created_at?: string;
  score?: number;
  tags?: string[];
}