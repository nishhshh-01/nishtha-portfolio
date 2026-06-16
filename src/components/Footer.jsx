import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL = [
  { icon: GithubIcon, href: 'https://github.com/nishhshh-01', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/nishtha-gupta-895b4a335/?skipRedirect=true', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:nishthaagupta01@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        padding: 'clamp(48px, 6vw, 72px) max(24px, calc((100vw - 1200px) / 2)) clamp(24px, 4vw, 40px)',
      }}
      aria-label="Site footer"
    >
      {/* Top section */}
      <div style={{
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'space-between', alignItems: 'flex-start',
        gap: '40px', marginBottom: '48px',
      }}>
        {/* Brand */}
        <div style={{ maxWidth: '320px' }}>
          <div style={{
            fontSize: '20px', fontWeight: 800,
            letterSpacing: '-0.7px',
            background: 'var(--gradient-accent)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '12px',
          }}>
            Nishtha Gupta
          </div>
          <p style={{
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
          }}>
            Building scalable mobile and web applications through clean engineering and modern technologies.
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <div style={{
            fontSize: '11px', fontWeight: 700,
            color: 'var(--color-text-tertiary)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Navigation
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {NAV.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(href); }}
                  style={{
                    fontSize: '14px', fontWeight: 500,
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.target.style.color = 'var(--color-accent-blue)'; }}
                  onMouseLeave={(e) => { e.target.style.color = 'var(--color-text-secondary)'; }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <div>
          <div style={{
            fontSize: '11px', fontWeight: 700,
            color: 'var(--color-text-tertiary)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Connect
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  fontSize: '14px', fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent-blue)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '24px' }} aria-hidden="true" />

      {/* Bottom bar */}
      <div style={{
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'space-between', alignItems: 'center', gap: '12px',
      }}>
        <div style={{
          fontSize: '13px', color: 'var(--color-text-tertiary)',
          display: 'flex', alignItems: 'center', gap: '5px',
        }}>
          © {new Date().getFullYear()} Nishtha Gupta · Made with
          <Heart size={12} fill="#ef4444" color="#ef4444" aria-label="love" />
          in India
        </div>
        <div style={{ fontSize: '13px', color: 'var(--color-text-tertiary)' }}>
          Built with React &amp; Vite
        </div>
      </div>
    </footer>
  );
}
