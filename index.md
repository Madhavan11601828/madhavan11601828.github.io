# Hi, I'm Mangena Venu Madhavan 👋

Welcome to my personal blog where I write about:

- **Generative AI** – Building intelligent systems with LLMs
- **Agentic AI** – Autonomous agents and workflow automation
- **Data Science** – Analytics, ML, and insights
- **LLM Architectures** – Deep dives into model design and optimization

---

## 📚 Recent Posts

{% for post in site.posts limit:5 %}
  - [{{ post.title }}]({{ post.url }}) - *{{ post.date | date: "%B %d, %Y" }}*
{% endfor %}

---

## 🔗 Connect With Me

- GitHub: [madhavan11601828](https://github.com/madhavan11601828)
- Topics: Generative AI | Data Science | Agentic AI

*Last updated: {{ site.time | date: "%B %Y" }}*
