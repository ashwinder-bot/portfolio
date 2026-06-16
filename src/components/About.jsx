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
    title: 'DevOps',
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
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about-layout">
          <div className="about-text reveal">
            <div className="about-terminal">
              <div className="about-terminal-bar mono">
                <span className="about-terminal-dot"></span>
                ~/ashwinder/about.md
              </div>
              <div className="about-terminal-body">
                <p>
                  I'm a software engineer who lives at the intersection of{' '}
                  <span className="highlight">backend systems</span> and{' '}
                  <span className="highlight">artificial intelligence</span>.
                  I don't just write code — I architect solutions that handle real-world scale.
                </p>
                <p>
                  From shipping RAG pipelines processing 100+ tender documents at Cognecto,
                  to building real-time carpooling backends, to training computer vision models
                  for safety compliance — I've consistently delivered{' '}
                  <span className="highlight">production-grade systems</span> across startups and internships.
                </p>
                <p>
                  My toolkit spans the full stack: Python/FastAPI on the backend,
                  React/Next.js on the frontend, Docker for containerization,
                  and Prometheus/Grafana for keeping it all observable.
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
