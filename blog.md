---
layout: page
permalink: /blog/
---

<div class="blogposts">
  {% for blogpost in site.blogposts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ blogpost.url }}">{{ blogpost.title }}</a></h1>

      <div class="date">
      	{{ post.date | date: "%-d %B %Y" }}
      </div>
      
    </article>
  {% endfor %}
</div>