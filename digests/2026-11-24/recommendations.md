# 信息雷达 · 每日推荐 (2026-11-24)

> 共推荐 5 条高质量内容，按综合评分排序

## 每日摘要

今日精选聚焦AI前沿应用与优化。RepoClean探索代码清理Agent，PCC提升LLM剪枝效率，FiRE革新翻译评估，PseuDRAGON助力金融数据脱敏，HEART优化心电特征学习。涵盖软件工程、模型压缩、隐私保护及医疗AI，展现LLM在垂直领域的最新突破。

## 1. RepoClean: Evaluating Coding Agents on Repository-Level Obsolete Code Cleanup

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.30350v1
- **概述**: RepoClean基准测试了大模型在仓库级代码清理中的表现，旨在解决软件演进过程中冗余或过时代码自动识别与移除的关键挑战，评估Agent处理复杂代码库的能力。
- **摘要**: Large language model (LLM) agents have demonstrated strong repository-level programming capabilities. However, as software evolves, repository code may become redundant or obsolete, increasing maintenance costs and potentially introducing functional issues. Agents must therefore identify and remove unnecessary code safely, yet autonomous repository-level code cleanup remains insufficiently evaluated in isolation. To evaluate this capability, we introduce RepoClean, a benchmark of 200 cleanup tasks from 34 popular open-source Python repositories. RepoClean is constructed by automatically reintroducing deleted code from real repository histories into newer versions, preserving current implementations and retaining instances where previously passing tests consequently fail. To restore existing functionality without new feature development, agents must use repository interfaces and cross-file dependencies to determine which historical code to remove and which implementations to preserve. Evaluation of seven models shows that even the best-performing model, GPT-6 Astra, resolves only 23% of tasks. Further analysis reveals that agents remove substantially less obsolete code when cleanup is not explicitly requested. RepoClean provides a foundation for systematically studying these cleanup challenges and advancing coding agents toward autonomous software maintenance.
- **综合评分**: 81 (相关性 100% / 权威性 100% / 时效性 82% / 热度 0%)
- **推荐理由**: 洞察代码维护Agent能力边界

## 2. PCC: Pivotal Channel Compensation for Layer Pruning of Large Language Models

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.30183v1
- **概述**: 提出PCC层剪枝方法，通过处理关键通道补偿，在高效剔除LLM冗余参数的高压缩率同时，显著降低精度损失，为模型轻量化部署提供新的有效路径。
- **摘要**: Treating independent layers as the minimal pruning unit allows layer pruning to efficiently eliminate many redundant parameters and achieve high compression rates. Layer pruning has become a promising and prevalent structured pruning technique for large language models (LLMs). However, multi-layer removal can lead to significant performance degradation for LLMs. Although some works have explored various compensation methods for pruned layers, they are inefficient and costly. Observing that the expression of a large proportion of information is concentrated on a small number of pivotal channels, we propose a novel post-pruning compensation method for layer pruning, called pivotal channel compensation (PCC). PCC can achieve significant performance improvement by compensating for a small number of channels through learnable linear transformations at the pruning interface. Besides, we propose a new evaluation metric, called channel-wise average performance improvement (CAPI), which can measure the efficiency of channel-wise compensation. Our experimental results across various LLMs demonstrate that PCC can achieve significant and consistent improvements and high CAPI on language modeling and zero-shot question answering for the state-of-the-art cross-layer and consecutive-layer pruning methods. Compared with existing compensation methods, PCC can achieve competitive results with fewer additional parameters and less training cost.
- **综合评分**: 81 (相关性 100% / 权威性 100% / 时效性 80% / 热度 0%)
- **推荐理由**: 平衡LLM压缩率与模型精度

## 3. FiRE: Fine-grained Ranking Evaluation for Machine Translation

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.30168v1
- **概述**: FiRE提出了细粒度机器翻译排序评估框架，旨在更可靠地辨别优质与劣质译文，弥补现有评估范式在区分细微翻译质量差异上的不足，提升MT系统评估精度。
- **摘要**: Developing reliable machine translation (MT) systems hinges on our ability to distinguish superior translations from inferior ones. However, existing evaluation paradigms, whether limited to coarse overall rankings or misaligned with human preferences, fail to deliver interpretable, fine-grained feedback in reference-free settings. We present a Fine-Grained Ranking Evaluation method (FiRE) that leverages off-the-shelf large language models to perform criterion-driven pairwise comparison across three complementary dimensions: faithfulness, fluency, and consistency of style, instead of producing a single holistic judgment. To enable rigorous meta-evaluation of evaluation paradigms in the absence of any suitable testbed, we construct the first human-annotated, reference-free benchmark for fine-grained ranking evaluation, achieving substantial inter-annotator agreement. Through meta-evaluation on this benchmark and existing MQM datasets, FiRE demonstrably outperforms regression-based and error-analysis metrics in aligning with human comparative judgments, while providing more informative insights into translation quality. Finally, our examination of LLM evaluator biases (position and self-enhancement) and their handling of tied cases offers guidance for more nuanced MT evaluation. Code and benchmark resources are available at https://github.com/wygao8/FiRE-MT.
- **综合评分**: 81 (相关性 100% / 权威性 100% / 时效性 80% / 热度 0%)
- **推荐理由**: 革新机器翻译质量评估标准

## 4. PseuDRAGON: Knowledge-Guided Local LLMs for Financial-Data Pseudonymization in Closed Networks

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.30353v1
- **概述**: PseuDRAGON利用知识引导的本地LLM，在封闭网络中自动解析缩写列名并识别个人信息，为金融数据脱敏提供了无需联网的高安全隐私保护解决方案。
- **摘要**: Staff pseudonymizing financial data in closed networks must interpret abbreviated column names, identify personal information, and choose processing methods. Local language models can assist, but may give different labels for the same input. PseuDRAGON keeps confirmed judgments and corrections outside a fixed model and reuses them through exact-name lookup and learned rules. For expert review, the workflow searches institutional policy, national privacy law, then international sources. Across 92 columns from one institution, rules increase reuse under the same approval checks from 75 to 83 labels without reuse errors when all training judgments are available. With 25% of the training judgments, withholding non-PII rules for unseen names eliminated the extra PII misses in replay at the cost of lower reuse. Revising or withdrawing approvals rebuilds derived rules, and tests on synthetic records verify that selected methods produce the specified outputs. In three paired runs, the history-first baseline cut automated identification time by 83.0% on average versus no reuse.
- **综合评分**: 77 (相关性 90% / 权威性 100% / 时效性 82% / 热度 0%)
- **推荐理由**: 实现金融数据离线安全脱敏

## 5. HEART: Hierarchical Expert Adaptive Refinement Transformer for ECG Representation Learning

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.30298v1
- **概述**: HEART是一种分层专家自适应精调Transformer，专门用于心电信号（ECG）表征学习，能有效从重复心脏周期中提取稀疏且细微的诊断线索，提升医学AI精度。
- **摘要**: Learning robust representations from electrocardiograms (ECGs) is challenging because repeated cardiac cycles coexist with subtle and sparse diagnostic cues in local morphology and rhythm-level context. Existing ECG foundation models commonly rely on Transformerbased patch encoders with uniformly shared dense refinement pathways, limiting adaptive processing across heterogeneous ECG tokens. We propose HEART (Hierarchical Expert Adaptive Refinement Transformer), an ECG foundation model that introduces stage-specific conditional expert refinement during self-supervised pre-training. HEART places a local-level MoE over patch-level representations before temporal contextualization and a global-level MoE over context-integrated token representations after self-attention. Token-level Top-1 routing allows different patches or contextual tokens within the same ECG to follow different expert pathways. On public ECG benchmarks, HEART achieves strong performance under both linear probing and fine-tuning, with particularly large frozen-encoder gains on PTB-XL Form and Rhythm (+6.76 AUROC points each over the strongest protocol-reproduced baseline). Routing analyses provide qualitative evidence of complementary local and global expert specialization. We release our code and pretrained models at https://anonymous.4open.science/r/HEART-5E9F.
- **综合评分**: 77 (相关性 90% / 权威性 100% / 时效性 81% / 热度 0%)
- **推荐理由**: 提升心电信号诊断特征精度
