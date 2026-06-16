import { AnimatedSection } from './AnimatedSection';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const RESPONSIBILITIES = [
  'Developing cross-platform mobile applications using React Native',
  'Building reusable UI components and implementing pixel-perfect designs',
  'Integrating REST APIs and backend services with frontend applications',
  'Working with ASP.NET Core and SQL Server based systems',
  'Testing, debugging and optimizing application performance',
  'Collaborating on production software solutions within agile workflows',
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: 'clamp(80px, 12vw, 120px) max(24px, calc((100vw - 1200px) / 2))',
        background: 'var(--color-bg)',
      }}
      aria-label="Experience section"
    >
      {/* Section Header */}
      <AnimatedSection direction="up">
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
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
            Work Experience
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            color: 'var(--color-text-primary)',
            lineHeight: 1.1,
            marginBottom: '14px',
          }}>
            Professional Experience
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            color: 'var(--color-text-secondary)',
            maxWidth: '520px',
            lineHeight: 1.7,
          }}>
            Hands-on experience building production software in a professional engineering environment.
          </p>
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <div style={{ maxWidth: '800px' }}>
        <AnimatedSection delay={100} direction="up">
          <div
            style={{
              padding: 'clamp(24px, 4vw, 36px)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(124,58,237,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Top accent bar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
              background: 'var(--gradient-accent)',
            }} aria-hidden="true" />

            {/* Header */}
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              justifyContent: 'space-between', alignItems: 'flex-start',
              gap: '16px', marginBottom: '24px',
            }}>
              <div>
                {/* Company + Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div style={{
                    width: '48px', height: '48px',
                    borderRadius: '12px',
                    background: 'var(--gradient-accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    color: '#fff',
                  }}>
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(17px, 2.5vw, 21px)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      letterSpacing: '-0.5px',
                      lineHeight: 1.2,
                    }}>
                      Android App Developer Intern
                    </h3>
                    <div style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      background: 'var(--gradient-accent)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      Eccura Technologies Pvt. Ltd.
                    </div>
                  </div>
                </div>
              </div>

              {/* Meta badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '5px 12px', borderRadius: '100px',
                  background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                  color: '#16a34a', fontSize: '12px', fontWeight: 600,
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: '#22c55e',
                  }} aria-hidden="true" />
                  Currently Active
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  color: 'var(--color-text-tertiary)', fontSize: '13px',
                }}>
                  <Calendar size={13} />
                  June 2026 - Present
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  color: 'var(--color-text-tertiary)', fontSize: '13px',
                }}>
                  <MapPin size={13} />
                  India
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 style={{
                fontSize: '13px', fontWeight: 600,
                color: 'var(--color-text-tertiary)',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                Key Responsibilities
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
                {RESPONSIBILITIES.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle2
                      size={16}
                      style={{
                        flexShrink: 0, marginTop: '2px',
                        color: 'var(--color-accent-blue)',
                      }}
                    />
                    <span style={{
                      fontSize: 'clamp(13.5px, 1.8vw, 15px)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['React Native', 'ASP.NET Core', 'SQL Server', 'REST APIs', 'Mobile Dev'].map((tag) => (
                <span key={tag} style={{
                  padding: '4px 12px', borderRadius: '100px',
                  fontSize: '12px', fontWeight: 500,
                  background: 'var(--gradient-accent-soft)',
                  color: 'var(--color-accent-blue)',
                  border: '1px solid rgba(37,99,235,0.15)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
