---
title: "Dive into Qwen3.5 Key Techniques"
collection: talks
type: "Research Talk"
permalink: /talks/2026-qwen35-key-techniques
venue: "CFDA, CLIP & LKT Labs Joint Laboratory Seminar"
date: 2026-04-10
date_display: "April 10, May 8 & May 15, 2026"
slides_embed: "https://docs.google.com/presentation/d/1Lh9-0gkzcn1S-1B85WbWGMnj_GezF1i6/embed?start=true&loop=true&delayms=3000"
slides_url: "/files/talk-qwen35-key-techniques.pdf"
excerpt: ""
---

This three-session seminar works through the attention stack behind Qwen3.5, deriving each step from standard softmax attention to the Gated DeltaNet layers that Qwen3.5 deploys at scale.

## Key Topics Covered

- From softmax attention to the linear Transformer: O(L²) down to O(Ld²) through a kernel feature map
- Why naive linear attention breaks down: the blind accumulation problem, shown with a worked example
- DeltaNet and the delta rule as a targeted fix for blind accumulation
- Gated DeltaNet: combining the α decay term with the β delta rule
- Hybrid layouts: why a 3:1 mix of linear and full attention surpasses Transformer++
- Deployment considerations, and where pure linear attention still falls short

The talk builds the mathematics step by step rather than presenting the final architecture, so that each component reads as a fix for a specific failure in the one before it.
