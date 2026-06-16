import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import './styles/index.css';

function App() {
  useEffect(() => {
    // Scroll reveal observer
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    });

    const setupObserver = () => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        observer.observe(el);
      });
    };

    // Small delay so DOM is painted
    const timer = setTimeout(setupObserver, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider"></div>
        <About />
        <div className="section-divider"></div>
        <Experience />
        <div className="section-divider"></div>
        <Projects />
        <div className="section-divider"></div>
        <Skills />
        <div className="section-divider"></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
