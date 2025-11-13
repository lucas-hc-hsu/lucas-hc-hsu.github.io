---
permalink: /
title: "Hung-Chun Hsu"
seo_title: "Hung-Chun Hsu"
description: "Hung-Chun Hsu (Lucas Hsu, Hung Chun Hsu, 許鴻君), also known as Lucas (Hung-Chun) Hsu."
keywords: "Hung-Chun Hsu, Hung Chun Hsu, Lucas Hsu, Lucas (Hung-Chun) Hsu, 許鴻君, Academia Sinica, CFDA Lab, multimodal AI, conversational search, graph neural networks, Taiwan"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a senior research assistant at Academia Sinica, Taiwan, working with Prof. Chuan-Ju Wang and Prof. Ming-Feng Tsai. My research interests lie in multimodal LLMs, information retrieval, conversational search, and graph neural networks. <span style="font-weight: 600;">Currently, my research centers on developing multimodal LLMs to enable deeper human-AI interaction across diverse modalities and to generate personalized responses from multimodal feedback.</span>

🎓 I received my M.S. in Data Science at National Taiwan University in 2023. During Master's degree, I was fortunate to work with Prof. Chiu-Yu Wang at Academia Sinica and Prof. Che Lin at NTU.

🚀 I am actively seeking Ph.D. opportunities in the United States.

<small>My name is Hung-Chun Hsu, which is 許鴻君 in Traditional Chinese. I'm from Taiwan. I also go by Lucas.</small>

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

- **Sep 2025**: We release our work in TREC iKAT 2025, "[CFDA & CLIP at TREC iKAT 2025: Enhancing Personalized Conversational Search via Query Reformulation and Rank Fusion](https://arxiv.org/abs/2509.15588v1)."
- **Aug 2025**: Our paper "[Test-Time Scaling Strategies for Generative Retrieval in Multimodal Conversational Recommendations](https://www.arxiv.org/abs/2508.18132)" is available on arXiv.
- **Aug 2025**: We submitted our latest research to the AAAI 2026 main technical track!
- **Nov 2024**: Our paper "[FlashGAN: Framework of Localized Node Augmentation via Semi-supervised Learning in Heterogeneous Graphs with Generative Adversarial Network](https://arxiv.org/pdf/2312.06519)" is available on arXiv.
- **Apr 2024**: I completed my Data Scientist R&D Intern position at Cathay Financial Holdings, where I gained valuable experience in building Traditional Chinese RAG pipelines using AWS platform and LangChain framework.
- **Feb 2024**: Our paper "[FincGAN: A Gan Framework of Imbalanced Node Classification on Heterogeneous Graph Neural Network](https://ieeexplore.ieee.org/document/10448064)" has been accepted at IEEE ICASSP 2024.
- **Aug 2023**: I graduated top of my class from National Taiwan University's Data Science Master program.
- **Jul 2023**: I successfully defended my master's thesis titled "A Framework of Imbalanced Node Classification On Heterogeneous Graph Neural Network - Using GAN for Localized Sampling and Node Embedding".

</div>

## Publications

{% include base_path %}

{% assign recent_publications = site.publications | sort: 'date' | slice: 0, 3 %}

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
  <a href="/publications/" style="font-size: 0.9em; padding: 8px 16px; background-color: white; color: black; border: 1px solid #ccc; border-radius: 5px; text-decoration: none; display: inline-block; transition: background-color 0.3s;">
    <i class="fas fa-external-link-alt"></i> View all publications
  </a>
</div>

{% comment %}
---

## About This Website

This is the front page of a website that is powered by the [Academic Pages template](https://github.com/academicpages/academicpages.github.io) and hosted on GitHub pages. [GitHub pages](https://pages.github.com) is a free service in which websites are built and hosted from code and data stored in a GitHub repository, automatically updating when a new commit is made to the repository. This template was forked from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/) created by Michael Rose, and then extended to support the kinds of content that academics have: publications, talks, teaching, a portfolio, blog posts, and a dynamically-generated CV. You can fork [this template](https://github.com/academicpages/academicpages.github.io) right now, modify the configuration and markdown files, add your own PDFs and other content, and have your own site for free, with no ads!

A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, Academic Pages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over - just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this template](https://github.com/academicpages/academicpages.github.io) by clicking the "Use this template" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

The repository includes [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/), the [growing wiki](https://github.com/academicpages/academicpages.github.io/wiki), and you can always [ask a question on GitHub](https://github.com/academicpages/academicpages.github.io/discussions). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
{% endcomment %}
