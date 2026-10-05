import type { RawLink } from "../types";
import type { Source } from "./types";
import { getJson } from "../http";

/** Hugging Face 数据源：Hub API，抓取趋势模型 */
export class HuggingFaceSource implements Source {
  id = "huggingface";
  name = "Hugging Face";

  async fetch(): Promise<RawLink[]> {
    const models = (await getJson(
      "https://huggingface.co/api/models?sort=trendingScore&direction=-1&limit=20",
    )) as HFModel[];
    return models.map((m) => ({
      url: `https://huggingface.co/${m.modelId}`,
      title: m.modelId,
      source: this.id,
      sourceName: this.name,
      summary: [m.pipeline_tag ?? "model", `${m.likes ?? 0} likes`, `${m.downloads ?? 0} downloads`]
        .filter(Boolean)
        .join(" · "),
      author: m.author || undefined,
      publishedAt: m.lastModified || undefined,
      engagement: m.likes ?? 0,
      tags: ["model", m.pipeline_tag ?? "ml"],
    }));
  }
}

interface HFModel {
  modelId: string;
  author?: string;
  pipeline_tag?: string;
  likes?: number;
  downloads?: number;
  lastModified?: string;
}