# 信息雷达 · 每日推荐 (2026-10-25)

> 共推荐 5 条高质量内容，按综合评分排序

## 1. Show HN: Benchmarks of continual learning model trained for a month on a laptop

- **来源**: Hacker News
- **链接**: https://news.ycombinator.com/item?id=50219762
- **摘要**: A month ago, I shared mini-AGI, an experiment in training a byte-level, continually learning language model from scratch on a single 8 GB laptop GPU (an RTX 3070).
To recap the setup briefly: it completely decouples model size from VRAM by paging experts to and from an NVMe drive (currently 397 experts &#x2F; 1.26B total parameters on disk, with only 32 resident &#x2F; ~109M active in 5.1 GB of VRAM). It trains on a single stream at batch 1, with the attention&#x2F;embedding trunk learning rate dampened to 0.1x to mitigate catastrophic forgetting.<p>The training is still going and went only through ~35% of the training corpus selected at the beginning of the run (about 8GB in total). Here is the current status:<p>1. enwik9 (First 10^9 bytes of English Wikipedia):<p><pre><code>    Model               Params   Data Read       Cost     enwik9 (bits&#x2F;byte) ↓

    Llama-3.2-1B        1.23B    36 TB (9T tok)  ~$900k   0.68
    Chinchilla 1B       1.00B    5.6 TB          ~$68k    0.90
    GPT-2 XL            1.56B    40 GB           ~$43k    1.07
    GPT-2 Large         0.77B    40 GB           ~$21k    1.12
    mini-AGI (online)   1.26B    2.8 GB          ~$56     1.14
    GPT-2 Medium        0.35B    40 GB           ~$10k    1.17
    mini-AGI (dynamic)  1.26B    2.8 GB          ~$56     1.23
    mini-AGI (frozen)   1.26B    2.8 GB          ~$56     1.29
    GPT-2 Small         0.12B    40 GB           ~$3k     1.33

</code></pre>
2. PG19 (100 Project Gutenberg books, 41 MB test split):<p><pre><code>    Model               Params   Trained On        Cost    PG19 (bits&#x2F;byte) ↓

    MambaByte-972M       0.97B   75 GB (PG19)      ~$4k    0.883
    MegaByte-1B          1.02B   80 GB (PG19)      ~$1.6k  1.000
    Transformer-320M     0.32B   80 GB (PG19)      ~$1.6k  1.057
    mini-AGI (online)    1.26B   2.8 GB (0 PG19)   ~$56    1.447
    mini-AGI (frozen)    1.26B   2.8 GB (0 PG19)   ~$56    1.995

    The published models were trained on PG19&#x27;s own training books, 75 to 80 GB of them, and are scored on more books like those. mini-AGI has never been trained on PG19 and has read no Victorian novels, so for it these books are completely out of its domain.

</code></pre>
There are more details in the repository. The most important part is a difference between &quot;frozen&quot; and &quot;online&quot; attempts where we allow the model to specialize on the task as it goes through the evaluation dataset. Clearly showcasing the power of continual learning regime simply unavailable for any other typical LLM.<p>Full methodology, and replication code is in the repo:
<a href="https:&#x2F;&#x2F;github.com&#x2F;volotat&#x2F;mini-AGI" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;volotat&#x2F;mini-AGI</a><p>Intermediate weights snapshot on Hugging Face:
<a href="https:&#x2F;&#x2F;huggingface.co&#x2F;Volotat&#x2F;mini-AGI-undertrained" rel="nofollow">https:&#x2F;&#x2F;huggingface.co&#x2F;Volotat&#x2F;mini-AGI-undertrained</a>
- **作者**: volotat
- **综合评分**: 80 (相关性 100% / 权威性 80% / 时效性 87% / 热度 16%)
- **推荐理由**: 领域相关性高；时效性强；综合评分 80

## 2. Show HN: Claude Code(and others) embedded in your app

- **来源**: Hacker News
- **链接**: https://github.com/gtanczyk/genaicode
- **摘要**: I started this project in 2024 when I got fascinated with LLMs, and what I did was a coding agent (CLI -&gt; interactive -&gt; GUI). I also added an integration with Vite for having it embedded inside my apps(mostly games).
Few months ago I pivoted it to become a low profile AI provider wrapper library (think jQuery for LLM usage), because I realized there is no point to have custom coding agent.<p>Recently I did yet another pivot, and now it is a solution that allows you to embed Claude Code inside of your app, and use it directly from there for 1. development, 2. every day ops and automate the tasks in the app<p>In theory all you need to try it is this command: `npx genaicode embed`, I wonder if anyone would like to give it a try, and let me know how it worked!
- **作者**: fullstackwife
- **综合评分**: 77 (相关性 90% / 权威性 80% / 时效性 97% / 热度 10%)
- **推荐理由**: 领域相关性高；时效性强；综合评分 77

## 3. 926 Steps, Two Lobotomies, and Zero Nudges: Flight-Testing the Commitment Machine Across Gemini, Claude, and GPT-OSS

- **来源**: Dev.to
- **链接**: https://dev.to/gde/926-steps-two-lobotomies-and-zero-nudges-flight-testing-the-commitment-machine-across-gemini-55ca
- **摘要**: A 2026 Harvard study of 718 companies found that AI agents write 30% more code and close zero additional tickets because review times jump 49%. Here is what happened when I put my 1986 Commitment Machine into live production across Gemini, Claude, and GPT-OSS.
- **作者**: Randal L. Schwartz
- **综合评分**: 72 (相关性 90% / 权威性 60% / 时效性 63% / 热度 59%)
- **推荐理由**: 领域相关性高；社区热度高；综合评分 72

## 4. Ask HN: Kimi Code hit its 5-hour limit after $1.37 of API usage

- **来源**: Hacker News
- **链接**: https://news.ycombinator.com/item?id=50222093
- **摘要**: I paid $19 for Kimi Code to test K3.1 Pro Standard (not Highspeed) using the official CLI v2.3.1.<p>I ran two tasks on small repositories:<p>1. Recommend movies based on an existing movie database.
2. Analyze a website&#x27;s codebase.<p>Neither task completed. The entire 5-hour quota was exhausted within minutes.<p>I analyzed the actual session logs, including background agents:<p>- Fresh input: 368,203 tokens
- Cached input: 1,183,744 tokens
- Output: 39,324 tokens
- Total: 1.59M tokens<p>At Kimi&#x27;s published API rates, that&#x27;s just $1.37 worth of usage before hitting the 5-hour limit which is easily less than 5% of what Claude Code offers at $20 subscription.<p>The logs show: &quot;429 You&#x27;ve reached your 5-hour usage limit.&quot;<p>For comparison, Claude Code on a $20 subscription processed roughly 381M tokens over 4-5 hours using Opus 5.5 xhigh, mostly cached input. That&#x27;s not a controlled benchmark, but the difference in usable capacity is staggering.<p>Both Kimi tasks failed without delivering results. I have video evidence and detailed logs, but won&#x27;t publish private repository data.<p>Video: https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=hSr-DLn88AM<p>Is this a quota-accounting bug, or are Kimi&#x27;s $19 subscription limits intentionally this restrictive?<p>Disclosure: I also develop a competing coding agent. These tests used Kimi&#x27;s official CLI.
- **作者**: waximabbax
- **综合评分**: 71 (相关性 75% / 权威性 80% / 时效性 91% / 热度 16%)
- **推荐理由**: 领域相关性高；时效性强；综合评分 71

## 5. No signs of AI payoff outside the tech sector

- **来源**: Hacker News
- **链接**: https://www.apollo.com/wealth/insights-news/insights/daily-spark/no-signs-of-ai-payoff-outside-the-tech-sector
- **作者**: the-mitr
- **综合评分**: 69 (相关性 45% / 权威性 75% / 时效性 96% / 热度 89%)
- **推荐理由**: 时效性强；社区热度高；综合评分 69
