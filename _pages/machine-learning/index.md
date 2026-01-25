---
layout: default
title: Machine Learning
permalink: /machine-learning/
---

<div class="category-hero">
  <div class="container">
    <div class="category-badge">Pillar 2</div>
    <h1>🤖 Machine Learning</h1>
    <p class="category-subtitle">Build Intelligent Predictive Systems</p>
    <p class="category-description">
      Master supervised and unsupervised learning algorithms. Learn to build models that predict outcomes, 
      discover patterns, and make data-driven decisions at scale.
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
          <h4>Linear Regression</h4>
          <p>Foundation of predictive modeling</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">2</span>
          <h4>Logistic Regression</h4>
          <p>Binary classification problems</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">3</span>
          <h4>Decision Trees</h4>
          <p>Tree-based models & splitting criteria</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">4</span>
          <h4>Ensemble Methods</h4>
          <p>Random Forest, XGBoost, Voting</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">5</span>
          <h4>Clustering</h4>
          <p>K-Means, Hierarchical, DBSCAN</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">6</span>
          <h4>Dimensionality Reduction</h4>
          <p>PCA, Feature Selection</p>
        </div>
      </div>
    </div>

    <!-- Posts Section -->
    <div class="posts-section">
      <h2>📝 Articles in This Pillar</h2>
      
      <div class="category-posts">
        {% for post in site.posts %}
          {% if post.categories contains 'machine-learning' or post.tags contains 'Machine Learning' %}
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
          <h4>Scikit-learn</h4>
          <p>Python machine learning library</p>
          <a href="https://scikit-learn.org/" target="_blank">Learn →</a>
        </div>
        <div class="resource-card">
          <h4>XGBoost</h4>
          <p>Gradient boosting framework</p>
          <a href="https://xgboost.readthedocs.io/" target="_blank">Learn →</a>
        </div>
        <div class="resource-card">
          <h4>LightGBM</h4>
          <p>Fast gradient boosting library</p>
          <a href="https://lightgbm.readthedocs.io/" target="_blank">Learn →</a>
        </div>
        <div class="resource-card">
          <h4>Scikit-optimize</h4>
          <p>Hyperparameter tuning tools</p>
          <a href="https://scikit-optimize.github.io/" target="_blank">Learn →</a>
        </div>
      </div>
    </div>

    <!-- Use Cases -->
    <div class="use-cases-section">
      <h2>💼 Real-World Applications</h2>
      <div class="use-case-list">
        <div class="use-case-item">
          <h4>🏦 Loan Default Prediction</h4>
          <p>Predict which loan applicants are likely to default using classification models, reducing financial risk by 25%.</p>
        </div>
        <div class="use-case-item">
          <h4>🛒 Customer Segmentation</h4>
          <p>Cluster customers into groups for targeted marketing using K-Means and hierarchical clustering.</p>
        </div>
        <div class="use-case-item">
          <h4>📈 Sales Forecasting</h4>
          <p>Predict future sales trends using regression models to optimize inventory and resource planning.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.category-hero {
  background: linear-gradient(135deg, #4ECDC4 0%, #44A99E 100%);
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
  border-top: 4px solid #4ECDC4;
  transition: all 0.3s ease;
}

.roadmap-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(78, 205, 196, 0.15);
}

.step-number {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #4ECDC4;
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
  border-bottom: 3px solid #4ECDC4;
  padding-bottom: 15px;
}

.category-posts {
  display: grid;
  gap: 30px;
  margin-bottom: 40px;
}

.post-preview {
  background: white;
  border-left: 5px solid #4ECDC4;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.post-preview:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(78, 205, 196, 0.15);
}

.post-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.post-date {
  color: #4ECDC4;
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
  color: #4ECDC4;
}

.post-preview p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.read-more {
  color: #4ECDC4;
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
  border-bottom: 3px solid #4ECDC4;
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
  border-top: 4px solid #4ECDC4;
  transition: all 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(78, 205, 196, 0.15);
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
  color: #4ECDC4;
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
  border-bottom: 3px solid #4ECDC4;
  padding-bottom: 15px;
}

.use-case-list {
  display: grid;
  gap: 20px;
}

.use-case-item {
  background: white;
  border-left: 5px solid #4ECDC4;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.use-case-item h4 {
  color: #4ECDC4;
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
