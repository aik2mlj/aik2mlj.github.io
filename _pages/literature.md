---
layout: archive
title: "Literature"
permalink: /literature/
author_profile: true
---

{% include base_path %}

{% for post in site.literature reversed %}
  {% include archive-single.html %}
{% endfor %}

