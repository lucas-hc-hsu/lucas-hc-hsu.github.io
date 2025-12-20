---
layout: single
title: "Résumé"
seo_title: "Résumé | Hung-Chun Hsu"
description: "Résumé of Hung-Chun Hsu. Education, research experience, publications, and skills in AI and machine learning."
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<p style="margin-bottom: 20px;">
  <span style="font-size: 0.8em;">For a complete overview of my background, feel free to download my résumé.</span> <a href="/files/Lucas_Hsu_Resume.pdf" style="font-size: 0.7em; padding: 2px 6px; background-color: var(--global-bg-color); color: var(--global-text-color); border: 1px solid var(--button-border-color); border-radius: 3px; text-decoration: none; display: inline-block;" target="_blank"><i class="fas fa-external-link-alt"></i> résumé link</a>
</p>

<!-- Section Divider -->
<div style="display: flex; align-items: center; margin: 30px 0 20px 0;">
  <div style="padding: 0 20px 0 0; font-weight: bold; color: var(--global-text-color); font-size: 24px; background-color: var(--global-bg-color);">
    Education
  </div>
  <div style="flex: 1; height: 1px; background-color: var(--global-border-color);"></div>
</div>

{% comment %}
Education
======
{% endcomment %}
<div style="display: flex; align-items: center; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 0 0 140px; min-width: 140px; height: 50px; background-color: white; border-radius: 5px; padding: 5px; display: flex; align-items: center; justify-content: center;">
    <img src="/images/logo-ntu-removebg-preview.png" alt="National Taiwan University" style="max-width: 100%; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      M.S. in Data Science, National Taiwan University <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Sep. 2021 - Aug. 2023</span>
    </p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 0 0 140px; min-width: 140px; height: 50px; background-color: white; border-radius: 5px; padding: 5px; display: flex; align-items: center; justify-content: center;">
    <img src="/images/logo-nthu.gif" alt="National Tsing Hua University" style="max-width: 100%; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      B.S. in Engineering and System Science, National Tsing Hua University <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Sep. 2017 - Jun. 2021</span>
    </p>
  </div>
</div>

<!-- Section Divider -->
<div style="display: flex; align-items: center; margin: 30px 0 20px 0;">
  <div style="padding: 0 20px 0 0; font-weight: bold; color: var(--global-text-color); font-size: 24px; background-color: var(--global-bg-color);">
    Publications
  </div>
  <div style="flex: 1; height: 1px; background-color: var(--global-border-color);"></div>
</div>

{% comment %}
Publications
======
{% endcomment %}

{% include base_path %}

{% assign cv_publications = site.publications | sort: 'date' %}

{% for post in cv_publications %}
<div style="display: flex; align-items: center; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  {% comment %}
  <div style="flex: 0 0 140px; min-width: 140px;">
    {% if post.image %}
      <img src="/images/{{ post.image }}" alt="{{ post.title }}" style="width: 100%; height: auto; border-radius: 5px;">
    {% endif %}
  </div>
  {% endcomment %}
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

<!-- Section Divider -->
<div style="display: flex; align-items: center; margin: 30px 0 20px 0;">
  <div style="padding: 0 20px 0 0; font-weight: bold; color: var(--global-text-color); font-size: 24px; background-color: var(--global-bg-color);">
    Research Experience
  </div>
  <div style="flex: 1; height: 1px; background-color: var(--global-border-color);"></div>
</div>

{% comment %}
Research Experience
======
{% endcomment %}
<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      Research Assistant, CFDA Lab, CITI, Academia Sinica <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Apr. 2024 - Present</span>
    </p>
    <ul style="font-size: 0.85em; margin-bottom: 0; padding-left: 20px;">
      <li style="margin-bottom: 5px;">Leading the Information Retrieval (IR) research project in collaboration with NVIDIA Research (Taiwan and US) under the supervision of Prof. Chuan-Ju Wang and Prof. Ming-Feng Tsai. Focused on conversational retrieval and Multimodal-LLMs.</li>
      <li style="margin-bottom: 5px;">Participated twice in NIST's Text Retrieval Conference (TREC) tracks starting from 2024: Product Recommendations and Interactive Knowledge Assistance (iKAT). Led and coordinated the competition teams with up to 6 direct reports.</li>
    </ul>
  </div>
</div>

<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      Data Scientist Intern - R&D, Cathay Financial Holdings <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Feb. 2024 - Apr. 2024</span>
    </p>
    <ul style="font-size: 0.85em; margin-bottom: 0; padding-left: 20px;">
      <li style="margin-bottom: 5px;">Developed an enterprise-level Chinese legal retrieval pipeline leveraging LangChain, increasing recall@50 performance from 23% to 39% compared to LangChain's basic two-staged retrieval settings through a novel legal articles pre-classification approach.</li>
    </ul>
  </div>
</div>

<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      Research Assistant, SNAC Lab, CITI, Academia Sinica <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Sep. 2021 - Feb. 2024</span>
    </p>
    <ul style="font-size: 0.85em; margin-bottom: 0; padding-left: 20px;">
      <li style="margin-bottom: 5px;">Developed novel GAN-based data augmentation frameworks for heterogeneous graphs, addressing critical node class imbalance issues in graph neural networks.</li>
      <li style="margin-bottom: 5px;">Achieved 14.4% improvement in F-score and 12.3% in PR-AUC over SOTA baseline GraphSMOTE through innovative handling of structured graph G=(V,E,X). Published research in IEEE ICASSP with ongoing follow-up studies.</li>
    </ul>
  </div>
</div>

<!-- Section Divider -->
<div style="display: flex; align-items: center; margin: 30px 0 20px 0;">
  <div style="padding: 0 20px 0 0; font-weight: bold; color: var(--global-text-color); font-size: 24px; background-color: var(--global-bg-color);">
    Representative Project
  </div>
  <div style="flex: 1; height: 1px; background-color: var(--global-border-color);"></div>
</div>

{% comment %}
Representative Project
======
{% endcomment %}
<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      2025 TREC Interactive Knowledge Assistance Track (iKAT) <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Jun. 2025 - Sep. 2025</span>
    </p>
    <ul style="font-size: 0.85em; margin-bottom: 0; padding-left: 20px;">
      <li style="margin-bottom: 5px;">Led a team of 7 members to participate in the iKAT track, developing pipelines for traditional offline conversational search and exploring real-time conversational retrieval methods requiring low latency.</li>
      <li style="margin-bottom: 5px;">Achieved 2nd place in Offline Passage Ranking and 3rd place in Online Interactive Generation among participating teams, outperforming the competition median by 10 pts in nDCG@3 and 11 pts in average human evaluation score respectively.</li>
    </ul>
  </div>
</div>

<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      2024 TREC Product Search and Recommendations Track <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Jun. 2024 - Sep. 2024</span>
    </p>
    <ul style="font-size: 0.85em; margin-bottom: 0; padding-left: 20px;">
      <li style="margin-bottom: 5px;">Led a 4-member team in the product search and recommendations track. Developed a multimodal product retrieval system leveraging BLIP, ViLT, and BEiT-3 as dual encoders and cross encoders.</li>
      <li style="margin-bottom: 5px;">Implemented Weighted Sum Fusion to combine unimodal and multimodal retrieval results, achieving nDCG@10 of 76% compared to 72% from traditional BM25 and SPLADE retrievers.</li>
    </ul>
  </div>
</div>

<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      Insurance Claim Fraud Prediction, Cathay Life Insurance Co., Ltd. & National Taiwan University <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Sep. 2021 - Sep. 2022</span>
    </p>
    <ul style="font-size: 0.85em; margin-bottom: 0; padding-left: 20px;">
      <li style="margin-bottom: 5px;">Designed and implemented heterogeneous social network graphs for large-scale networks and developed data augmentation framework to enhance graph neural network performance in detecting hard-to-identify minority fraud risk accounts.</li>
    </ul>
  </div>
</div>

{% comment %}
<!-- Section Divider -->
<div style="display: flex; align-items: center; margin: 30px 0 20px 0;">
  <div style="padding: 0 20px 0 0; font-weight: bold; color: var(--global-text-color); font-size: 24px; background-color: var(--global-bg-color);">
    Skills
  </div>
  <div style="flex: 1; height: 1px; background-color: var(--global-border-color);"></div>
</div>

Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3
{% endcomment %}
  
{% comment %}
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams
{% endcomment %}
