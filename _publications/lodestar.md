---
title: "LODESTAR: Trustworthy Entropy Is Navigated, Not Merely Measured — Reinforced Polarizer Keeps a Frozen LLM from Being Confidently Misled by the Wrong Evidence"
collection: publications
category: preprints
permalink: /publication/lodestar
date: 2026-08-12
venue: 'arXiv preprint arXiv:2608.11922'
authors: 'Hung-Chun Hsu, Po-Jen Ko, Che-Cheng Wu, Li-Yang Chang, Chuan-Ju Wang'
image: 'pub-lodestar.png'
paperurl: 'https://arxiv.org/abs/2608.11922'
---

<!-- Image for individual page -->
<div style="text-align: center; margin-bottom: 20px;">
  <img src="/images/pub-lodestar.png" alt="LODESTAR: directed entropy vs. naive minimum-entropy answer selection" style="width: 70%; height: auto; margin-bottom: 15px; border-radius: 5px;">
</div>

<h2 style="text-align: left;">TL;DR</h2>

<div style="text-align: left; margin-bottom: 20px;">
  <p>Entropy is a good confidence signal for picking answers in retrieval-augmented QA — until a misleading passage makes a frozen LLM <em>confidently</em> wrong. When that happens the lowest-entropy answer is the wrong one, and the standard minimum-entropy rule walks straight into it.</p>

  <p>LODESTAR inserts a single learned <strong>polarizer</strong> — a short natural-language prompt trained with reinforcement learning — between each retrieved passage and the question. It raises the respondent's entropy on misleading passages while leaving supporting ones near the entropy floor, so the same minimum-entropy rule now lands on the right passage. The LLM's weights are never touched, and no gold answers are used at selection time. Across 5,008 questions on five QA benchmarks, LODESTAR reaches the highest mean F<sub>1</sub> (0.5339) and macro exact match (0.4136) of any inference-ready selector, and cuts the share of selections captured by misleading passages from 30.3% to 26.0%.</p>

  <p>For further details, please refer to our paper!</p>
</div>
