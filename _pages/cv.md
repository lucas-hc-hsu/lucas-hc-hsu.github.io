---
layout: single
title: "Curriculum Vitae"
seo_title: "CV - Hung-Chun Hsu | Research Assistant at Academia Sinica"
description: "Curriculum Vitae of Hung-Chun Hsu. Education, research experience, publications, and skills in AI and machine learning."
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- Section Divider -->
<div style="display: flex; align-items: center; margin: 30px 0 20px 0;">
  <div style="padding: 0 20px 0 0; font-weight: bold; color: #666; font-size: 24px; background-color: white;">
    Education
  </div>
  <div style="flex: 1; height: 1px; background-color: #e1e1e1;"></div>
</div>

{% comment %}
Education
======
{% endcomment %}
<div style="display: flex; align-items: center; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 0 0 140px; min-width: 140px;">
    <img src="/images/ntu_cis_2.jpg" alt="National Taiwan University" style="width: 140px; height: auto; border-radius: 5px;">
  </div>
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      M.S. in Data Science, National Taiwan University <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Sep. 2021 - Aug. 2023</span>
    </p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 0 0 140px; min-width: 140px;">
    <img src="/images/nthu_cis_8.gif" alt="National Tsing Hua University" style="width: 140px; height: auto; border-radius: 5px;">
  </div>
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      B.S. in Engineering and System Science, National Tsing Hua University <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Sep. 2017 - Jun. 2021</span>
    </p>
  </div>
</div>

<!-- Section Divider -->
<div style="display: flex; align-items: center; margin: 30px 0 20px 0;">
  <div style="padding: 0 20px 0 0; font-weight: bold; color: #666; font-size: 24px; background-color: white;">
    Publications
  </div>
  <div style="flex: 1; height: 1px; background-color: #e1e1e1;"></div>
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
  <div style="padding: 0 20px 0 0; font-weight: bold; color: #666; font-size: 24px; background-color: white;">
    Work Experience
  </div>
  <div style="flex: 1; height: 1px; background-color: #e1e1e1;"></div>
</div>

{% comment %}
Work Experience
======
{% endcomment %}
<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      Research Assistant, CFDA Lab, CITI, Academia Sinica, Taiwan <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Apr. 2024 - Present</span>
    </p>
    <p style="font-size: 0.85em; margin-bottom: 0;">Supervised by Dr. Chuan-Ju Wang and Dr. Ming-Feng Tsai, leading the Dense Retrieval Project in collaboration with NVIDIA Research Taiwan, developing an LLM-based Conversational Product Search (CPS) system that not only accepts multimodal data input but also interacts with users through multimodal data</p>
  </div>
</div>

<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      Data Scientist R&D Intern, Center of Digital, Data and Technology, Cathay Financial Holdings <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Feb. 2024 - Apr. 2024</span>
    </p>
    <p style="font-size: 0.85em; margin-bottom: 0;">Developed a system for rapid identification of internal regulations requiring adjustment due to external legal changes.</p>
  </div>
</div>

<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      Research Assistant, SNAC Lab, CITI, Academia Sinica, Taiwan <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Sep. 2023 - Feb. 2024</span>
    </p>
    <p style="font-size: 0.85em; margin-bottom: 0;">Supervised by Dr. Chi-Yu Wang and Dr. Che Lin, developed a conditional node generation model for Heterogeneous Graphs (HetGs), facilitating downstream node classification tasks.</p>
  </div>
</div>

<!-- Section Divider -->
<div style="display: flex; align-items: center; margin: 30px 0 20px 0;">
  <div style="padding: 0 20px 0 0; font-weight: bold; color: #666; font-size: 24px; background-color: white;">
    Projects
  </div>
  <div style="flex: 1; height: 1px; background-color: #e1e1e1;"></div>
</div>

{% comment %}
Projects
======
{% endcomment %}
<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      2025 TREC Interactive Knowledge Assistance Track (iKAT) <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Jun. 2025 - Present</span>
    </p>
    <p style="font-size: 0.85em; margin-bottom: 0;">Leading a team of seven members in this ongoing competition.</p>
  </div>
</div>

<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      2024 TREC Product Search Track <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Jul. 2024 - Sep. 2024</span>
    </p>
    <p style="font-size: 0.85em; margin-bottom: 0;">Lead a team of three interns to enhance product recommendation accuracy using visual embeddings from vision models (BLIP, ViLT, BEiT‐3).</p>
  </div>
</div>

<div style="display: flex; align-items: flex-start; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="margin-top: 0; margin-bottom: 5px; font-weight: 550;">
      Insurance Fraud Detection, Cathay Life Insurance Company, Ltd. & National Taiwan University <span style="float: right; font-style: italic; font-size: 0.8em; font-weight: normal;">Sep. 2021 - Sep. 2022</span>
    </p>
    <p style="font-size: 0.85em; margin-bottom: 0;">Developed a Heterogeneous Graph Neural Network to identify fraudulent accounts through social network analysis using insurance data.</p>
  </div>
</div>

{% comment %}
<!-- Section Divider -->
<div style="display: flex; align-items: center; margin: 30px 0 20px 0;">
  <div style="padding: 0 20px 0 0; font-weight: bold; color: #666; font-size: 24px; background-color: white;">
    Skills
  </div>
  <div style="flex: 1; height: 1px; background-color: #e1e1e1;"></div>
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
