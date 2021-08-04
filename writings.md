---
layout: page
permalink: /writings/
---

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="date">
      	{{ post.date | date: "%-d %B %Y" }}
      </div>
      
    </article>
  {% endfor %}
</div>