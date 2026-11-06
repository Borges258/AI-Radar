# 信息雷达 · 每日推荐 (2026-11-06)

> 共推荐 5 条高质量内容，按综合评分排序

## 每日摘要

今日资讯聚焦多模态前沿突破与AI安全：WeLM-Image实现统一图像生成，PSGAgent提升场景图推理，EnvOpt优化智能体环境。研究深入揭示LLM语法特征编码及视觉模型组合风险，为构建可靠、高效的智能系统提供关键洞见。

## 1. PSGAgent: Enhancing MLLMs' Dynamic Visual Perception for Panoptic Scene Graph Generation via Agentic Reasoning

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.07408v1
- **概述**: PSGAgent通过智能体推理增强多模态大模型在复杂全景场景图生成中的动态视觉感知能力，显著提升了模型对物体间细粒度关系的整体理解与生成精度。
- **摘要**: Panoptic Scene Graph generation (PSG) requires holistic yet fine-grained reasoning over complex relations among objects. However, current Multimodal Large Language Models (MLLMs) applied to PSG suffer from a perception bottleneck: they function as static observers limited by fixed-resolution views. As a result, models often overlook critical relations involving small or peripheral objects and struggle to differentiate ambiguous predicates in complex scenes. To address these limitations, we propose PSGAgent, an agentic framework that enhances visual perception for PSG through a think-act-observe loop. PSGAgent allows MLLMs to dynamically refine their visual perception using two tools: a Region Zoom-In Tool for local exploration of small or boundary relations and a Visual Highlight Tool for relation-focused segmentation that filters out irrelevant contextual noise. To optimize decision-making, we construct a two-stage training pipeline. First, we create a high-quality, error-aware Multimodal Chain-of-Thought (M-CoT) dataset that provides robust supervision for cold-start learning. Then, we design a novel hierarchical reward mechanism integrated with Group Sequence Policy Optimization (GSPO) to enable strategic and adaptive tool usage. Extensive experiments on the PSG benchmark show that PSGAgent achieves SOTA performance, demonstrating strong capability in both holistic and fine-grained scene understanding.
- **综合评分**: 81 (相关性 100% / 权威性 100% / 时效性 80% / 热度 0%)
- **推荐理由**: 提升多模态模型复杂场景推理能力

## 2. WeLM-Image: A Unified Image Generation Model towards Visual Intelligence

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.07392v1
- **概述**: WeLM-Image是一款统一的图像基础模型，它将多模态理解深度融入文生图、指令编辑等多任务中，旨在通过整合不同视觉智能任务，实现更高效、通用的图像生成与处理。
- **摘要**: We present \textbf{WeLM-Image}, a unified image foundation model that integrates multimodal understanding into text-to-image generation, instruction-guided editing, and multi-reference synthesis. Designed for single-GPU deployment in WeChat's large-scale consumer applications, the model processes text, reference images, and target latents as one interleaved sequence. A Mixture-of-Transformers (MoT) backbone combines shared attention with independent understanding and generation parameters to limit optimization interference. Equipping each path with Mixture-of-Experts (MoE) modules provides sparse capacity, with 31.7B stored parameters and approximately 5.4B generation parameters activated per target latent token. A generation-oriented data engine combines a knowledge-grounded visual vocabulary with large-scale visual clustering to balance semantic coverage and editing tasks, while training-time evaluation guides iterative data refinement. Bilingual annotations and verified editing supervision support progressive training up to native 1.5K resolution. We optimize generation and editing separately with rubric- and checklist-based rewards, then consolidate the specialized policies through noise-aware on-policy distillation. In the reported overall comparisons, the 1536-resolution model ranks first among the evaluated open-source models on PRISM-Bench, Qwen-Image-Bench, and UnicBench. MeanFlow-based few-step distillation yields WeLM-Image-Turbo, which generates a $1024\times1024$ image in 4.98\,s on a single NVIDIA H20 GPU using eight guidance-free steps.
- **综合评分**: 81 (相关性 100% / 权威性 100% / 时效性 80% / 热度 0%)
- **推荐理由**: 统一图像生成与理解，构建视觉智能基础

## 3. EnvOpt: Automated Optimization for Agent Environments

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.07372v1
- **概述**: EnvOpt提出了一种针对LLM智能体环境的自动化优化方法，不仅关注模型参数与测试集，更通过系统优化环境配置，以低成本提升智能体在复杂任务中的成功率与鲁棒性。
- **摘要**: An LLM agent's cost and success depend on its model, its harness, and its environment. In addition to the widely studied directions of parameter tuning and harness optimization, we propose the third direction: optimization over stationary environments. Agents are often deployed in rich environments shared by many tasks, such as a company's Slack workspace or a complex collection of data sources, documents or tickets. We call these environments stationary environments. We introduce EnvOpt, a method for automated end-to-end optimization of stationary environments for any given model and harness, using real or synthetic tasks without needing any graders or reference answers. On AutomationBench, EnvOpt reduces the cost of Claude Haiku 4.5 by 72.7% and raises its pass rate by 14.34%. The same environment transfers to Opus 5, cutting its cost by 68.1% with a 1.34% gain. Added on top of Meta-Harness's optimized harness for Haiku 4.5, it lowers cost by a further 83.4% and adds 11.17% accuracy over Meta-Harness alone. Across 5 benchmarks, EnvOpt significantly reduces the cost of agents while improving or maintaining pass rate, and is transferable to different models and different harnesses. We also discuss common successful and rejected environment optimization strategies during automated optimization. More broadly, our results show that how information is represented to an agent shapes both its cost and its success, making the environment worth optimizing in addition to the parameters and the harness.
- **综合评分**: 81 (相关性 100% / 权威性 100% / 时效性 80% / 热度 0%)
- **推荐理由**: 低成本优化智能体运行环境，提升鲁棒性

## 4. Encoding and Propagation of Grammatical Number in Large Language Models

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.07283v1
- **概述**: 该研究利用稀疏自编码器分析大语言模型内部状态，揭示了模型如何在隐空间中编码并传播语法数特征，为理解LLM的语言结构处理机制及可解释性研究提供了重要视角。
- **摘要**: Sparse autoencoders (SAEs) have become an increasingly popular means of translating Large Language Model (LLM) hidden state vectors into a human-comprehensible list of features or symbols. As such, SAEs may provide insight into an LLM's knowledge representation and internal ``mental'' grammar - topics of pragmatic interest for mechanistic interpretation of AI behavior and of theoretical interest for the study of in silico representations of human language. Language models with fewer than 100M parameters, trained on small corpora, nonetheless exhibit strong grammatical competence and discourse coherence, despite producing content of limited reliability. We use SAEs that we trained on one such model (Pythia-70M) to conduct an in-depth examination of how a single grammatical phenomenon, number agreement, is represented and processed in an LLM. We demonstrate the mechanism and the methodology by which SAEs can be used to find and propagate ``plural noun'', ``plural matrix subject'', and ``generate a plural verb'' features which cause the LLM to produce plural verb forms such as ``are'', ``do'', or ``have'' instead of ``is'', ``does'', and ``has'' in response to prompts such as ``the men in the park''. We show that intervening to remove these features from the hidden states of plural subject noun tokens causes the model to produce singular verbs instead, and vice versa. We also show that corresponding ``singular noun'' and ``generate a singular verb'' features are not as effective for this task. This asymmetry suggests that Pythia-70m makes use of a privative representation of grammatical number in English. These findings replicated with larger LLMs Gemma-2-2b and Llama-3.1-8b yielded similar results. Our main contribution is a novel approach to the use of SAEs to understanding how LLMs encode human language that addresses a number of technical and methodological challenges.
- **综合评分**: 81 (相关性 100% / 权威性 100% / 时效性 78% / 热度 0%)
- **推荐理由**: 揭示LLM语法特征编码，增强可解释性

## 5. Compositional Unalignment: Auditing Safety in Large Vision-Language Models

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.07216v1
- **概述**: 该审计研究指出大型视觉语言模型存在组合失配漏洞，即良性图像与提示词结合后可能因跨模态推理产生有害输出，强调了在多模态交互场景中强化组合安全对齐的必要性。
- **摘要**: Large vision-language models (LVLMs) are vulnerable to compositional harm: an image and a prompt that are benign in isolation become harmful through the model's cross-modal reasoning. Recent alignment methods report strong scores on compositional safety benchmarks, but an LLM judge only measures observed behavior and cannot reveal how robustly safety is integrated into the model. We argue that un-alignment provides a complementary audit of alignment robustness. We first show that minimal supervised fine-tuning reaches an LLM-judge score comparable to a multi-stage reinforcement-learning pipeline, so similar benchmark scores cannot establish robustness by themselves. We then show that recognition and refusal of compositional harm are decoupled: nine standard direction-finding methods detect compositional harm with up to AUC=0.99, yet ablating the recovered directions either leaves refusal intact or destroys model coherence. We therefore propose CMaG, a training-free un-alignment method for compositional safety. CMaG measures refusal intention with a refusal-versus-compliance log-probability margin, takes its gradient with respect to mid-layer activations, and contrasts it against partially benign pairs to isolate the cross-modal interaction term. A single backward pass over 80 examples yields a direction along which steering monotonically converts refusal into compliance. On Qwen2.5-VL-7B and LLaVA-1.5-7B, CMaG reduces compositional safety scores by up to 65 points while over 98% of outputs remain coherent, outperforming gradient-based baselines; the direction also transfers to text-explicit harm and un-aligns models hardened by defensive training. Compositional safety can thus appear behaviorally strong while remaining fragile to targeted internal intervention. Warning: this paper contains unsafe model outputs, including references to self-harm.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 77% / 热度 0%)
- **推荐理由**: 预警多模态组合风险，强化视觉模型安全
