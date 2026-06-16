import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Download, Mail, MapPin, Briefcase } from 'lucide-react';

const STATS = [
  { value: '6+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies' },
  { value: '1', label: 'Professional Internship' },
  { value: '100%', label: 'Responsive Apps' },
];

function TypewriterText({ texts, speed = 60, pause = 2000 }) {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayed(texts[0]);
      return;
    }

    const current = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, speed);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, speed / 2);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex(i => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span style={{ color: 'var(--color-accent-blue)' }}>
      {displayed}
      <span style={{
        display: 'inline-block', width: '2px', height: '1em',
        background: 'var(--color-accent-blue)',
        verticalAlign: 'text-bottom', marginLeft: '2px',
        animation: 'blink 1s step-end infinite',
      }} aria-hidden="true" />
    </span>
  );
}

function StatCard({ value, label, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    el.style.opacity = prefersReducedMotion ? '1' : '0';
    el.style.transform = prefersReducedMotion ? 'none' : 'translateY(20px)';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'none';
            setVisible(true);
          }, index * 100);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        textAlign: 'center',
        padding: '20px 24px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        transition: 'all 0.2s ease',
        cursor: 'default',
        minWidth: '110px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
        e.currentTarget.style.background = 'var(--color-accent-blue-light)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.background = 'var(--color-surface)';
        e.currentTarget.style.transform = 'none';
      }}
    >
      <div style={{
        fontSize: 'clamp(22px, 4vw, 28px)',
        fontWeight: 800,
        background: 'var(--gradient-accent)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '-1px',
        lineHeight: 1,
        marginBottom: '6px',
      }}>
        {value}
      </div>
      <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.style.opacity = '1';
      return;
    }
    el.style.opacity = '0';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease';
      el.style.opacity = '1';
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(100px, 15vh, 160px) max(24px, calc((100vw - 1200px) / 2)) clamp(60px, 10vh, 100px)',
        background: 'var(--gradient-hero)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Hero section"
    >
      {/* Background grid */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(var(--color-border-subtle) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border-subtle) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          mask: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMask: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          opacity: 0.7,
        }}
        aria-hidden="true"
      />

      {/* Gradient orbs */}
      <div style={{
        position: 'absolute', top: '15%', right: '10%',
        width: 'min(400px, 40vw)', height: 'min(400px, 40vw)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} aria-hidden="true" />
      <div style={{
        position: 'absolute', bottom: '20%', left: '5%',
        width: 'min(300px, 30vw)', height: 'min(300px, 30vw)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', width: '100%', textAlign: 'center' }}>

        {/* Availability badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 14px',
          borderRadius: '100px',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          fontSize: '12.5px',
          fontWeight: 500,
          color: 'var(--color-text-secondary)',
          marginBottom: '32px',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#22c55e',
            boxShadow: '0 0 0 2px rgba(34,197,94,0.2)',
            animation: 'pulse 2s infinite',
          }} aria-hidden="true" />
          <Briefcase size={12} />
          Android App Developer Intern @ Eccura Technologies
        </div>

        {/* Main heading */}
        <h1 style={{
          fontSize: 'clamp(36px, 7vw, 76px)',
          fontWeight: 900,
          letterSpacing: '-2px',
          lineHeight: 1.05,
          color: 'var(--color-text-primary)',
          marginBottom: '16px',
        }}>
          Hi, I'm{' '}
          <span style={{
            background: 'var(--gradient-accent)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Nishtha Gupta
          </span>
        </h1>

        {/* Typewriter subheading */}
        <div style={{
          fontSize: 'clamp(16px, 2.5vw, 22px)',
          fontWeight: 500,
          marginBottom: '20px',
          minHeight: '2em',
          color: 'var(--color-text-primary)',
        }}>
          <TypewriterText
            texts={[
              'Mobile App Developer',
              'Full-Stack Engineer',
              'AI Solutions Builder',
              'React Native Developer',
            ]}
            speed={65}
            pause={2200}
          />
        </div>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(14px, 2vw, 17px)',
          color: 'var(--color-text-secondary)',
          maxWidth: '660px',
          margin: '0 auto 16px',
          lineHeight: 1.7,
          fontWeight: 400,
        }}>
          Building Mobile Applications, Full-Stack Platforms, and AI-Powered Solutions using React Native, ASP.NET Core, Next.js, SQL Server, and Modern Web Technologies.
        </p>

        {/* Location */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '6px', color: 'var(--color-text-tertiary)',
          fontSize: '13.5px', marginBottom: '40px',
        }}>
          <MapPin size={14} />
          Bareilly, Uttar Pradesh, India
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          gap: '12px', justifyContent: 'center',
          marginBottom: '64px',
        }}>
          <a
            href="#projects"
            id="hero-view-projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              padding: '13px 28px',
              borderRadius: '10px',
              fontSize: '14.5px',
              fontWeight: 600,
              background: 'var(--gradient-accent)',
              color: '#fff',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
              transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.3)';
            }}
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            id="hero-download-resume"
            download
            style={{
              padding: '13px 28px',
              borderRadius: '10px',
              fontSize: '14.5px',
              fontWeight: 600,
              background: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              textDecoration: 'none',
              border: '1.5px solid var(--color-border)',
              transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              boxShadow: 'var(--shadow-sm)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            <Download size={15} />
            Download Resume
          </a>

          <a
            href="#contact"
            id="hero-contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              padding: '13px 28px',
              borderRadius: '10px',
              fontSize: '14.5px',
              fontWeight: 600,
              background: 'transparent',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              border: '1.5px solid var(--color-border)',
              transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-text-primary)';
              e.currentTarget.style.background = 'var(--color-surface)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-secondary)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <Mail size={15} />
            Contact Me
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          gap: '12px', justifyContent: 'center',
        }}>
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        color: 'var(--color-text-tertiary)', fontSize: '11px', fontWeight: 500,
        letterSpacing: '0.05em', textTransform: 'uppercase',
        animation: 'bounce 2s infinite',
      }}>
        <span>Scroll</span>
        <ArrowDown size={14} />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 2px rgba(34,197,94,0.2); }
          50% { box-shadow: 0 0 0 6px rgba(34,197,94,0.0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
