---
title: "VLM: From Late Fusion to Early Fusion"
collection: talks
type: "Research Talk"
permalink: /talks/2026-vlm-late-to-early-fusion
venue: "CFDA, CLIP & LKT Labs Joint Laboratory Seminar"
date: 2026-05-22
date_display: "May 22, 2026"
slides_embed: "https://docs.google.com/presentation/d/12XPXNJ_f0rVYm-kgRcCHv4KAqKAmaPIS/embed?start=true&loop=true&delayms=3000"
slides_url: "/files/talk-vlm-late-to-early-fusion.pdf"
excerpt: ""
---

This talk compares late fusion and early fusion in vision-language models, taking Qwen3-VL and Qwen3.5 as the two reference designs, and traces what moving the fusion point does to training, reinforcement learning and deployment.

## Key Topics Covered

- Late fusion (Qwen3-VL): a ViT, a patch merger and an LLM as three components, with vision injected into selected layers
- Early fusion (Qwen3.5): one unified backbone where vision and text are joint from layer 1
- Cross-modal interaction: injection layers only, versus every layer from bottom to top
- Post-training and RL: the adapter bottleneck under late fusion, versus a direct and unified gradient path
- Deployment: maintaining two model families, versus one model covering all modalities
- The state of open-source RL tooling for natively multimodal training

The central claim is that the fusion point sets the ceiling: Qwen3.5 reports gains of 15.0 on ERQA and 30.1 on BabyVision over the previous generation, and the industry has converged on early fusion across Llama 4, GPT-5 and Qwen3.5.
