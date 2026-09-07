---
permalink: /
title: "Lucas Here! 👋"
seo_title: "Hung-Chun Hsu"
description: "Hung-Chun Hsu (Lucas Hsu, Hung Chun Hsu, 許鴻君), also known as Lucas (Hung-Chun) Hsu."
keywords: "Hung-Chun Hsu, Hung Chun Hsu, Lucas Hsu, Lucas (Hung-Chun) Hsu, 許鴻君"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hi, I'm Hung-Chun. I am a senior research assistant at Academia Sinica, Taiwan, working with Prof. Chuan-Ju Wang and Prof. Ming-Feng Tsai. My research interests lie in multimodal LLMs, information retrieval, conversational search, and graph neural networks. <span style="font-weight: 600;">Currently, my research centers on developing multimodal LLMs to enable deeper human-AI interaction across diverse modalities and to generate personalized responses from multimodal feedback.</span>

🎓 I received my M.S. in Data Science at National Taiwan University in 2023. During Master's degree, I was fortunate to work with Prof. Chiu-Yu Wang at Academia Sinica and Prof. Che Lin at NTU.

🚀 <span style="color: #990000; font-weight: bold;">I am actively seeking Ph.D. opportunities in the United States!</span> <a href="/files/Lucas_Hsu_Resume.pdf" style="font-size: 0.6em; padding: 2px 6px; margin-left: 10px; background-color: var(--global-bg-color); color: var(--global-text-color); border: 1px solid var(--button-border-color); border-radius: 3px; text-decoration: none; display: inline-block;" target="_blank"><i class="fas fa-external-link-alt"></i> my resume</a>

## News

<style>
.news-section ul {
  margin-bottom: 0;
}
.news-section ul li {
  margin: 0;
  padding: 0 0 0.2em 0;
  line-height: 1.3;
  font-size: 0.9em;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Add target="_blank" to all links in the news section
  var newsLinks = document.querySelectorAll('.news-section a');
  newsLinks.forEach(function(link) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
});
</script>

<div class="news-section" markdown="1">

- **Aug 2026**: Our paper "[LODESTAR: Trustworthy Entropy Is Navigated, Not Merely Measured](https://arxiv.org/abs/2608.11922)" is available on arXiv.
- **Dec 2025**: Our team achieved strong results in TREC iKAT 2025: 5th in Offline Passage Ranking, 1st in Offline Generated Response (generation-only), and 4th in Online Interactive Response Generation!
- **Sep 2025**: We release our work in TREC iKAT 2025, "[CFDA & CLIP at TREC iKAT 2025: Enhancing Personalized Conversational Search via Query Reformulation and Rank Fusion](https://trec.nist.gov/pubs/trec34/papers/cfdalab.ikat.pdf)."
- **Aug 2025**: Our paper "[Test-Time Scaling Strategies for Generative Retrieval in Multimodal Conversational Recommendations](https://www.arxiv.org/abs/2508.18132)" is available on arXiv.
- **Nov 2024**: Our paper "[FlashGAN: Framework of Localized Node Augmentation via Semi-supervised Learning in Heterogeneous Graphs with Generative Adversarial Network](https://arxiv.org/pdf/2312.06519)" is available on arXiv.
- **Feb 2024**: Our paper "[FincGAN: A Gan Framework of Imbalanced Node Classification on Heterogeneous Graph Neural Network](https://ieeexplore.ieee.org/document/10448064)" has been accepted at IEEE ICASSP 2024.
- **Aug 2023**: I graduated top of my class from National Taiwan University's Data Science Master program, with a thesis on imbalanced node classification in heterogeneous graph neural networks.

</div>

## Publications

{% include base_path %}

{% assign recent_publications = site.publications | sort: 'date' | reverse | slice: 0, 3 %}

{% for post in recent_publications %}
<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 0 0 200px; min-width: 150px;">
    {% if post.image %}
      <img src="/images/{{ post.image }}" alt="{{ post.title }}" style="width: 100%; height: auto; border-radius: 5px;">
    {% endif %}
  </div>
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      {{ post.title }}
    </p>
    {% if post.authors %}
      {% assign authors_with_underline = post.authors | replace: "Hung Chun Hsu", "<u>Hung Chun Hsu</u>" | replace: "Hung-Chun Hsu", "<u>Hung-Chun Hsu</u>" %}
      <p style="font-size: 0.85em; margin-bottom: 3px;">{{ authors_with_underline }}</p>
    {% endif %}
    <p style="font-size: 0.85em; margin-bottom: 0;"><i>{{ post.venue }}</i>, {{ post.date | default: "1900-01-01" | date: "%Y" }}</p>
  </div>
</div>
{% endfor %}

<div style="margin-top: 15px; text-align: center;">
  <a href="/publications/" class="btn btn--inverse">
    <i class="fas fa-external-link-alt"></i> View all publications
  </a>
</div>
