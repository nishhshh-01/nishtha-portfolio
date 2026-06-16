import { AnimatedSection } from './AnimatedSection';
import { GraduationCap, Code2, Cpu, Globe } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: 'Final-Year IT Student',
    desc: 'Pursuing Information Technology with a strong foundation in software engineering principles.',
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.07)',
  },
  {
    icon: Code2,
    title: '6+ Projects Built',
    desc: 'From AI-powered apps to full-stack SaaS platforms across mobile and web.',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.07)',
  },
  {
    icon: Cpu,
    title: 'AI & ML Integration',
    desc: 'Hands-on experience with LLMs, RAG architecture, vector databases, and TensorFlow.',
    color: '#d97706',
    bg: 'rgba(217,119,6,0.07)',
  },
  {
    icon: Globe,
    title: 'Full Stack Proficiency',
    desc: 'React Native, Next.js, ASP.NET Core, Node.js, SQL Server, MongoDB, and more.',
    color: '#059669',
    bg: 'rgba(5,150,105,0.07)',
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(80px, 12vw, 120px) max(24px, calc((100vw - 1200px) / 2))',
        background: 'var(--color-bg)',
      }}
      aria-label="About section"
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
        gap: 'clamp(48px, 8vw, 80px)',
        alignItems: 'start',
      }}>
        {/* Left Content */}
        <div>
          <AnimatedSection direction="up">
            <div style={{ marginBottom: '16px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '4px 12px',
                borderRadius: '100px',
                background: 'var(--color-accent-purple-light)',
                color: 'var(--color-accent-purple)',
                fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                About Me
              </div>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 800,
                letterSpacing: '-1.5px',
                color: 'var(--color-text-primary)',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}>
                Building software that{' '}
                <span style={{
                  background: 'var(--gradient-accent)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  scales
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{
                fontSize: 'clamp(14.5px, 1.8vw, 16px)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.75,
              }}>
                Final-year Information Technology student with experience developing cross-platform mobile applications, full-stack web platforms, and AI-powered software solutions.
              </p>
              <p style={{
                fontSize: 'clamp(14.5px, 1.8vw, 16px)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.75,
              }}>
                Currently working as an <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Android App Developer Intern at Eccura Technologies</strong>, contributing to mobile application development, backend integration, UI implementation, testing, and deployment workflows.
              </p>
              <p style={{
                fontSize: 'clamp(14.5px, 1.8vw, 16px)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.75,
              }}>
                Passionate about Software Engineering, Mobile Development, Full Stack Development, System Design, and building scalable software systems that solve real-world problems.
              </p>
            </div>
          </AnimatedSection>

          {/* Interests tags */}
          <AnimatedSection direction="up" delay={200}>
            <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Software Engineering', 'Mobile Development', 'Full Stack', 'System Design', 'AI Integration', 'Open Source'].map((tag) => (
                <span key={tag} style={{
                  padding: '6px 14px', borderRadius: '100px',
                  fontSize: '12.5px', fontWeight: 500,
                  background: 'var(--color-surface)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-purple)';
                    e.currentTarget.style.color = 'var(--color-accent-purple)';
                    e.currentTarget.style.background = 'var(--color-accent-purple-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                    e.currentTarget.style.background = 'var(--color-surface)';
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Right - Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}>
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={i * 80} direction="up">
                <div
                  style={{
                    padding: '24px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-surface)',
                    transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}40`;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `0 8px 24px ${item.color}12`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '40px', height: '40px',
                    borderRadius: '10px',
                    background: item.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '14px',
                  }}>
                    <Icon size={18} color={item.color} />
                  </div>
                  <h3 style={{
                    fontSize: '14px', fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    marginBottom: '8px', lineHeight: 1.3,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
