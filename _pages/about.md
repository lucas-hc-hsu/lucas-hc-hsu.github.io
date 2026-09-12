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

Hi, I'm Hung-Chun. My research interests lie in multimodal LLMs, information retrieval, conversational search, and graph neural networks. <span style="font-weight: 600;">Currently, my research centers on developing multimodal LLMs to enable deeper human-AI interaction across diverse modalities and to generate personalized responses from multimodal feedback.</span>

🚀 <span style="color: #990000; font-weight: bold;">I am actively seeking Ph.D. opportunities in the United States!</span> <a href="/files/Lucas_Hsu_Resume.pdf" style="font-size: 0.6em; padding: 2px 6px; margin-left: 10px; background-color: var(--global-bg-color); color: var(--global-text-color); border: 1px solid var(--button-border-color); border-radius: 3px; text-decoration: none; display: inline-block;" target="_blank"><i class="fas fa-external-link-alt"></i> my resume</a>

## Recent Research

{% include base_path %}

{% comment %} Homepage selection is controlled by `featured: true` in each _publications file, not by date. {% endcomment %}
{% assign recent_publications = site.publications | where_exp: "post", "post.featured" | sort: 'date' | reverse %}

{% for post in recent_publications %}
<div style="display: flex; align-items: stretch; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 0 0 200px; min-width: 150px; display: flex; align-items: center; justify-content: center; background-color: #fff; border-radius: 5px; overflow: hidden;">
    {% if post.image %}
      <img src="/images/{{ post.image }}" alt="{{ post.title }}" style="width: 100%; height: auto; max-height: 100%; object-fit: contain; display: block;">
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

## News

<style>
.news-section ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.news-section ul li {
  display: grid;
  grid-template-columns: 5em 1fr;
  column-gap: 0.75em;
  margin: 0;
  padding: 0.4em 0;
  font-size: 0.9em;
  line-height: 1.45;
}
.news-section .news-date {
  color: var(--global-text-color-medium);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
@media (max-width: 600px) {
  .news-section ul li {
    display: block;
    padding: 0.4em 0;
  }
  .news-section .news-date {
    display: block;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Open external news links in a new tab; links to this site stay in place
  var newsLinks = document.querySelectorAll('.news-section a');
  newsLinks.forEach(function(link) {
    if (link.hostname && link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
</script>

<div class="news-section" markdown="1">

- <span class="news-date">Dec 2025</span><span>Our team achieved strong results in TREC iKAT 2025: 1st in Offline Generated Response (generation-only), 4th in Online Interactive Response Generation, and 5th in Offline Passage Ranking! [See the rankings](/memorable-moments/#trec-ikat-2025)</span>
- <span class="news-date">Apr 2024</span><span>I was fortunate to join the CFDA Lab at Academia Sinica, Taiwan, as a research assistant, working with Prof. Chuan-Ju Wang and Prof. Ming-Feng Tsai.</span>
- <span class="news-date">Aug 2023</span><span>I graduated top of my class from the National Taiwan University Data Science M.S. program, with a thesis on imbalanced node classification in heterogeneous graph neural networks! I was fortunate to work with Prof. Chiu-Yu Wang at Academia Sinica and Prof. Che Lin at NTU.</span>

</div>
