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
      { name: 'SQL', level: 88 },
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
      { name: 'PyTorch', level: 82 },
      { name: 'Pandas/NumPy', level: 92 },
    ],
  },
  {
    title: 'Computer Vision',
    icon: '👁',
    skills: [
      { name: 'YOLOv8', level: 88 },
      { name: 'OpenCV', level: 90 },
      { name: 'SAM (Segment Anything)', level: 80 },
      { name: 'CNN Architectures', level: 85 },
      { name: 'Object Detection', level: 88 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'ChromaDB', level: 82 },
      { name: 'Supabase', level: 85 },
      { name: 'SQLite', level: 80 },
    ],
  },
  {
    title: 'DevOps',
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

const otherSkills = [
  'REST APIs', 'Microservices', 'DSA', 'OOP', 'Multithreading',
  'Prompt Engineering', 'Semantic Search', 'CI/CD', 'Vercel', 'Render',
  'Google Colab', 'TailwindCSS', 'Streamlit', 'MLOps', 'DBSCAN',
  'Firebase', 'JWT Auth', 'WebSockets',
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

        <div className="skills-layout reveal" style={{ transitionDelay: '0.15s' }}>
          {/* Category Chips */}
          <div className="skill-chips">
            {skillCategories.map((cat, index) => (
              <button
                key={index}
                className={`skill-chip ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
              >
                <span className="chip-icon">{cat.icon}</span>
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Skill Bars */}
          <div className="skill-panel glass-card" key={activeCategory}>
            <div className="skill-panel-header">
              <span className="skill-panel-icon">{skillCategories[activeCategory].icon}</span>
              <h3>{skillCategories[activeCategory].title}</h3>
            </div>
            <div className="skill-list">
              {skillCategories[activeCategory].skills.map((skill, idx) => (
                <div key={idx} className="skill-item" style={{ animationDelay: `${idx * 0.06}s` }}>
                  <div className="skill-info">
                    <span className="skill-name mono">{skill.name}</span>
                    <span className="skill-level mono">{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%`, animationDelay: `${idx * 0.08}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Cloud */}
        <div className="skill-cloud reveal" style={{ transitionDelay: '0.3s' }}>
          {otherSkills.map((skill, idx) => (
            <span key={idx} className="cloud-tag" style={{ animationDelay: `${idx * 0.03}s` }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
