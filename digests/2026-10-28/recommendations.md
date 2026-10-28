# 信息雷达 · 每日推荐 (2026-10-28)

> 共推荐 5 条高质量内容，按综合评分排序

## 每日摘要

今日聚焦AI前沿与工程实践：从Bash驱动的极简Agent框架，到GUI、推荐系统、Agent记忆机制的算法突破，再到RAG知识冲突的决策模型。涵盖Agent基础设施、多模态交互及LLM应用深度优化，为构建高效、智能的AI系统提供新思路与技术洞察。

## 1. shareAI-lab/learn-claude-code

- **来源**: GitHub
- **链接**: https://github.com/shareAI-lab/learn-claude-code
- **概述**: 一个基于Bash构建的极简Claude Code风格Agent框架，从零实现核心逻辑，旨在以最小依赖展示Agent Harness的构建原理。
- **摘要**: Bash is all you need -  A nano claude code–like 「agent harness」, built from 0 to 1
- **作者**: shareAI-lab
- **综合评分**: 91 (相关性 90% / 权威性 95% / 时效性 82% / 热度 100%)
- **推荐理由**: Bash极简主义，适合理解Agent底层。

## 2. GUI-JEPA: Candidate-Conditioned JEPA Latents as a Fast Action Policy for Mobile GUI Agents

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.36877v1
- **概述**: 提出GUI-JEPA模型，利用候选条件化JEPA潜空间作为快速动作策略，替代传统VLM逐token解码，显著提升移动GUI智能体效率。
- **摘要**: Mobile GUI agents are typically fine-tuned 7B-scale vision-language models (VLMs) that generate each action as text. However, these VLMs decode every action token by token, and even agents that score candidate actions keep a large language model or VLM in the loop, making them slow and memory-hungry. To address these issues, we propose GUI-JEPA, to our knowledge the first decoder-free GUI agent policy built on a Joint-Embedding Predictive Architecture (JEPA), which selects actions in the latent space of a JEPA encoder pretrained on unlabelled GUI screenshots. Its action- and region-conditioned latent predictor turns the screen latent into one latent per candidate action, letting lightweight heads score all candidates against the instruction in a single batched pass, without decoding a token. We further show that the scorer relies on this latent pathway and that the predictor is trained for the decision itself: a randomly initialised predictor does just as well as one pretrained on screen dynamics. On AndroidControl, GUI-JEPA is 2.8-4.0x faster on the same GPU than a Qwen2.5-VL-7B agent we fine-tune with the same inputs, while reaching 86-92% of its in-distribution accuracy with 6% of its parameters. Code is available at https://github.com/bcwang-sjtu/GUI-JEPA
- **综合评分**: 82 (相关性 100% / 权威性 100% / 时效性 85% / 热度 0%)
- **推荐理由**: 突破VLM解码瓶颈，提升GUI响应速度。

## 3. JevRec: Linguistic Encoding with Jev-like Decision Modeling for LLM-based Generative Recommendation

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.36937v1
- **概述**: JevRec通过Jev-like决策建模与语言编码，改进LLM生成式推荐系统，优化从交互历史到语义标识符的自回归生成过程。
- **摘要**: Generative recommendation (GR) represents items as semantic identifiers (SIDs) and autoregressively generates the next item's SID from interaction history. However, most methods assign the same SID length to all items despite highly unequal interaction frequencies. This uniform design repeatedly incurs the cost of fine-grained codes for popular items, while shortening codes to reduce this cost also compresses the semantic representations of long-tail items. Inspired by the compact forms of frequent expressions in natural language, we propose JevRec to encode items as variable-length words and generate the next item from interaction context. Linguistic encoding retains frequency-dependent semantic prefixes from shared codebooks, producing shorter SIDs for popular items and richer descriptions for long-tail items. Yet predicting a sequence-level length and generating token-level content impose different optimization requirements that may conflict under a shared output head. Our Jev-like decision modeling component therefore predicts a length distribution with a dedicated head and generates content conditioned on length through a separate head while sharing the interaction-history representation. Experiments on three public datasets show that JevRec outperforms all compared baselines across the evaluated recommendation metrics. Further analyses show lower training and inference time than TIGER and reduced gradient conflict between length and content prediction.
- **综合评分**: 82 (相关性 100% / 权威性 100% / 时效性 86% / 热度 0%)
- **推荐理由**: 优化生成式推荐，平衡语义与决策。

## 4. TrawMem: Reframing Agent Memory as Task-Oriented Role-Adaptive Workspaces

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.36918v1
- **概述**: TrawMem重构Agent记忆系统，将其定义为面向任务的角色自适应工作区，而非仅基于相关性的检索，提升长期交互利用效率。
- **摘要**: Large language model (LLM) agents rely on memory systems to leverage long-term interactions, yet existing systems typically retrieve memories based on their relevance to the current query and use them as contextual evidence. However, relevance alone does not characterize how a memory contributes to task solving: the same memory may serve different roles across tasks, such as directly supporting the answer or linking to complementary memories with weaker semantic relevance but necessary information. We therefore reframe agent memory systems as Task-Oriented Role-Adaptive Workspaces, where memories are selected and organized by their task-oriented roles and relations. Based on this view, we propose TrawMem, which organizes interaction histories into local threads and constructs task-oriented workspaces by assigning roles and jointly selecting complementary memories. Experiments on LoCoMo and MemGallery with four open- and closed-source backbones show consistent improvements over representative memory systems, with macro-F1 gains of 2.23-3.14 points. On LoCoMo, TrawMem improves the LLM-Judge score over SimpleMem by 4.07 and 4.31 percentage points on Qwen3.5-9B and DeepSeek-V4-Flash, respectively, while requiring approximately 12.8% and 5.1% fewer context tokens, respectively.
- **综合评分**: 82 (相关性 100% / 权威性 100% / 时效性 86% / 热度 0%)
- **推荐理由**: 创新Agent记忆范式，增强任务适应性。

## 5. Do We Need an LLM to Know Why Sources Conflict? Decision Models for Knowledge-Conflict Typing in RAG

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.36915v1
- **概述**: 研究RAG中知识冲突的决策模型，分析无需LLM即可判断来源冲突原因（如多解、争议、过时），指导针对不同冲突类型的响应策略。
- **摘要**: When the sources retrieved for a query disagree, the right response depends on why they disagree: a question with several valid answers, a contested topic, stale information and a false source each call for different behaviour. Cattan et al. (2025) showed that telling a generator the conflict type improves its responses by about 24 points, but that predicting the type is hard even for frontier LLMs. We study whether typed decision models, which return probabilities over fixed options in a single forward pass instead of generating text, can do this classification fast and cheaply. Using the CONFLICTS benchmark and the original paper's prompt verbatim, we evaluate all 11 decision models served by one commercial inference gateway, from 7 providers, against Gemini models on identical inputs. Asked directly, the decision models reach 50.0--67.0% accuracy; 10 of the 11 match or exceed Gemini 2.5 Flash, the paper's model (61.3%), at 4--39x lower billed cost (2 were free) and 2.6--6.0x lower latency. The current Gemini 3.8 Flash (70.0%) is significantly more accurate than 8 of them, but sending each decision model's least confident quarter of queries to it gives a cascade statistically tied with it for 8 of the 11, at 25--37% of its cost. End to end, answers generated with the types of 10 of the 11 follow the expected behaviour as often as with the LLM's types. Decomposing the taxonomy into yes/no questions lowers accuracy for every model, and a repair fitted on one model does not transfer. Pre-specified diagnostics show that dates play no measurable role and that sensitivity to source order varies widely between models. Decision models detect a planted false source less reliably than the LLM as hard labels, but their probabilities still separate planted from clean sources. We release code, prompts and all model outputs at https://github.com/Parv17k/decision-models-conflict-typing.
- **综合评分**: 82 (相关性 100% / 权威性 100% / 时效性 86% / 热度 0%)
- **推荐理由**: 精准分类RAG冲突，优化检索响应。
