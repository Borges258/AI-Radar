import type { RawLink } from "../types";
import type { Source } from "./types";
import { getJson } from "../http";
import { sleep } from "../util";

/** Hacker News 数据源：Algolia API，抓取近 24h 的 AI 相关热门故事 */
export class HackerNewsSource implements Source {
  id = "hackernews";
  name = "Hacker News";

  async fetch(): Promise<RawLink[]> {
    const queries = ["ai", "llm", "openai", "claude", "machine learning"];
    const sinceSeconds = Math.floor(Date.now() / 1000) - 86400;
    const links: RawLink[] = [];

    for (const q of queries) {
      const url = new URL("https://hn.algolia.com/api/v1/search");
      url.searchParams.set("query", q);
      url.searchParams.set("tags", "story");
      url.searchParams.set("hitsPerPage", "20");
      url.searchParams.set("numericFilters", `created_at_i>${sinceSeconds}`);
      const data = (await getJson(url.toString())) as HNResponse;

      for (const hit of data.hits ?? []) {
        links.push({
          url: hit.url ?? `https://news.ycombinator.com/item?id=${hit.objectID}`,
          title: hit.title ?? "",
          source: this.id,
          sourceName: this.name,
          summary: hit.story_text || undefined,
          author: hit.author,
          publishedAt: hit.created_at,
          engagement: hit.points ?? 0,
          tags: ["ai", "tech-news"],
        });
      }
      await sleep(200);
    }
    return links;
  }
}

interface HNHit {
  objectID: string;
  title?: string;
  url?: string;
  story_text?: string;
  author: string;
  created_at: string;
  points?: number;
}

interface HNResponse {
  hits?: HNHit[];
}