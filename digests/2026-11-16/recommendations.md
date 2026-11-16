# 信息雷达 · 每日推荐 (2026-11-16)

> 共推荐 5 条高质量内容，按综合评分排序

## 每日摘要

今日聚焦VLM歧义处理、LLM去审查技术演进及电商Agent持续自训练。同时，研究指出AI审稿偏好附录的偏差，并推出一款高效Text-to-SQL模型。这些成果为构建更具鲁棒性、合规性及实用价值的AI系统提供了关键参考。

## 1. AmbiSteer: Selectively Eliciting Ambiguity-Aware Responses in Vision-Language Models

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.17900v1
- **概述**: AmbiSteer旨在解决视觉语言模型在证据不足时过度自信的问题，通过激发其对参考歧义的感知能力，显著提升模型在复杂视觉场景下的响应准确性与可靠性。
- **摘要**: Vision-language models (VLMs) often exhibit overconfidence, providing firm answers even when visual evidence is insufficient. A prominent case is referential ambiguity in Visual Question Answering (VQA), where multiple entities in an image are plausible referents of a question. Addressing such cases requires recognizing when ambiguity is present: ambiguous questions can be handled by asking for clarification or enumerating plausible referents, while unambiguous questions should receive a direct answer. Current VLMs struggle with this distinction, often defaulting to a single interpretation. To investigate whether activation steering can serve as an inference-time mechanism to elicit such behaviors, we introduce AmbiSteer, a lightweight framework to selectively elicit ambiguity-aware behavior. Across three VLMs, we find that steering alone has limited and model-dependent effects, while prompting is generally more effective. Combining prompting and steering substantially increases clarification and enumeration behaviors, but also elicits them on unambiguous cases. AmbiSteer addresses this using a linear classifier to predict input ambiguity and condition the steering direction accordingly, increasing the proportion of inputs handled appropriately from 59.0% to 77.0% on average across models. Our work sets the ground for lightweight approaches to reduce model overconfidence in uncertain multimodal settings.
- **综合评分**: 76 (相关性 100% / 权威性 100% / 时效性 53% / 热度 0%)
- **推荐理由**: 提升VLM在歧义场景下的鲁棒性

## 2. Is Abliteration Getting Harder? Not Uniformly: Refusal Removal by Direction-Based Ablation and ARA in Heretic on the Qwen3.8, Gemma 4, Olmo 3.1 and Mistral Small 3.2 LLMs Versus Their Predecessors

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.17846v1
- **概述**: 该研究评估了不同基座模型在应用去审查技术后的表现差异，指出权重编辑效果并非均匀分布，为LLM安全对齐与模型行为控制提供了重要的实证数据支持。
- **摘要**: Abliteration, a fine-tuning-free weight edit, removes refusal from open-weight large language models (LLMs). The developer of Arbitrary-Rank Ablation (ARA), an optimisation-based variant, reports that direction-based abliteration, which ablates a refusal direction, increasingly fails on newer models. On five release pairs, refusal removal did not become uniformly harder. Qwen2.5-32B and Qwen3.8-27B, Gemma-2-27B and Gemma-4-31B, OLMo-2-32B and Olmo-3.1-32B, Mistral-Small-2409 and Mistral-Small-3.2, and Qwen2.5-7B and Qwen3.5-4B were edited in Heretic 2.0 by three or four direction-based methods (difference-in-means, MPOA, SOM and, on the small pair, J-space) and ARA under the same prompts, nominal search budget, first-token KL divergence cap and selection rule; removal counted as harder when the automatic WildGuard judge found more of 972 held-out harmful prompts (JailbreakBench, XSTest, StrongREJECT, HarmBench and an author-compiled malicious-code bank) still refused. After direction-based removal, newer releases retained -1 to +37 percentage points more refusal, and after ARA -26 to +34. With run-to-run variance included, between-pair heterogeneity of the direction-based effect ranged from high to low with the scale and variance model (I^2 20-80%). ARA lost less effectiveness than direction-based methods in Gemma and OLMo and more in Qwen; each verdict rests on one ARA run, and some changed with the divergence budget or variance model. In Gemma the direction-based increase came from the malicious-code bank and reversed on public sets. Contrary to prediction, keyword counts at the tool's window did not undercount judged refusal on average, but differed by a mean 7 points per model. Audits of a single pair, method or prompt source can reach opposite conclusions. Whether a newer model resisted removal depended on the release pair, method and budget, not on generation alone.
- **综合评分**: 76 (相关性 100% / 权威性 100% / 时效性 53% / 热度 0%)
- **推荐理由**: 揭示LLM去审查技术的新挑战

## 3. G-CAST: Governed Continual Self-Training for E-Commerce Agents under Evolving Demands

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.17814v1
- **概述**: G-CAST提出一种治理型持续自训练框架，使电商对话代理能够动态适应需求变化，有效解决了LLM代理在长周期业务场景中容易产生的知识老化与适应性不足问题。
- **摘要**: With the rapid advancement of Large Language Models (LLMs), an increasing number of users are turning to LLM-powered agents for conversational shopping in e-commerce. However, the user needs continue to change as new product categories, procurement scenarios, and feature requests emerge. At the same time, the product's execution harness-including its tools, skills, and operating procedures-continues to evolve to support increasingly sophisticated interactions. These changes create two practical challenges: 1) Demand drift alters the distribution, intent, and complexity of user requests, causing a model trained once to fall behind; 2) Harness evolution requires the model to use newly introduced capabilities correctly without losing behavior that users already rely on. Periodic manual retraining is too delayed and labor-intensive for this setting. To address these challenges, we present G-CAST, a governed continual self-training system that converts daily production evidence under evolving demand and capability contracts into reward-routed, entropy-prioritized training data and governed reward evolution. Governed checkpoint transition under cumulative evaluation controls each model update, enabling the agent to learn newly introduced behaviors without sacrificing previously accepted capabilities. Experiments on a real production e-commerce agent show that G-CAST achieves stronger adaptation to newly introduced demand while better preserving previously accepted behavior compared with a strong autonomous post-training baseline. Ablations further show that both reward-routed, entropy-prioritized data orchestration and governed reward evolution are important to these gains. G-CAST is now deployed in Yuancai(http://cai.1688.com/), a B2B procurement agent on Alibaba's 1688 platform.
- **综合评分**: 75 (相关性 100% / 权威性 100% / 时效性 52% / 热度 0%)
- **推荐理由**: 助力电商Agent动态适应业务

## 4. AI Reviews Are Biased Towards the Appendix

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.17811v1
- **概述**: 研究揭示了大语言模型在辅助学术审稿时存在的系统性偏差，发现模型倾向于关注论文附录而非正文，这一发现对于优化AI辅助同行评审流程及提升审稿质量具有重要警示意义。
- **摘要**: Large language models (LLMs) are increasingly used by reviewers to highlight weaknesses during the reviewing process, and their outputs often shape the reviews that humans submit. Prior work studies how LLM reviews align with human ones, yet we know little about which parts of a paper these models actually criticize. In this work, we investigate 2,000 papers from ACL, EMNLP, COLM, and ICLR, and show that the latest GPT and Claude models draw about 50% or more of their review weaknesses from the appendix. This behavior holds across the API, coding-agent, and web access methods for using LLMs to review a paper. In contrast, we find that humans draw only 8.4% of their weaknesses from the appendix, and these weaknesses primarily revolve around a paper's presentation and content related to its core idea. Meanwhile, LLMs draw weaknesses from deep in the appendix that concern fine-grained technical details not central to the paper's contributions. We anticipate that our analysis will contribute to the scholarly discourse on AI reviews. Our code is publicly available at: https://github.com/cincynlp/review_appendix.
- **综合评分**: 75 (相关性 100% / 权威性 100% / 时效性 52% / 热度 0%)
- **推荐理由**: 警示AI审稿存在的偏差

## 5. LuthorSQL: A One-Pass Text-to-SQL Model as System 1 for a Slower LLM Agent

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.17780v1
- **概述**: LuthorSQL作为快速Text-to-SQL模型，充当LLM代理的直觉系统，通过单次前向推理生成SQL语句，大幅降低了数据库查询的延迟与成本，并有效保护了敏感数据。
- **摘要**: Frontier LLM agents that query databases with tools are among the most accurate text-to-SQL systems, but per-query calls to a hosted model are slow, costly, and expose sensitive organizational queries to external APIs. For example, a Claude Opus 5.5 agent serving 10,000 queries a day costs over $70,000 a year at list price. To what extent can local hardware already owned by an organization offload this burden without compromising the agent's accuracy? We present LuthorSQL, a non-autoregressive 7B text-to-SQL model that serves as a rapid System 1 gate for a slower LLM agent (System 2), escalating queries only when uncertain. LuthorSQL makes a single forward pass to predict slot scores over a bounded grammar for query plans, compiles and runs up to 32 candidate plans, and chooses an answer using a trained validator. On its own, LuthorSQL reaches 68.03% execution accuracy on BIRD's hidden test set at 0.84 s per question on a single GPU, maintains its accuracy in 9 GB with 8-bit quantized weights, and transfers zero-shot to Snowflake, BigQuery, MySQL, PostgreSQL, and DuckDB within 3.1 points of its native SQLite accuracy. Combined with Claude Opus 5.5 in a pre-registered confidence cascade over 227 questions on databases published after Opus's training cutoff, LuthorSQL answers nearly half of all questions locally and cuts API cost by 33.3% at the same accuracy. Finally, contamination probing shows that Opus reproduces 48-92% of public benchmark gold queries verbatim without seeing the schema; however, its tool-assisted accuracy holds on renamed schemas and reaches 95.6-97.4% on post-cutoff databases. Code and data: https://github.com/IAMIbrahimmemon/luthorsql
- **综合评分**: 75 (相关性 100% / 权威性 100% / 时效性 52% / 热度 0%)
- **推荐理由**: 高效低成本解决Text-to-SQL
