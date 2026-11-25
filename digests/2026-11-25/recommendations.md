# 信息雷达 · 每日推荐 (2026-11-25)

> 共推荐 5 条高质量内容，按综合评分排序

## 每日摘要

今日聚焦AI智能体与LLM前沿。ShellBench探讨模型与框架对日常任务的影响，SOARS优化智能体搜索重排序。其他研究涵盖在线对话仇恨言论检测、LLM内部层维度度量，以及LLM生成四足机器人导航代码的有效性探索。

## 1. ShellBench: What Matters More for AI Agents, Models, or Harness for Everyday Tasks

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.32946v1
- **概述**: ShellBench研究指出，尽管2026年普通用户越来越多地使用AI智能体，但用户往往难以确定哪种配置最有效，该基准旨在揭示模型与执行框架在日常生活任务中的关键影响。
- **摘要**: The use of AI agents among the general public has been increasing exponentially throughout 2026, though it is often hard for users to determine which configuration is most effective for their personal use. To help provide clarity here we introduce ShellBench, 100 day-to-day tasks based on more than 10 million user requests, each set in a realistic workspace with messy files and competing data sources, and graded for both correctness and safety. We evaluate 12 models across 5 agent harnesses at 3 reasoning levels for a total of 53,100 rollouts, 20% of which are on tasks designated for public release. We find that model choice impacts performance more than harness choice, but the three leading models differ by only 1.1 percentage points. GPT-6.1 Sol passed 61.4% of attempts at about one-sixth of GPT-6 Astra's estimated token cost per attempt, while GPT-6 Astra led at 62.5%. We also found that harness choice had little effect on either performance or safety with all harnesses scoring between 42.9 (Claude Code) and 45.2 (OpenClaw) for pass@1.
- **综合评分**: 83 (相关性 100% / 权威性 100% / 时效性 89% / 热度 0%)
- **推荐理由**: 帮助优化智能体配置，提升日常任务效率。

## 2. SOARS: System One Assisted Reranking for Agentic Search

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.32917v1
- **概述**: SOARS提出了一种系统一辅助重排序方法，针对解决复杂信息需求的深度搜索智能体，通过优化检索证据的相关性，显著提升了下游推理任务的性能表现。
- **摘要**: Deep search agents address complex information needs through iterative retrieval and reasoning, where the relevance of retrieved evidence influences downstream performance. Existing rerankers improve retrieval effectiveness but introduce substantial latency and cost when invoked throughout the search trajectory. We introduce SOARS, a training-free framework leveraging a System One model for fast, calibrated relevance estimation. At each search step, SOARS selects query-relevant passages from long documents and reranks candidates in a single call, jointly considering the original question and agent-generated sub-query. Across six LLM backbones on BrowseComp-Plus and WebShaper, SOARS consistently improves answer accuracy and evidence recall while reducing search calls, end-to-end latency, and inference cost. On BrowseComp-Plus, it improves GPT-5.4 Mini's accuracy from 73.9% to 84.7% while reducing search calls from 23 to 14, demonstrating the potential of System One reranking for more effective and efficient deep search.
- **综合评分**: 83 (相关性 100% / 权威性 100% / 时效性 89% / 热度 0%)
- **推荐理由**: 优化搜索智能体性能，提升复杂信息检索精度。

## 3. Joint Detection of Constructive Speech, Hate Speech and Agreement in Online Conversations

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.32889v1
- **概述**: 该研究探索了在线对话中建设性言论、仇恨言论及同意度的联合检测，旨在通过识别负面互动，缓解仇恨言论对特定群体和个人的影响，防止用户因负面体验而退出在线讨论。
- **摘要**: Online hate speech is an ever-growing issue with negative impacts on both groups and individuals, potentially causing users to withdraw from online conversations and debate. With some prominent social media platforms reducing their moderation efforts, constructive speech has emerged as an alternative strategy for countering hate. Automated detection of constructive and hateful speech can aid monitoring and improve understanding of their prevalence and online dynamics. In this work, we collect and annotate a large dataset of English and Danish social media comments for hateful tone, constructive tone, and agreement with parent comments. We fine-tune several multilingual LLMs to classify along these three dimensions and compare context-enriched and non-context-enriched model architectures. The E5-large LLM performs best on both the context-enriched (82% average F1) and non-context-enriched (81.6% average F1) classification tasks, demonstrating the potential of multilingual LLMs for scalable detection of hateful and constructive speech across languages.
- **综合评分**: 83 (相关性 100% / 权威性 100% / 时效性 89% / 热度 0%)
- **推荐理由**: 助力构建更健康的在线社区，识别并缓解仇恨言论。

## 4. Measuring Layer-wise Intrinsic Dimensionality of FFNs in LLMs via PCA

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.32782v1
- **概述**: 文章通过PCA测量了现代LLM中FFN各层的固有维度，指出尽管传统Transformer在各层保持相同的FFN中间宽度，但不同层实际上具有不同的维度需求，揭示了模型架构设计的潜在改进空间。
- **摘要**: Modern large language models (LLMs) keep the feed-forward network (FFN) intermediate width identical across every layer, a convention inherited from the original Transformer. Yet mechanistic work suggests layers at different depths do qualitatively different work, raising a natural question: are their capacity demands also non-uniform, and if so, can a fixed parameter budget be allocated more wisely than uniformly? To probe this, we apply principal component analysis (PCA) to the input of each FFN down-projection and measure, for every layer, its intrinsic dimensionality as the smallest number of principal components needed to reconstruct the activation up to a fixed cosine similarity. Scanning 58 open-weight LLMs spanning 14 families and 70M to 72B parameters, we find a recurring middle-heavy profile in which middle layers carry higher intrinsic dimensionality than edge layers; the profile is robust to the calibration corpus, even across English and Chinese, and is largely preserved through post-training fine-tuning. As a direct test that this signal is structurally meaningful, we use it to guide width pruning in a knowledge-distilled student under a matched parameter budget: the PCA-guided allocation outperforms the uniform-width convention by +2.3 points on Qwen3-8B and +2.5 on Qwen2.5-3B, while lower-dispersion teachers show smaller gaps (+0.9 on Gemma-3-4B, +0.5 on LLaMA-3-8B), and a budget-matched inverted control does worst on all four teachers. Across these four teachers, the size of the gap tracks how unevenly the teacher's intrinsic dimensionality is distributed across layers (a single-number summary we call $σ_{99}$), and the advantage persists through downstream supervised fine-tuning. Code is available at https://github.com/naver-ai/lidf.
- **综合评分**: 83 (相关性 100% / 权威性 100% / 时效性 88% / 热度 0%)
- **推荐理由**: 洞察LLM架构内部特性，为模型优化提供理论依据。

## 5. Does Research-Paper Context Improve LLM-Generated Quadruped Navigation? An Exploratory Simulation Study

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.32381v1
- **概述**: 这项探索性模拟研究表明，虽然LLM能编写胜任的四足机器人导航代码，但注入大量研究背景有时反而因信息过载导致模型无法重新校准，未必能提升导航性能。
- **摘要**: Large language models can write competent robot navigation code, but not only does the research on the topic advance, a model may also, due to the volume of findings, fail to recall relevant findings and apply them to the task at hand. In this work, we test whether providing particular research papers as context improves the LLM-written navigation code for the Go2 quadruped, with the LLM (Claude Opus 5) and locomotion policy frozen. Specifically, we compare the navigation controllers the LLM writes when provided with and without particular papers across three settings: behavior trees, navigators edited from a shared base, and controllers written from scratch. When a maze's shortest route is blocked mid-episode, 2 of 8 controllers written with the context of an incremental-replanning paper complete all four trips under Isaac Sim physics, against 7 of 8 without it (two-sided Fisher's exact test, p = 0.041). This difference appears only under physics: in an idealized kinematic simulator, the controllers written with and without the paper are indistinguishable. We hypothesize that an LLM provided research papers as context tends to overweight both their content and their goals -- in this case, the efficiency of incremental replanning -- negatively affecting the fulfillment of the main task and leading to less robust code.
- **综合评分**: 82 (相关性 100% / 权威性 100% / 时效性 84% / 热度 0%)
- **推荐理由**: 揭示LLM代码生成在机器人导航中的局限性与优势。
