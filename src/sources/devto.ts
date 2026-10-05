import type { RawLink } from "../types";
import type { Source } from "./types";
import { getJson } from "../http";
import { sleep } from "../util";

/** Dev.to 数据源：Forem API，抓取 AI 相关标签的热门文章 */
export class DevToSource implements Source {
  id = "devto";
  name = "Dev.to";

  async fetch(): Promise<RawLink[]> {
    const tags = ["ai", "llm", "machinelearning", "agents"];
    const links: RawLink[] = [];

    for (const tag of tags) {
      try {
        const items = (await getJson(
          `https://dev.to/api/articles?tag=${tag}&top=7&per_page=15`,
        )) as DevtoArticle[];
        for (const a of items) {
          links.push({
            url: a.url,
            title: a.title,
            source: this.id,
            sourceName: this.name,
            summary: a.description || undefined,
            author: a.user?.name,
            publishedAt: a.published_at,
            engagement: (a.public_reactions_count ?? 0) + (a.comments_count ?? 0),
            tags: [...(a.tag_list ?? []), "dev"],
          });
        }
      } catch {
        // 标签无数据时跳过
      }
      await sleep(200);
    }
    return links;
  }
}

interface DevtoArticle {
  url: string;
  title: string;
  description?: string;
  published_at?: string;
  public_reactions_count?: number;
  comments_count?: number;
  tag_list?: string[];
  user?: { name?: string };
}