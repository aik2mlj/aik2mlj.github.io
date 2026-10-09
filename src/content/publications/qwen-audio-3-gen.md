---
title: "Qwen-Audio-3.0-Gen-Preview Technical Report"
date: 2026-07-29
lane: research
authors: "Junyu Dai et al.; **Lejun Min** (equal contribution, alphabetical by family name)"
venue: arXiv 2026
links:
  - label: arXiv
    url: https://arxiv.org/abs/2607.27011
---

Junyu Dai, Xiaoyue Duan, Xinyue Fan, Yihan Feng, Jingbei Li, Xiangang Li, Yunjia Li, **Lejun Min**, Yufei Shi, Xingchen Song, Yiran Wang, Cheng Wen, Menglin Wu, Bajian Xiang, Huaicheng Zhang, Han Zhao, Ruichen Zheng

Equal contribution; authors listed alphabetically by family name. arXiv preprint arXiv:2607.27011, July 2026

Existing single-domain and multi-task audio systems remain limited in directly organizing heterogeneous audio components, ambience, and multiple roles into long-form temporal scenes. We present Qwen-Audio-3.0-Gen-Preview, a unified non-autoregressive framework that uses a Diffusion Transformer (DiT) and a shared variational autoencoder (VAE) to generate the complete mixed waveform. Prompt enhancement converts free-form requests into structured temporal records that are rendered as textual conditions, while a two-stage data curriculum and semantic conditional views train the proposed model to use these conditions across standalone and mixed-scene audio. A shared continuous VAE compresses 48kHz stereo waveforms into 25Hz latent sequences and incorporates semantic supervision, providing one representation for heterogeneous audio. On the public reference-conditioned benchmark, speaker similarity is the proposed model's clearest strength across all three subsets. Across the multi-speaker and rich-timeline benchmarks, its clearest comparative strengths are cross-turn consistency in both languages and temporal localization, respectively. On AudioCaps, its advantages are concentrated in evaluations using large audio-language models and AudioBox. These results demonstrate the potential of unified generation for temporally structured audio without task-specific branches.

- The paper can be viewed [here](https://arxiv.org/abs/2607.27011).
