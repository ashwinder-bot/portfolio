import React from 'react';
import { FaServer, FaBrain, FaCode, FaGraduationCap, FaEye, FaRocket } from 'react-icons/fa';
import './About.css';

const aboutCards = [
  {
    icon: <FaServer />,
    title: 'Backend & APIs',
    desc: 'FastAPI · Node.js · Express · Microservices · REST',
    color: '#00ffd5',
  },
  {
    icon: <FaBrain />,
    title: 'AI & ML',
    desc: 'RAG Pipelines · OpenAI · ChromaDB · XGBoost · PyTorch',
    color: '#8b5cf6',
  },
  {
    icon: <FaEye />,
    title: 'Computer Vision',
    desc: 'YOLOv8 · SAM · OpenCV · CNN · Object Detection',
    color: '#3b82f6',
  },
  {
    icon: <FaCode />,
    title: 'Full Stack',
    desc: 'React · Next.js · TypeScript · PostgreSQL · MongoDB',
    color: '#ec4899',
  },
  {
    icon: <FaRocket />,
    title: 'DevOps & Infra',
    desc: 'Docker · Prometheus · Grafana · Loki · CI/CD',
    color: '#f97316',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Education',
    desc: 'Bennett University · B.Tech CSE · CGPA 8.46',
    color: '#10b981',
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">About</p>
          <h2 className="section-title">The Mind Behind the Code</h2>
        </div>

        <div className="about-layout">
          <div className="about-text reveal">
            <div className="about-terminal">
              <div className="about-terminal-bar mono">
                <span className="about-terminal-dot"></span>
                ~/ashwinder/README.md
              </div>
              <div className="about-terminal-body">
                <p>
                  I'm a software engineer who operates at the intersection of{' '}
                  <span className="highlight">backend architecture</span> and{' '}
                  <span className="highlight">artificial intelligence</span>.
                  I don't chase trends — I build systems that <em>endure</em>.
                </p>
                <p>
                  Whether it's shipping a RAG pipeline that dissects 100+ tender documents in seconds,
                  engineering real-time carpooling backends with sub-300ms latency,
                  or training computer vision models that protect workers on industrial sites
                  — I consistently deliver <span className="highlight">software that matters</span>.
                </p>
                <p>
                  My philosophy is simple: understand the problem deeply,
                  architect for scale, and execute with precision. Every line of code
                  I write is production-bound.
                </p>
              </div>
            </div>
          </div>

          <div className="about-cards">
            {aboutCards.map((card, idx) => (
              <div
                key={idx}
                className="about-card glass-card reveal"
                style={{ transitionDelay: `${idx * 0.08}s`, '--card-accent': card.color }}
              >
                <div className="about-card-icon" style={{ color: card.color }}>{card.icon}</div>
                <h4>{card.title}</h4>
                <p className="mono">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
