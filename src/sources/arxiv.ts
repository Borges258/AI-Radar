import type { RawLink } from "../types";
import type { Source } from "./types";
import { getText } from "../http";
import { sleep } from "../util";

const CATEGORIES = ["cs.AI", "cs.CL", "cs.LG"];

/** ArXiv 数据源：export API，抓取最新论文（解析 Atom XML） */
export class ArxivSource implements Source {
  id = "arxiv";
  name = "ArXiv";

  async fetch(): Promise<RawLink[]> {
    const links: RawLink[] = [];

    for (const cat of CATEGORIES) {
      const url = new URL("https://export.arxiv.org/api/query");
      url.searchParams.set("search_query", `cat:${cat}`);
      url.searchParams.set("sortBy", "submittedDate");
      url.searchParams.set("sortOrder", "descending");
      url.searchParams.set("max_results", "15");
      const xml = await getText(url.toString());
      links.push(...parseAtom(xml, this.id, this.name, cat));
      await sleep(200);
    }
    return links;
  }
}

function parseAtom(xml: string, id: string, name: string, category: string): RawLink[] {
  const links: RawLink[] = [];
  const entries = xml.split("<entry>").slice(1);

  for (const entry of entries) {
    const title = extract(entry, "title");
    const link = extract(entry, "id");
    const summary = extract(entry, "summary");
    const published = extract(entry, "published");
    if (!title || !link) continue;

    links.push({
      url: link,
      title: decode(title),
      source: id,
      sourceName: name,
      summary: decode(summary),
      publishedAt: published || undefined,
      tags: ["paper", category],
    });
  }
  return links;
}

function extract(xml: string, tag: string): string {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return m ? m[1] : "";
}

function decode(s: string): string {
  return s
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\s+/g, " ")
    .trim();
}