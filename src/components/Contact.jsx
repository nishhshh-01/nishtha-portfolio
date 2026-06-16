import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Mail, Download, MapPin, Send, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const EMAIL = 'nishthaagupta01@gmail.com';
const GITHUB = 'https://github.com/nishhshh-01';
const LINKEDIN = 'https://www.linkedin.com/in/nishtha-gupta-895b4a335/?skipRedirect=true';

function ContactLink({ href, icon: Icon, label, sublabel, color, bg }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        padding: '20px 24px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        textDecoration: 'none',
        transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}40`;
        e.currentTarget.style.transform = 'translateX(4px)';
        e.currentTarget.style.boxShadow = `0 8px 24px ${color}12`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        width: '44px', height: '44px',
        borderRadius: '11px',
        background: bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={20} color={color} />
      </div>
      <div>
        <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--color-text-primary)' }}>{label}</div>
        <div style={{ fontSize: '13px', color: 'var(--color-text-tertiary)', marginTop: '2px' }}>{sublabel}</div>
      </div>
    </a>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Compose a mailto link as fallback (no backend required)
    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(
      `Hi Nishtha,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}`
    )}`;
    window.location.href = mailtoUrl;
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 500);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid var(--color-border)',
    background: 'var(--color-bg)',
    color: 'var(--color-text-primary)',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    resize: 'none',
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }} noValidate>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="form-grid">
        <div>
          <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '6px' }}>
            Name <span aria-hidden="true" style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent-blue)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '6px' }}>
            Email <span aria-hidden="true" style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="your@email.com"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent-blue)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; }}
          />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '6px' }}>
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="What's this about?"
          value={form.subject}
          onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent-blue)'; }}
          onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; }}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '6px' }}>
          Message <span aria-hidden="true" style={{ color: '#ef4444' }}>*</span>
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder="Tell me about your project, opportunity, or just say hello..."
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent-blue)'; }}
          onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          padding: '13px 28px',
          borderRadius: '10px',
          border: 'none',
          background: status === 'success' ? '#22c55e' : 'var(--gradient-accent)',
          color: '#fff',
          fontSize: '14.5px', fontWeight: 600,
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          transition: 'all 0.25s ease',
          boxShadow: '0 4px 16px rgba(37,99,235,0.25)',
          opacity: status === 'sending' ? 0.7 : 1,
        }}
        onMouseEnter={(e) => {
          if (status === 'idle') {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.35)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.25)';
        }}
      >
        {status === 'success' ? (
          <><Check size={16} /> Message sent!</>
        ) : (
          <><Send size={15} /> {status === 'sending' ? 'Opening mail...' : 'Send Message'}</>
        )}
      </button>

      <style>{`
        @media (max-width: 560px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(80px, 12vw, 120px) max(24px, calc((100vw - 1200px) / 2))',
        background: 'var(--color-bg)',
      }}
      aria-label="Contact section"
    >
      {/* Section Header */}
      <AnimatedSection direction="up">
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '4px 12px',
            borderRadius: '100px',
            background: 'var(--color-accent-blue-light)',
            color: 'var(--color-accent-blue)',
            fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Get In Touch
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800, letterSpacing: '-1.5px',
            color: 'var(--color-text-primary)', lineHeight: 1.1,
            marginBottom: '14px',
          }}>
            Let's Work Together
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            color: 'var(--color-text-secondary)',
            maxWidth: '520px', lineHeight: 1.7,
          }}>
            Open to internship opportunities, collaborative projects, and conversations about software engineering. Let's connect!
          </p>
        </div>
      </AnimatedSection>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
        gap: 'clamp(32px, 5vw, 60px)',
        alignItems: 'start',
      }}>
        {/* Left: Contact info */}
        <div>
          <AnimatedSection direction="up">
            {/* Email copy box */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px 20px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              marginBottom: '16px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--color-accent-blue)" />
                <span style={{
                  fontSize: '14px', fontWeight: 500,
                  color: 'var(--color-text-primary)',
                  wordBreak: 'break-all',
                }}>
                  {EMAIL}
                </span>
              </div>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '34px', height: '34px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface-2)',
                  cursor: 'pointer',
                  color: copied ? '#22c55e' : 'var(--color-text-secondary)',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                  marginLeft: '8px',
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              <ContactLink
                href={`mailto:${EMAIL}`}
                icon={Mail}
                label="Email"
                sublabel="nishthaagupta01@gmail.com"
                color="#2563eb"
                bg="rgba(37,99,235,0.08)"
              />
              <ContactLink
                href={GITHUB}
                icon={GithubIcon}
                label="GitHub"
                sublabel="@nishhshh-01"
                color="#18181b"
                bg="rgba(24,24,27,0.07)"
              />
              <ContactLink
                href={LINKEDIN}
                icon={LinkedinIcon}
                label="LinkedIn"
                sublabel="Nishtha Gupta"
                color="#0a66c2"
                bg="rgba(10,102,194,0.08)"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <a
              href="/resume.pdf"
              download
              id="contact-resume-download"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px',
                borderRadius: '10px',
                fontSize: '14px', fontWeight: 600,
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                border: '1.5px solid var(--color-border)',
                transition: 'all 0.2s ease',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <Download size={15} />
              Download Resume
            </a>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              marginTop: '20px',
              color: 'var(--color-text-tertiary)', fontSize: '13px',
            }}>
              <MapPin size={13} />
              Bareilly, Uttar Pradesh, India
            </div>
          </AnimatedSection>
        </div>

        {/* Right: Contact form */}
        <AnimatedSection direction="left" delay={150}>
          <div style={{
            padding: 'clamp(24px, 4vw, 36px)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
            background: 'var(--color-surface)',
          }}>
            <h3 style={{
              fontSize: '18px', fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: '8px',
              letterSpacing: '-0.4px',
            }}>
              Send a message
            </h3>
            <p style={{
              fontSize: '13.5px', color: 'var(--color-text-secondary)',
              marginBottom: '24px', lineHeight: 1.6,
            }}>
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
