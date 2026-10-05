import type { RawLink } from "../types";
import type { Source } from "./types";
import { getJson } from "../http";
import { sleep } from "../util";

/** GitHub 数据源：Search API，抓取近期活跃的热门 AI 仓库 */
export class GithubSource implements Source {
  id = "github";
  name = "GitHub";

  async fetch(): Promise<RawLink[]> {
    const topics = ["llm", "ai-agent", "rag", "generative-ai"];
    const links: RawLink[] = [];
    const since = new Date(Date.now() - 7 * 86400_000).toISOString().slice(0, 10);

    for (const topic of topics) {
      const url = new URL("https://api.github.com/search/repositories");
      url.searchParams.set("q", `topic:${topic} pushed:>${since}`);
      url.searchParams.set("sort", "stars");
      url.searchParams.set("order", "desc");
      url.searchParams.set("per_page", "10");
      try {
        const data = (await getJson(url.toString(), {
          headers: { Accept: "application/vnd.github+json" },
        })) as GithubSearchResponse;
        for (const repo of data.items ?? []) {
          links.push({
            url: repo.html_url,
            title: repo.full_name,
            source: this.id,
            sourceName: this.name,
            summary: repo.description || undefined,
            author: repo.owner?.login,
            publishedAt: repo.pushed_at,
            engagement: repo.stargazers_count ?? 0,
            tags: [...(repo.topics ?? []), "github", "repo"],
          });
        }
      } catch {
        // 未认证 API 可能触发限流，跳过本主题
      }
      await sleep(1200);
    }
    return links;
  }
}

interface GithubSearchResponse {
  items?: {
    html_url: string;
    full_name: string;
    description?: string;
    pushed_at?: string;
    stargazers_count?: number;
    topics?: string[];
    owner?: { login?: string };
  }[];
}