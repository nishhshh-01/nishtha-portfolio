import { useState, useEffect } from 'react';
import { useScrollProgress, useActiveSection } from '../hooks/useInView';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'contact'];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = useScrollProgress();
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress bar */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0, height: '2px', zIndex: 1000,
          background: 'var(--gradient-accent)',
          width: `${progress}%`,
          transition: 'width 0.1s linear',
        }}
        aria-hidden="true"
      />

      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
          height: '60px',
          display: 'flex', alignItems: 'center',
          padding: '0 max(24px, calc((100vw - 1200px) / 2))',
          background: scrolled
            ? (theme === 'dark' ? 'rgba(9,9,11,0.85)' : 'rgba(255,255,255,0.85)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: '-0.5px',
            color: 'var(--color-text-primary)',
            textDecoration: 'none',
            background: 'var(--gradient-accent)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            flexShrink: 0,
          }}
          aria-label="Nishtha Gupta - Home"
        >
          Nishtha Gupta
        </a>

        {/* Desktop Nav */}
        <nav
          style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto', marginRight: '16px' }}
          className="desktop-nav"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '13.5px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--color-accent-blue)' : 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'var(--color-accent-blue-light)' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.color = 'var(--color-text-primary)';
                    e.target.style.background = 'var(--color-surface)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.color = 'var(--color-text-secondary)';
                    e.target.style.background = 'transparent';
                  }
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '8px',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-text-primary)';
              e.currentTarget.style.background = 'var(--color-surface-2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-secondary)';
              e.currentTarget.style.background = 'var(--color-surface)';
            }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Resume Button - desktop */}
          <a
            href="/resume.pdf"
            download
            style={{
              display: 'none',
              padding: '7px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              background: 'var(--gradient-accent)',
              color: '#fff',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(37,99,235,0.25)',
            }}
            className="resume-btn"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.35)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(37,99,235,0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{
              width: '36px', height: '36px',
              display: 'none',
              alignItems: 'center', justifyContent: 'center',
              borderRadius: '8px',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
            }}
            className="mobile-menu-btn"
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 998,
          background: theme === 'dark' ? 'rgba(9,9,11,0.97)' : 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          transition: 'opacity 0.2s ease',
        }}
        aria-hidden={!mobileOpen}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
            style={{
              fontSize: '24px',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              textDecoration: 'none',
              padding: '12px 32px',
              borderRadius: '12px',
              transition: 'all 0.2s ease',
              letterSpacing: '-0.3px',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--color-surface)';
              e.target.style.color = 'var(--color-accent-blue)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'var(--color-text-primary)';
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download
          onClick={() => setMobileOpen(false)}
          style={{
            marginTop: '16px',
            padding: '12px 32px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 600,
            background: 'var(--gradient-accent)',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Download Resume
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .resume-btn { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
