---
layout: default
---

<div class="homepage-hero">
  <div class="hero-content">
    <div class="logo-container">
      <img src="/assets/images/Logo.png" alt="Mangena Venu Madhavan Logo" class="hero-logo">
    </div>
    
    <h1 class="hero-title">Mangena Venu Madhavan</h1>
    <p class="hero-subtitle">Generative AI | Data Science | Agentic AI</p>
    
    <p class="hero-description">
      Welcome to my digital space where I explore the cutting edge of artificial intelligence, 
      share insights on building intelligent systems, and document my journey in generative AI, 
      agentic automation, and data science.
    </p>

    <div class="hero-cta">
      <a href="#featured-posts" class="btn btn-primary">Read My Latest Articles</a>
      <a href="https://github.com/madhavan11601828" class="btn btn-secondary">Follow on GitHub</a>
    </div>
  </div>
</div>

<section class="featured-section">
  <div class="container">
    <h2 class="section-title"> Featured Topics</h2>
    
    <div class="topics-grid">
      <div class="topic-card">
        <div class="topic-icon"></div>
        <h3>Generative AI & LLMs</h3>
        <p>Deep dives into building with Large Language Models, prompt engineering, and production architectures</p>
      </div>
      
      <div class="topic-card">
        <div class="topic-icon"></div>
        <h3>Agentic AI</h3>
        <p>Autonomous agents, multi-agent systems, and intelligent automation for real-world problems</p>
      </div>
      
      <div class="topic-card">
        <div class="topic-icon"></div>
        <h3>Data Science</h3>
        <p>Analytics, machine learning pipelines, data visualization, and insights from data</p>
      </div>
      
      <div class="topic-card">
        <div class="topic-icon"></div>
        <h3>Architecture & Design</h3>
        <p>System design patterns, scalability, production considerations, and best practices</p>
      </div>
    </div>
  </div>
</section>

<section id="featured-posts" class="posts-section">
  <div class="container">
    <h2 class="section-title"> Latest Articles</h2>
    
    <div class="posts-grid">
      {% for post in site.posts limit:6 %}
        <article class="post-card">
          <div class="post-meta">
            <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
            {% if post.tags %}
              <div class="post-tags">
                {% for tag in post.tags limit:2 %}
                  <span class="tag">{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}
          </div>
          
          <h3 class="post-title">
            <a href="{{ post.url }}">{{ post.title }}</a>
          </h3>
          
          <p class="post-excerpt">
            {{ post.content | strip_html | truncatewords: 30 }}
          </p>
          
          <a href="{{ post.url }}" class="read-more">Read Article </a>
        </article>
      {% endfor %}
    </div>
    
    {% if site.posts.size > 6 %}
      <div class="view-all">
        <a href="/blog" class="btn btn-outline">View All Articles</a>
      </div>
    {% endif %}
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <div class="cta-content">
      <h2>Stay Updated</h2>
      <p>Get notified about new articles on Generative AI, Agentic Automation, and Data Science</p>
      <p class="cta-description">Subscribe to the RSS feed to never miss an article.</p>
      <a href="/feed.xml" class="btn btn-primary">Subscribe to RSS Feed</a>
    </div>
  </div>
</section>

<section class="connect-section">
  <div class="container">
    <h2 class="section-title"> Let''s Connect</h2>
    
    <div class="connect-grid">
      <a href="https://github.com/madhavan11601828" class="connect-card" target="_blank" rel="noopener">
        <span class="connect-icon"></span>
        <h3>GitHub</h3>
        <p>Check out my projects and contributions</p>
      </a>
      
      <a href="mailto:venumangenamadhavan@gmail.com" class="connect-card">
        <span class="connect-icon"></span>
        <h3>Email</h3>
        <p>Get in touch for collaborations</p>
      </a>
    </div>
  </div>
</section>

<style>
/* Hero Section */
.homepage-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
  margin-bottom: 60px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.logo-container {
  margin-bottom: 30px;
  animation: float 3s ease-in-out infinite;
}

.hero-logo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.hero-title {
  font-size: 3.5em;
  font-weight: 800;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: 1.5em;
  font-weight: 300;
  margin-bottom: 30px;
  opacity: 0.95;
  letter-spacing: 1px;
}

.hero-description {
  font-size: 1.1em;
  line-height: 1.8;
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  font-size: 1em;
  font-weight: 600;
  text-decoration: none;
  border-radius: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.btn-primary {
  background: white;
  color: #667eea;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Featured Section */
.featured-section {
  padding: 60px 20px;
  background: #f8f9fa;
}

.section-title {
  font-size: 2.5em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.topic-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.topic-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.topic-icon {
  font-size: 3em;
  margin-bottom: 20px;
}

.topic-card h3 {
  font-size: 1.3em;
  margin-bottom: 15px;
  color: #333;
}

.topic-card p {
  color: #666;
  line-height: 1.6;
}

/* Posts Section */
.posts-section {
  padding: 60px 20px;
  background: white;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.post-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.post-card:hover {
  border-color: #667eea;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
  transform: translateY(-5px);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.post-date {
  font-size: 0.9em;
  color: #667eea;
  font-weight: 600;
}

.post-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  background: #f0f0f0;
  color: #666;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8em;
}

.post-title {
  font-size: 1.4em;
  margin: 15px 0;
  color: #333;
}

.post-title a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.post-title a:hover {
  color: #667eea;
}

.post-excerpt {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.read-more {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.read-more:hover {
  color: #764ba2;
  transform: translateX(5px);
}

.view-all {
  text-align: center;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
  margin: 40px 0;
  border-radius: 10px;
}

.cta-content h2 {
  font-size: 2em;
  margin-bottom: 15px;
}

.cta-content p {
  font-size: 1.1em;
  margin-bottom: 10px;
  opacity: 0.9;
}

.cta-description {
  margin-bottom: 30px !important;
}

/* Connect Section */
.connect-section {
  padding: 60px 20px;
  background: #f8f9fa;
}

.connect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.connect-card {
  background: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.connect-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
  border-top: 4px solid #667eea;
}

.connect-icon {
  font-size: 3em;
  display: block;
  margin-bottom: 20px;
}

.connect-card h3 {
  font-size: 1.4em;
  margin-bottom: 10px;
  color: #667eea;
}

.connect-card p {
  color: #666;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5em;
  }
  
  .hero-subtitle {
    font-size: 1.2em;
  }
  
  .hero-logo {
    width: 120px;
    height: 120px;
  }
  
  .section-title {
    font-size: 2em;
  }
  
  .hero-cta {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
  
  .topics-grid,
  .posts-grid,
  .connect-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .homepage-hero {
    padding: 40px 20px;
    margin-bottom: 30px;
  }
  
  .hero-title {
    font-size: 1.8em;
  }
  
  .hero-subtitle {
    font-size: 1em;
  }
  
  .hero-logo {
    width: 100px;
    height: 100px;
  }
}
</style>
