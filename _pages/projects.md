---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

Here are several Computer Science and Engineering projects I did.

{% include base_path %}

{% for post in site.projects reversed %}
  {% include archive-single.html %}
{% endfor %}


