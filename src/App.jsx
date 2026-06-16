import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(t => t === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <a
        href="#about"
        style={{
          position: 'fixed', top: '-100px', left: '50%', transform: 'translateX(-50%)',
          zIndex: 9999,
          padding: '8px 20px', borderRadius: '8px',
          background: 'var(--color-accent-blue)', color: '#fff',
          fontSize: '14px', fontWeight: 600, textDecoration: 'none',
          transition: 'top 0.2s ease',
        }}
        onFocus={(e) => { e.target.style.top = '8px'; }}
        onBlur={(e) => { e.target.style.top = '-100px'; }}
      >
        Skip to main content
      </a>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
