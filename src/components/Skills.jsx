import React, { useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 78 },
    ],
  },
  {
    title: 'Frameworks',
    icon: '⚡',
    skills: [
      { name: 'FastAPI', level: 95 },
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'Django', level: 75 },
      { name: 'Flask', level: 80 },
    ],
  },
  {
    title: 'AI / ML',
    icon: '🧠',
    skills: [
      { name: 'RAG Pipelines', level: 92 },
      { name: 'OpenAI API', level: 90 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'XGBoost', level: 85 },
      { name: 'PyTorch', level: 78 },
      { name: 'Pandas/NumPy', level: 92 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'ChromaDB', level: 82 },
      { name: 'SQLite', level: 80 },
      { name: 'Supabase', level: 85 },
    ],
  },
  {
    title: 'DevOps & Observability',
    icon: '🔧',
    skills: [
      { name: 'Docker', level: 90 },
      { name: 'Git/GitHub', level: 92 },
      { name: 'Prometheus', level: 85 },
      { name: 'Grafana', level: 85 },
      { name: 'Loki/Promtail', level: 80 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-desc">Technologies and tools I use to bring ideas to production.</p>
        </div>

        <div className="skills-layout reveal" style={{ transitionDelay: '0.2s' }}>
          {/* Category Chips */}
          <div className="skill-chips">
            {skillCategories.map((cat, index) => (
              <button
                key={index}
                className={`skill-chip ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
              >
                <span className="chip-icon">{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </div>

          {/* Skill Bars */}
          <div className="skill-bars glass-card" key={activeCategory}>
            <h3 className="skill-bars-title">
              <span>{skillCategories[activeCategory].icon}</span>
              {skillCategories[activeCategory].title}
            </h3>
            <div className="bars-list">
              {skillCategories[activeCategory].skills.map((skill, idx) => (
                <div key={idx} className="bar-item" style={{ animationDelay: `${idx * 0.08}s` }}>
                  <div className="bar-header">
                    <span className="bar-name mono">{skill.name}</span>
                    <span className="bar-percent mono">{skill.level}%</span>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{ width: `${skill.level}%`, animationDelay: `${idx * 0.1}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Cloud */}
        <div className="skill-cloud reveal" style={{ transitionDelay: '0.4s' }}>
          {['REST APIs', 'Microservices', 'DSA', 'OOP', 'Multithreading', 'Prompt Engineering', 
            'Semantic Search', 'CI/CD', 'Vercel', 'Render', 'Google Colab', 'VS Code',
            'TailwindCSS', 'Streamlit'].map((skill, idx) => (
            <span key={idx} className="cloud-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
