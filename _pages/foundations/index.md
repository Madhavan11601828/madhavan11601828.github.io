---
layout: default
title: Data Analysis
permalink: /foundations/
---

<div class="category-hero">
  <div class="container">
    <div class="category-badge">Pillar 1</div>
    <h1>📊 Data Analysis</h1>
    <p class="category-subtitle">Your Base Camp for AI Mastery</p>
    <p class="category-description">
      Master Python data analysis, data manipulation, and visualization. 
      Learn to extract, clean, and explore insights from raw data—the foundation of all data science.
    </p>
  </div>
</div>

<div class="category-content">
  <div class="container">
    <!-- Learning Roadmap -->
    <div class="roadmap-section">
      <h2>📚 Learning Roadmap</h2>
      <div class="roadmap-steps">
        <div class="roadmap-step">
          <span class="step-number">1</span>
          <h4>Python for Data</h4>
          <p>Python basics for data analysis</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">2</span>
          <h4>NumPy</h4>
          <p>Numerical computing with arrays</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">3</span>
          <h4>Pandas</h4>
          <p>Data manipulation & analysis</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">4</span>
          <h4>Data Cleaning</h4>
          <p>Handling missing values & outliers</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">5</span>
          <h4>EDA</h4>
          <p>Exploratory data analysis</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">6</span>
          <h4>Visualization</h4>
          <p>Matplotlib & Seaborn</p>
        </div>
      </div>
    </div>

    <!-- Posts Section -->
    <div class="posts-section">
      <h2>📝 Articles in This Pillar</h2>
      
      <div class="category-posts">
        {% for post in site.posts %}
          {% if post.categories contains 'foundations' or post.tags contains 'Data Science' %}
            <article class="post-preview">
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
              <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
              <p>{{ post.content | strip_html | truncatewords: 40 }}</p>
              <a href="{{ post.url }}" class="read-more">Read Full Article →</a>
            </article>
          {% endif %}
        {% endfor %}
      </div>
      
      <div class="no-posts-yet">
        <p>🚀 More articles coming soon! Check back regularly for new content.</p>
      </div>
    </div>

    <!-- Key Resources -->
    <div class="resources-section">
      <h2>📚 Key Resources & Tools</h2>
      <div class="resources-grid">
        <div class="resource-card">
          <h4>Python</h4>
          <p>Python 3.8+ with Jupyter Notebook</p>
          <a href="https://www.python.org/" target="_blank">Learn →</a>
        </div>
        <div class="resource-card">
          <h4>NumPy</h4>
          <p>Numerical computing library</p>
          <a href="https://numpy.org/" target="_blank">Learn →</a>
        </div>
        <div class="resource-card">
          <h4>Pandas</h4>
          <p>Data analysis & manipulation</p>
          <a href="https://pandas.pydata.org/" target="_blank">Learn →</a>
        </div>
        <div class="resource-card">
          <h4>Matplotlib</h4>
          <p>Data visualization</p>
          <a href="https://matplotlib.org/" target="_blank">Learn →</a>
        </div>
      </div>
    </div>

    <!-- Use Cases -->
    <div class="use-cases-section">
      <h2>💼 Real-World Applications</h2>
      <div class="use-case-list">
        <div class="use-case-item">
          <h4>🏢 Employee Attrition Analysis</h4>
          <p>Load employee data, clean missing values, explore patterns, and visualize insights about why employees leave.</p>
        </div>
        <div class="use-case-item">
          <h4>📊 Sales Data Analysis</h4>
          <p>Analyze sales trends, customer behavior, and regional performance using real datasets.</p>
        </div>
        <div class="use-case-item">
          <h4>🏥 Healthcare Data Exploration</h4>
          <p>Work with patient records to identify patterns and trends in health data.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.category-hero {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 50px;
  border-radius: 0 0 20px 20px;
}

.category-badge {
  display: inline-block;
  background: rgba(255,255,255,0.3);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 600;
  margin-bottom: 15px;
}

.category-hero h1 {
  font-size: 2.8em;
  margin-bottom: 15px;
}

.category-subtitle {
  font-size: 1.3em;
  opacity: 0.95;
  margin-bottom: 15px;
}

.category-description {
  font-size: 1.05em;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: 1.6;
}

.category-content {
  padding: 40px 20px;
}

.roadmap-section {
  margin-bottom: 60px;
}

.roadmap-section h2 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 40px;
  color: #333;
}

.roadmap-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.roadmap-step {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  border-top: 4px solid #FF6B6B;
  transition: all 0.3s ease;
}

.roadmap-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.15);
}

.step-number {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #FF6B6B;
  color: white;
  border-radius: 50%;
  line-height: 40px;
  font-weight: 800;
  margin-bottom: 15px;
}

.roadmap-step h4 {
  margin: 15px 0;
  color: #333;
}

.roadmap-step p {
  color: #666;
  font-size: 0.9em;
}

.posts-section {
  margin-bottom: 60px;
}

.posts-section h2 {
  font-size: 2em;
  margin-bottom: 40px;
  color: #333;
  border-bottom: 3px solid #FF6B6B;
  padding-bottom: 15px;
}

.category-posts {
  display: grid;
  gap: 30px;
  margin-bottom: 40px;
}

.post-preview {
  background: white;
  border-left: 5px solid #FF6B6B;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.post-preview:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.15);
}

.post-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.post-date {
  color: #FF6B6B;
  font-weight: 600;
  font-size: 0.9em;
}

.post-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: #f0f0f0;
  color: #666;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8em;
}

.post-preview h3 {
  margin: 15px 0;
  color: #333;
}

.post-preview h3 a {
  color: #333;
  text-decoration: none;
}

.post-preview h3 a:hover {
  color: #FF6B6B;
}

.post-preview p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.read-more {
  color: #FF6B6B;
  text-decoration: none;
  font-weight: 600;
}

.read-more:hover {
  transform: translateX(5px);
  display: inline-block;
}

.no-posts-yet {
  background: #f8f9fa;
  padding: 40px;
  text-align: center;
  border-radius: 10px;
  color: #666;
}

.resources-section {
  margin-bottom: 60px;
}

.resources-section h2 {
  font-size: 2em;
  margin-bottom: 40px;
  color: #333;
  border-bottom: 3px solid #FF6B6B;
  padding-bottom: 15px;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
}

.resource-card {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  border-top: 4px solid #FF6B6B;
  transition: all 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.15);
}

.resource-card h4 {
  color: #333;
  margin-bottom: 10px;
}

.resource-card p {
  color: #666;
  font-size: 0.95em;
  margin-bottom: 15px;
}

.resource-card a {
  color: #FF6B6B;
  text-decoration: none;
  font-weight: 600;
}

.resource-card a:hover {
  text-decoration: underline;
}

.use-cases-section h2 {
  font-size: 2em;
  margin-bottom: 40px;
  color: #333;
  border-bottom: 3px solid #FF6B6B;
  padding-bottom: 15px;
}

.use-case-list {
  display: grid;
  gap: 20px;
}

.use-case-item {
  background: white;
  border-left: 5px solid #FF6B6B;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.use-case-item h4 {
  color: #FF6B6B;
  margin-top: 0;
}

.use-case-item p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .category-hero h1 {
    font-size: 2em;
  }
  
  .roadmap-steps {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .resources-grid {
    grid-template-columns: 1fr;
  }
}
</style>
