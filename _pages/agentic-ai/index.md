---
layout: default
title: Agentic AI
permalink: /agentic-ai/
---

<div class="category-hero">
  <div class="container">
    <div class="category-badge">Pillar 7</div>
    <h1>🤖 Agentic AI</h1>
    <p class="category-subtitle">Building Autonomous Intelligent Agents</p>
    <p class="category-description">
      Create autonomous agents that plan, reason, and act. Learn tool orchestration, multi-agent systems, 
      and how to build AI systems that work independently to solve complex problems.
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
          <h4>Agent Fundamentals</h4>
          <p>What makes an agent?</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">2</span>
          <h4>Tool Calling & Integration</h4>
          <p>Function calling and APIs</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">3</span>
          <h4>Planning & Reasoning</h4>
          <p>Chain of thought strategies</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">4</span>
          <h4>Multi-Agent Systems</h4>
          <p>Coordination and communication</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">5</span>
          <h4>Safety & Guardrails</h4>
          <p>Controlling agent behavior</p>
        </div>
        <div class="roadmap-step">
          <span class="step-number">6</span>
          <h4>Production Deployment</h4>
          <p>Scaling and monitoring</p>
        </div>
      </div>
    </div>

    <!-- Posts Section -->
    <div class="posts-section">
      <h2>📝 Articles in This Pillar</h2>
      
      <div class="category-posts">
        {% for post in site.posts %}
          {% if post.categories contains 'agentic-ai' or post.tags contains 'Agentic AI' %}
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
          <h4>LangGraph</h4>
          <p>Agentic orchestration framework</p>
          <a href="https://langchain-ai.github.io/langgraph/" target="_blank">Learn →</a>
        </div>
        <div class="resource-card">
          <h4>AutoGen</h4>
          <p>Multi-agent conversation framework</p>
          <a href="https://microsoft.github.io/autogen/" target="_blank">Learn →</a>
        </div>
        <div class="resource-card">
          <h4>ReAct</h4>
          <p>Reasoning + Acting paradigm</p>
          <a href="https://react-lm.github.io/" target="_blank">Learn →</a>
        </div>
        <div class="resource-card">
          <h4>CrewAI</h4>
          <p>Collaborative multi-agent systems</p>
          <a href="https://crewai.com/" target="_blank">Learn →</a>
        </div>
      </div>
    </div>

    <!-- Use Cases -->
    <div class="use-cases-section">
      <h2>💼 Real-World Applications</h2>
      <div class="use-case-list">
        <div class="use-case-item">
          <h4>🏗️ Autonomous Project Manager</h4>
          <p>AI agent that breaks down projects, assigns tasks, tracks progress, and adapts to changes without human intervention.</p>
        </div>
        <div class="use-case-item">
          <h4>🔬 Research Assistant Agent</h4>
          <p>Multi-agent system that searches papers, synthesizes information, identifies gaps, and generates research recommendations.</p>
        </div>
        <div class="use-case-item">
          <h4>💼 Business Operations Agent</h4>
          <p>Autonomous agent handling data analysis, report generation, recommendations, and alerting without human prompting.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.category-hero {
  background: linear-gradient(135deg, #BB8FCE 0%, #9B59B6 100%);
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
  border-top: 4px solid #BB8FCE;
  transition: all 0.3s ease;
}

.roadmap-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(187, 143, 206, 0.15);
}

.step-number {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #BB8FCE;
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
  border-bottom: 3px solid #BB8FCE;
  padding-bottom: 15px;
}

.category-posts {
  display: grid;
  gap: 30px;
  margin-bottom: 40px;
}

.post-preview {
  background: white;
  border-left: 5px solid #BB8FCE;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.post-preview:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(187, 143, 206, 0.15);
}

.post-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.post-date {
  color: #BB8FCE;
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
  color: #BB8FCE;
}

.post-preview p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.read-more {
  color: #BB8FCE;
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
  border-bottom: 3px solid #BB8FCE;
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
  border-top: 4px solid #BB8FCE;
  transition: all 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(187, 143, 206, 0.15);
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
  color: #BB8FCE;
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
  border-bottom: 3px solid #BB8FCE;
  padding-bottom: 15px;
}

.use-case-list {
  display: grid;
  gap: 20px;
}

.use-case-item {
  background: white;
  border-left: 5px solid #BB8FCE;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.use-case-item h4 {
  color: #BB8FCE;
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
