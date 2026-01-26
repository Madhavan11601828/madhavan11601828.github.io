---
layout: default
title: Blog
description: Articles on Generative AI, Data Science, and Agentic AI
permalink: /blog/
---

<style>
  .blog-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 50px;
    padding: 40px 0;
    background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
    color: white;
    border-radius: 10px;
  }

  .blog-header h1 {
    font-size: 3em;
    margin-bottom: 10px;
    border-bottom: none;
  }

  .blog-header p {
    font-size: 1.2em;
    opacity: 0.95;
  }

  .blog-posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
  }

  .blog-post-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 30px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0 2px 8px var(--card-shadow);
  }

  .blog-post-card:hover {
    border-color: var(--accent-primary);
    box-shadow: 0 8px 24px var(--card-shadow-hover);
    transform: translateY(-5px);
  }

  .blog-post-card a {
    text-decoration: none;
    color: inherit;
  }

  .blog-post-card:hover h3 {
    color: var(--accent-primary);
  }

  .blog-meta {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    font-size: 0.9em;
    color: var(--text-secondary);
    flex-wrap: wrap;
  }

  .blog-date {
    background: var(--bg-secondary);
    padding: 4px 12px;
    border-radius: 20px;
    color: var(--accent-primary);
    font-weight: 600;
  }

  .blog-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .blog-tag {
    display: inline-block;
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8em;
    transition: all 0.2s ease;
  }

  .blog-tag:hover {
    background: var(--accent-primary);
    color: white;
  }

  .blog-post-card h3 {
    font-size: 1.4em;
    margin: 15px 0;
    transition: color 0.2s ease;
  }

  .blog-excerpt {
    color: var(--text-secondary);
    margin-bottom: 20px;
    flex-grow: 1;
    line-height: 1.7;
  }

  .blog-read-more {
    display: inline-block;
    color: var(--accent-primary);
    font-weight: 600;
    margin-top: auto;
    transition: all 0.2s ease;
  }

  .blog-read-more::after {
    content: " →";
    transition: transform 0.2s ease;
  }

  .blog-post-card:hover .blog-read-more {
    color: var(--accent-secondary);
  }

  .blog-post-card:hover .blog-read-more::after {
    transform: translateX(5px);
  }

  .no-posts {
    text-align: center;
    padding: 40px;
    color: var(--text-secondary);
    font-size: 1.1em;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .blog-header h1 {
      font-size: 2em;
    }

    .blog-header p {
      font-size: 1em;
    }

    .blog-posts {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .blog-header {
      padding: 20px 0;
      margin-bottom: 30px;
    }

    .blog-header h1 {
      font-size: 1.5em;
    }

    .blog-post-card {
      padding: 20px;
    }

    .blog-post-card h3 {
      font-size: 1.2em;
    }
  }
</style>

<div class="blog-container">
  <!-- Blog Header -->
  <div class="blog-header">
    <h1>📚 Blog</h1>
    <p>Insights on Generative AI, Data Science, and Agentic AI</p>
  </div>

  <!-- Blog Posts Grid -->
  <div class="blog-posts">
    {% for post in site.posts %}
      <article class="blog-post-card">
        <a href="{{ post.url }}">
          <div class="blog-meta">
            <span class="blog-date">{{ post.date | date: "%b %d, %Y" }}</span>
            {% if post.tags %}
              <div class="blog-tags">
                {% for tag in post.tags %}
                  <span class="blog-tag">{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}
          </div>
          
          <h3>{{ post.title }}</h3>
          
          <p class="blog-excerpt">
            {% if post.excerpt %}
              {{ post.excerpt | strip_html | truncatewords: 30 }}
            {% else %}
              {{ post.content | strip_html | truncatewords: 30 }}
            {% endif %}
          </p>
          
          <span class="blog-read-more">Read Article</span>
        </a>
      </article>
    {% endfor %}
  </div>

  <!-- No Posts Message -->
  {% if site.posts.size == 0 %}
    <div class="no-posts">
      <p>No blog posts yet. Check back soon! 📝</p>
    </div>
  {% endif %}
</div>

