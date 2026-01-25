---
layout: page
title: About Me
permalink: /about/
---

<style>
  /* Hero Section Styling */
  .about-hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 80px 40px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 60px;
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  }

  .about-hero h1 {
    font-size: 3.5em;
    margin: 0;
    font-weight: 700;
    letter-spacing: -1px;
  }

  .about-hero .tagline {
    font-size: 1.5em;
    margin-top: 15px;
    opacity: 0.95;
    font-weight: 300;
  }

  .about-hero .contact-links {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .about-hero .contact-links a {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s ease;
    font-size: 0.95em;
  }

  .about-hero .contact-links a:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  /* Section Headers */
  .section-header {
    display: flex;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 3px solid #667eea;
  }

  .section-header::before {
    content: '';
    width: 8px;
    height: 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
    margin-right: 15px;
  }

  .section-header h2 {
    margin: 0;
    font-size: 2.2em;
    color: #333;
  }

  /* Professional Summary */
  .summary-box {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    padding: 30px;
    border-radius: 10px;
    border-left: 5px solid #667eea;
    margin-bottom: 40px;
    line-height: 1.8;
    font-size: 1.05em;
    color: #555;
  }

  /* Career Timeline */
  .timeline {
    position: relative;
    margin-top: 30px;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #667eea, #764ba2, #667eea);
  }

  .timeline-item {
    margin-left: 80px;
    margin-bottom: 40px;
    position: relative;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: -68px;
    top: 5px;
    width: 16px;
    height: 16px;
    background: white;
    border: 3px solid #667eea;
    border-radius: 50%;
  }

  .timeline-item h3 {
    margin: 0 0 5px 0;
    color: #667eea;
    font-size: 1.4em;
  }

  .timeline-item .position {
    font-size: 1.1em;
    color: #333;
    font-weight: 600;
  }

  .timeline-item .company {
    color: #764ba2;
    font-size: 1em;
    margin-top: 3px;
  }

  .timeline-item .duration {
    color: #999;
    font-size: 0.95em;
    margin-top: 2px;
  }

  .timeline-item ul {
    margin-top: 15px;
    padding-left: 20px;
  }

  .timeline-item li {
    margin-bottom: 8px;
    color: #666;
    line-height: 1.6;
  }

  /* Skills Section */
  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 30px;
  }

  .skill-category {
    background: white;
    padding: 25px;
    border-radius: 10px;
    border-top: 4px solid #667eea;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .skill-category:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }

  .skill-category h4 {
    color: #667eea;
    font-size: 1.2em;
    margin-top: 0;
    margin-bottom: 15px;
  }

  .skill-category ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .skill-category li {
    padding: 8px 0;
    color: #555;
    position: relative;
    padding-left: 20px;
  }

  .skill-category li::before {
    content: '▸';
    color: #764ba2;
    font-weight: bold;
    position: absolute;
    left: 0;
  }

  /* Education & Certifications */
  .education-item {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    border-left: 4px solid #667eea;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  }

  .education-item h4 {
    margin: 0 0 5px 0;
    color: #333;
    font-size: 1.1em;
  }

  .education-item .institution {
    color: #764ba2;
    font-weight: 600;
    margin: 5px 0;
  }

  .education-item .year {
    color: #999;
    font-size: 0.95em;
  }

  /* Awards Section */
  .awards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }

  .award-card {
    background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .award-card:hover {
    transform: scale(1.05);
  }

  .award-card h4 {
    margin: 0 0 10px 0;
    font-size: 1.15em;
  }

  .award-card p {
    margin: 0;
    font-size: 0.95em;
    opacity: 0.95;
  }

  /* Publications Section */
  .publication-list {
    margin-top: 30px;
  }

  .publication-item {
    background: white;
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 8px;
    border-left: 4px solid #667eea;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  }

  .publication-item p {
    margin: 0;
    color: #555;
    line-height: 1.6;
  }

  .publication-title {
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
  }

  .publication-source {
    color: #764ba2;
    font-size: 0.95em;
    font-style: italic;
  }

  /* Stats Section */
  .stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 40px 0;
  }

  .stat-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
  }

  .stat-card .number {
    font-size: 2.5em;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .stat-card .label {
    font-size: 1em;
    opacity: 0.95;
  }

  /* CTA Section */
  .cta-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    margin-top: 60px;
  }

  .cta-section h3 {
    margin-top: 0;
    font-size: 1.8em;
  }

  .cta-section p {
    margin: 15px 0;
    font-size: 1.1em;
  }

  .cta-button {
    display: inline-block;
    background: white;
    color: #667eea;
    padding: 12px 30px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    margin-top: 20px;
    transition: transform 0.3s ease;
  }

  .cta-button:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .about-hero {
      padding: 50px 20px;
    }

    .about-hero h1 {
      font-size: 2.5em;
    }

    .about-hero .tagline {
      font-size: 1.2em;
    }

    .section-header h2 {
      font-size: 1.8em;
    }

    .skills-container {
      grid-template-columns: 1fr;
    }

    .awards-grid {
      grid-template-columns: 1fr;
    }

    .stats-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<!-- Hero Section -->
<div class="about-hero">
  <h1>Mangena Venu Madhavan</h1>
  <div class="tagline">Python Developer & Generative AI Specialist</div>
  <p style="margin: 20px 0; font-size: 1.1em; opacity: 0.9;">
    Building intelligent AI agents and transforming ideas into scalable solutions
  </p>
  <div class="contact-links">
    <a href="mailto:venumangenamadhavan@gmail.com">📧 Email</a>
    <a href="https://linkedin.com/in/mangenavenumadhavan" target="_blank">🔗 LinkedIn</a>
    <a href="https://github.com" target="_blank">💻 GitHub</a>
    <a href="tel:+919872193538">📱 +91-9872193538</a>
  </div>
</div>

<!-- Quick Stats -->
<div class="stats-container">
  <div class="stat-card">
    <div class="number">4+</div>
    <div class="label">Years Experience</div>
  </div>
  <div class="stat-card">
    <div class="number">10+</div>
    <div class="label">Enterprise Projects</div>
  </div>
  <div class="stat-card">
    <div class="number">5</div>
    <div class="label">Publications</div>
  </div>
  <div class="stat-card">
    <div class="number">4</div>
    <div class="label">Azure Certifications</div>
  </div>
</div>

<!-- Professional Summary -->
<div class="section-header">
  <h2>Professional Summary</h2>
</div>

<div class="summary-box">
  <p>
    I'm a Python Developer and Generative AI Specialist with nearly 4 years of experience delivering end-to-end AI-driven solutions. My expertise lies in developing intelligent agents, Retrieval-Augmented Generation (RAG) applications, and automation workflows using frameworks like LangChain, LlamaIndex, and Azure AI Services.
  </p>
  <p>
    I transform business requirements into scalable technical solutions by collaborating closely with clients, delivery teams, and cross-functional stakeholders. I've successfully designed and deployed enterprise-grade AI agents including financial analysis systems and intelligent automation workflows that reduce manual intervention and improve operational efficiency.
  </p>
  <p>
    Beyond technical development, I lead team collaborations on agent projects, facilitate requirement-gathering discussions with stakeholders, and ensure smooth delivery of mission-critical solutions. Recognized for innovation in Generative AI, time-series forecasting, and computer vision, I bring a balance of technical depth, leadership, and client engagement to every project.
  </p>
</div>

<!-- Career Timeline -->
<div class="section-header">
  <h2>Professional Experience</h2>
</div>

<div class="timeline">
  <div class="timeline-item">
    <h3>Current Role</h3>
    <div class="position">Associate Consultant - Python Developer & Generative AI Specialist</div>
    <div class="company">Infosys Limited | Hyderabad, India</div>
    <div class="duration">January 2024 – Present (2+ years)</div>
    <ul>
      <li><strong>Agent Development:</strong> Designed and deployed intelligent agents including a financial analysis system for Intel providing actionable insights into operational/capital expenditures, and an automation agent for Delek streamlining purchase order validation with AI-powered checkpoints.</li>
      <li><strong>LLM Solutions:</strong> Engineered semantic search solutions for RCA documents using LangChain and LlamaIndex, improving root-cause analysis speed and accuracy.</li>
      <li><strong>Azure Integration:</strong> Developed advanced video-based semantic search systems integrating Azure Cognitive Services, Azure OpenAI, and Azure Functions.</li>
      <li><strong>Cost Optimization:</strong> Innovated a cost-optimized LLM Router that dynamically routes queries to reduce costs while maintaining performance.</li>
      <li><strong>Team Leadership:</strong> Led team efforts on multiple agent development projects, ensuring seamless collaboration and on-time delivery.</li>
      <li><strong>Client Collaboration:</strong> Engaged directly with clients during requirement-gathering sessions, translating business needs into effective AI-driven solutions.</li>
      <li><strong>Package Development:</strong> Designed modular Python packages ensuring scalability, reusability, and maintainability for internal PoCs.</li>
    </ul>
  </div>

  <div class="timeline-item">
    <h3>Previous Role</h3>
    <div class="position">Associate Consultant - AI & Machine Learning Developer</div>
    <div class="company">Capgemini Technology Services Limited | Hyderabad, India</div>
    <div class="duration">June 2021 – January 2024 (2.5+ years)</div>
    <ul>
      <li><strong>NLP Solutions:</strong> Developed an SQL Query Generator using LLMs to convert natural language into optimized SQL queries, empowering business users to interact seamlessly with databases.</li>
      <li><strong>Time-Series Forecasting:</strong> Designed and implemented forecasting pipelines using Azure Data Factory, enabling accurate demand and trend predictions.</li>
      <li><strong>Computer Vision:</strong> Collaborated on a computer vision solution for cervical fracture detection, applying transfer learning to improve diagnostic accuracy.</li>
      <li><strong>Prompt Engineering:</strong> Refined large language models for improved accuracy in structured text conversion projects like the A2B conversion tool.</li>
      <li><strong>Custom Packages:</strong> Built custom Python packages streamlining data processing workflows for various client PoCs.</li>
      <li><strong>Recognition:</strong> Awarded 'Project of the Month' for building a Time-Series Analysis Platform; received 'Rising Star' recognition for impactful contributions to PoC development.</li>
    </ul>
  </div>
</div>

<!-- Core Skills -->
<div class="section-header">
  <h2>Core Skills & Expertise</h2>
</div>

<div class="skills-container">
  <div class="skill-category">
    <h4>🐍 Programming & Development</h4>
    <ul>
      <li>Python (Advanced)</li>
      <li>Modular Package Development</li>
      <li>Git/GitHub & Azure DevOps</li>
      <li>Data Version Control (DVC)</li>
      <li>API Development & Integration</li>
      <li>Testing & Documentation</li>
    </ul>
  </div>

  <div class="skill-category">
    <h4>🤖 Generative AI & Agents</h4>
    <ul>
      <li>LangChain & LlamaIndex</li>
      <li>RAG Applications</li>
      <li>Intelligent Agent Development</li>
      <li>LLM Routing & Orchestration</li>
      <li>Prompt Engineering</li>
      <li>Model Context Protocol (MCP)</li>
    </ul>
  </div>

  <div class="skill-category">
    <h4>☁️ Cloud & AI Platforms</h4>
    <ul>
      <li>Microsoft Azure (Expert)</li>
      <li>Azure AI & ML Services</li>
      <li>Azure Kubernetes Service (AKS)</li>
      <li>Azure Cognitive Services</li>
      <li>Azure OpenAI Integration</li>
      <li>Azure DevOps & Pipelines</li>
    </ul>
  </div>

  <div class="skill-category">
    <h4>🔬 Machine Learning & AI</h4>
    <ul>
      <li>Time-Series Forecasting</li>
      <li>Computer Vision</li>
      <li>Natural Language Processing</li>
      <li>Transfer Learning</li>
      <li>SQL Generation with LLMs</li>
      <li>Model Optimization</li>
    </ul>
  </div>

  <div class="skill-category">
    <h4>🎯 Professional Competencies</h4>
    <ul>
      <li>Team Leadership & Collaboration</li>
      <li>Client Requirement Analysis</li>
      <li>Solution Architecture & Design</li>
      <li>Project Delivery Management</li>
      <li>Documentation & Training</li>
      <li>Stakeholder Communication</li>
    </ul>
  </div>

  <div class="skill-category">
    <h4>🛠️ Tools & Technologies</h4>
    <ul>
      <li>Azure Data Factory</li>
      <li>Azure Functions & Apps</li>
      <li>Azure Storage & Databases</li>
      <li>Azure Monitor & Logging</li>
      <li>Kubernetes & Docker</li>
      <li>MLOps Frameworks</li>
    </ul>
  </div>
</div>

<!-- Education -->
<div class="section-header">
  <h2>Education & Certifications</h2>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; margin-top: 30px;">
  <div>
    <h3 style="color: #667eea; margin-bottom: 20px;">🎓 Education</h3>
    
    <div class="education-item">
      <h4>Integrated B.Tech – M.Tech in Computer Science</h4>
      <div class="institution">Lovely Personal University, India</div>
      <div class="year">Graduated: 2021 | CGPA: 9.2/10</div>
    </div>

    <div class="education-item">
      <h4>Intermediate (MPC)</h4>
      <div class="institution">Sasi Junior College, India</div>
      <div class="year">Graduated: 2008 | Percentage: 94%</div>
    </div>
  </div>

  <div>
    <h3 style="color: #667eea; margin-bottom: 20px;">🏆 Certifications</h3>
    
    <div class="education-item">
      <h4>AI-102: Microsoft Azure AI Engineer Associate</h4>
      <div class="year">Certified: 2025</div>
    </div>

    <div class="education-item">
      <h4>AI-900: Microsoft Azure AI Fundamentals</h4>
      <div class="year">Certified: 2024</div>
    </div>

    <div class="education-item">
      <h4>DP-900: Microsoft Azure Data Fundamentals</h4>
      <div class="year">Certified: 2023</div>
    </div>

    <div class="education-item">
      <h4>AZ-900: Microsoft Azure Fundamentals</h4>
      <div class="year">Certified: 2022</div>
    </div>

    <div class="education-item">
      <h4>Dataiku ML Practitioner & Core Designer</h4>
      <div class="year">Certified: 2021</div>
    </div>
  </div>
</div>

<!-- Awards & Recognition -->
<div class="section-header">
  <h2>Awards & Recognition</h2>
</div>

<div class="awards-grid">
  <div class="award-card">
    <h4>🥉 3rd Place, Gemini Hackathon</h4>
    <p>Infosys & Google | 2024</p>
    <p style="font-size: 0.85em; margin-top: 10px;">Recognized for innovative AI solution development</p>
  </div>

  <div class="award-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
    <h4>🌟 Project of the Month</h4>
    <p>Capgemini | 2023</p>
    <p style="font-size: 0.85em; margin-top: 10px;">Time-Series Analysis Platform</p>
  </div>

  <div class="award-card" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
    <h4>⭐ Rising Star Award</h4>
    <p>Capgemini | 2022</p>
    <p style="font-size: 0.85em; margin-top: 10px;">Impactful PoC Development Contributions</p>
  </div>
</div>

<!-- Publications -->
<div class="section-header">
  <h2>Publications & Research</h2>
</div>

<div class="publication-list">
  <div class="publication-item">
    <div class="publication-title">📄 Res-CovNet: An IoT-driven COVID-19 Framework</div>
    <div class="publication-source">Springer Neural Computing and Applications | 2021</div>
  </div>

  <div class="publication-item">
    <div class="publication-title">📄 Comparative Study on Data Embedding Techniques in Steganography</div>
    <div class="publication-source">Springer | 2021</div>
  </div>

  <div class="publication-item">
    <div class="publication-title">📄 Adaptive Algorithms for Visualization of Stereoscopic Face Mask</div>
    <div class="publication-source">IEEE | 2021</div>
  </div>

  <div class="publication-item">
    <div class="publication-title">📄 Detection of Email Spam with Machine Learning Approaches</div>
    <div class="publication-source">IOP | 2021</div>
  </div>

  <div class="publication-item">
    <div class="publication-title">📄 Recognition and Classification of Pomegranate Leaf Diseases</div>
    <div class="publication-source">CMC | 2020</div>
  </div>
</div>

<!-- What I Do -->
<div class="section-header">
  <h2>What I'm Passionate About</h2>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 30px;">
  <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); padding: 25px; border-radius: 10px; border-left: 4px solid #667eea;">
    <h4 style="color: #667eea; margin-top: 0;">🤖 Generative AI & LLMs</h4>
    <p style="margin-bottom: 0; color: #666;">Building intelligent agents that can reason, learn, and make decisions autonomously. Exploring the frontiers of RAG, prompt engineering, and multi-model orchestration.</p>
  </div>

  <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); padding: 25px; border-radius: 10px; border-left: 4px solid #764ba2;">
    <h4 style="color: #764ba2; margin-top: 0;">📊 Data Science & Analytics</h4>
    <p style="margin-bottom: 0; color: #666;">Transforming complex data into actionable insights. From predictive modeling to time-series forecasting, finding patterns that drive business value.</p>
  </div>

  <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); padding: 25px; border-radius: 10px; border-left: 4px solid #667eea;">
    <h4 style="color: #667eea; margin-top: 0;">☁️ Cloud Architecture</h4>
    <p style="margin-bottom: 0; color: #666;">Designing scalable, reliable, and secure cloud solutions on Azure. Building microservices, optimizing performance, and ensuring operational excellence.</p>
  </div>

  <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); padding: 25px; border-radius: 10px; border-left: 4px solid #764ba2;">
    <h4 style="color: #764ba2; margin-top: 0;">🔬 Research & Innovation</h4>
    <p style="margin-bottom: 0; color: #666;">Staying at the cutting edge of AI and ML. Publishing research, exploring emerging technologies, and contributing to the academic community.</p>
  </div>
</div>

<!-- CTA Section -->
<div class="cta-section">
  <h3>Let's Collaborate 🚀</h3>
  <p>
    I'm always interested in discussing AI solutions, innovative projects, and opportunities to create impact. Whether you're building your next AI application or exploring how to leverage intelligent automation, I'd love to connect.
  </p>
  <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 25px;">
    <a href="mailto:venumangenamadhavan@gmail.com" class="cta-button">Get in Touch via Email</a>
    <a href="https://linkedin.com/in/mangenavenumadhavan" target="_blank" class="cta-button">Connect on LinkedIn</a>
  </div>
  <p style="margin-bottom: 0; margin-top: 25px; font-size: 0.95em; opacity: 0.9;">
    📍 Based in Hyderabad, India | ☎️ +91-9872193538
  </p>
</div>
