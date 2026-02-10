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
      <a href="/about/" class="btn btn-primary">Learn About Me</a>
      <a href="#pillars-section" class="btn btn-secondary">Explore Learning Pillars</a>
      <a href="/blog/" class="btn btn-tertiary">Blog</a>
    </div>
  </div>
</div>

<!-- Pillars Navigation Section -->
<section id="pillars-section" class="pillars-nav-section">
  <div class="container">
    <div class="pillars-header">
      <h2>📚 Core Learning Pathways</h2>
      <p>Master AI progressively through 9 interconnected pillars, from Python fundamentals to autonomous agents</p>
    </div>

    <div class="pillars-quick-nav">
      <a href="/python/" class="pillar-nav-card" style="border-top-color: #3776AB;">
        <span class="pillar-icon">🐍</span>
        <h4>Python Programming</h4>
        <p>Master Python fundamentals and best practices</p>
        <span class="arrow">→</span>
      </a>

      <a href="/api-development/" class="pillar-nav-card" style="border-top-color: #009688;">
        <span class="pillar-icon">🔌</span>
        <h4>API Development</h4>
        <p>Flask, FastAPI, and Django for web services</p>
        <span class="arrow">→</span>
      </a>

      <a href="/foundations/" class="pillar-nav-card" style="border-top-color: #FF6B6B;">
        <span class="pillar-icon">📊</span>
        <h4>Data Analysis</h4>
        <p>Master Python, NumPy, Pandas & visualization</p>
        <span class="arrow">→</span>
      </a>

      <a href="/machine-learning/" class="pillar-nav-card" style="border-top-color: #4ECDC4;">
        <span class="pillar-icon">🤖</span>
        <h4>Machine Learning</h4>
        <p>Build predictive and clustering models</p>
        <span class="arrow">→</span>
      </a>

      <a href="/nlp/" class="pillar-nav-card" style="border-top-color: #45B7D1;">
        <span class="pillar-icon">📝</span>
        <h4>Natural Language Processing</h4>
        <p>Process and understand human language</p>
        <span class="arrow">→</span>
      </a>

      <a href="/computer-vision/" class="pillar-nav-card" style="border-top-color: #FFA07A;">
        <span class="pillar-icon">👁️</span>
        <h4>Computer Vision</h4>
        <p>Teach machines to see and interpret images</p>
        <span class="arrow">→</span>
      </a>

      <a href="/deep-learning/" class="pillar-nav-card" style="border-top-color: #98D8C8;">
        <span class="pillar-icon">🧠</span>
        <h4>Deep Learning & Transformers</h4>
        <p>Master advanced neural architectures</p>
        <span class="arrow">→</span>
      </a>

      <a href="/generative-ai/" class="pillar-nav-card" style="border-top-color: #F7DC6F;">
        <span class="pillar-icon">✨</span>
        <h4>Generative AI & LLMs</h4>
        <p>Build with Large Language Models</p>
        <span class="arrow">→</span>
      </a>

      <a href="/agentic-ai/" class="pillar-nav-card" style="border-top-color: #BB8FCE;">
        <span class="pillar-icon">🤖</span>
        <h4>Agentic AI</h4>
        <p>Create autonomous intelligent agents</p>
        <span class="arrow">→</span>
      </a>
    </div>
  </div>
</section>

<!-- Learning Planner Button Section -->
<section class="planner-button-section">
  <div class="container">
    <div class="planner-content">
      <a href="/pillars/" class="btn btn-planner-light">View Complete Learning Planner</a>
      <p class="planner-description">
        Master artificial intelligence through a structured, progressive curriculum. Each pillar builds on the previous one, with concepts, code, visuals, and real-world applications.
      </p>
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

<section class="stay-updated-section">
  <div class="container">
    <div class="stay-updated-content">
      <h2>📬 Stay Updated</h2>
      <p>Get notified when new articles and learning resources are published. Connect with me on LinkedIn to follow my AI journey.</p>
      
      <div class="contact-buttons">
        <a href="mailto:your-email@example.com" class="contact-btn email-btn" title="Send Email">
          <span class="btn-icon">✉️</span>
          <span class="btn-text">Email</span>
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" class="contact-btn linkedin-btn" title="Connect on LinkedIn">
          <span class="btn-icon">💼</span>
          <span class="btn-text">LinkedIn</span>
        </a>
      </div>
      
      <p class="contact-note">I share insights about AI, machine learning, and building intelligent systems. Let's connect!</p>
    </div>
  </div>
</section>

<style>
/* Hero Section */
.homepage-hero {
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;
  margin-bottom: 60px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.logo-container {
  margin-bottom: 40px;
  animation: float 3s ease-in-out infinite;
}

.hero-logo {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Pillars Navigation Section */
.pillars-nav-section {
  padding: 60px 20px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
}

.pillars-header {
  text-align: center;
  margin-bottom: 50px;
}

.pillars-header h2 {
  font-size: 2.5em;
  color: var(--text-primary);
  margin-bottom: 15px;
  font-weight: 700;
}

.pillars-header p {
  font-size: 1.1em;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.pillars-quick-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  width: 100%;
}

.pillar-nav-card {
  background: white;
  padding: 25px 20px;
  border-radius: 10px;
  border-top: 4px solid var(--accent-primary);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
}

.pillar-nav-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.2);
}

.pillar-nav-card.pillar-nav-card-full {
  grid-column: 1 / -1;
  max-width: 400px;
  margin: 0 auto;
}

.pillar-icon {
  font-size: 2.5em;
  margin-bottom: 15px;
  display: block;
}

.pillar-nav-card h4 {
  font-size: 1.1em;
  color: #1a1a1a;
  margin: 10px 0;
  font-weight: 700;
}

.pillar-nav-card p {
  font-size: 0.9em;
  color: #424242;
  margin: 10px 0 15px 0;
  line-height: 1.5;
  flex-grow: 1;
}

.pillar-nav-card .arrow {
  color: var(--accent-primary);
  font-weight: 700;
  transition: transform 0.3s ease;
  margin-top: 10px;
}

.pillar-nav-card:hover .arrow {
  transform: translateX(5px);
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

.btn-tertiary {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-tertiary:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: white;
  transform: translateY(-2px);
}

.btn-large {
  padding: 16px 50px;
  font-size: 1.1em;
}

.planner-button-section {
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  padding: 40px 20px;
  text-align: center;
  color: white;
  margin-top: 40px;
  margin-bottom: 40px;
}

.planner-content {
  max-width: 600px;
  margin: 0 auto;
}

.btn-planner-light {
  background: white;
  color: #0891b2;
  padding: 12px 35px;
  font-size: 1em;
  font-weight: 600;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-planner-light:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  background: #f0f9fa;
}

.planner-description {
  margin-top: 15px;
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.95em;
  line-height: 1.6;
}

.pillars-view-all {
  text-align: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
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
  color: var(--text-primary);
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.topic-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 15px var(--card-shadow);
  transition: all 0.3s ease;
}

.topic-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px var(--card-shadow-hover);
}

.topic-icon {
  font-size: 3em;
  margin-bottom: 20px;
}

.topic-card h3 {
  font-size: 1.3em;
  margin-bottom: 15px;
  color: var(--text-primary);
}

.topic-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Posts Section */
.posts-section {
  padding: 60px 20px;
  background: var(--bg-primary);
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
  width: 100%;
}

.post-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px var(--card-shadow);
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
  color: var(--accent-primary);
  font-weight: 600;
}

.post-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8em;
}

.post-title {
  font-size: 1.4em;
  margin: 15px 0;
  color: var(--text-primary);
}

.post-title a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.post-title a:hover {
  color: var(--accent-primary);
}

.post-excerpt {
  color: var(--text-secondary);
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
  
  .pillars-header h2 {
    font-size: 2em;
  }
  
  .pillars-quick-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .pillar-nav-card.pillar-nav-card-full {
    grid-column: 1 / -1;
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
  
  .pillars-quick-nav {
    grid-template-columns: 1fr;
  }
  
  .pillar-nav-card.pillar-nav-card-full {
    grid-column: 1;
  }
}

/* Sparkle Effect - Gold Fire */
@keyframes sparkle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.hero-logo {
  position: relative;
  animation: float 3s ease-in-out infinite, sparkle 3s ease-in-out infinite;
}

.hero-logo::before,
.hero-logo::after {
  content: '✨';
  position: absolute;
  font-size: 1.5em;
  animation: sparkle 2s ease-in-out infinite;
  color: #ff8c00;
}

.hero-logo::before {
  top: -10px;
  right: 10px;
}

.hero-logo::after {
  bottom: 10px;
  right: -15px;
}

/* Stay Updated Section */
.stay-updated-section {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  padding: 60px 20px;
  text-align: center;
  color: white;
  margin-top: 60px;
}

.stay-updated-content {
  max-width: 600px;
  margin: 0 auto;
}

.stay-updated-section h2 {
  font-size: 2.2em;
  margin-bottom: 15px;
  color: white;
}

.stay-updated-section p {
  font-size: 1.05em;
  line-height: 1.6;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.95);
}

.contact-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 25px;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95em;
  transition: all 0.3s ease;
  border: 2px solid white;
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.contact-btn:hover {
  background: white;
  color: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.btn-icon {
  font-size: 1.2em;
}

.btn-text {
  font-weight: 600;
}

.contact-note {
  font-size: 0.9em;
  opacity: 0.85;
  font-style: italic;
}

@media (max-width: 600px) {
  .contact-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .contact-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
