import { AnimatedSection } from './AnimatedSection';
import { Code2, Database, Smartphone, Server, Brain, Wrench } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code2,
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.07)',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    id: 'mobile',
    label: 'Mobile Dev',
    icon: Smartphone,
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.07)',
    skills: ['React Native', 'Android Dev', 'Expo', 'Mobile UI', 'API Integration'],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.07)',
    skills: ['ASP.NET Core', 'Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Authorization'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: Database,
    color: '#059669',
    bg: 'rgba(5,150,105,0.07)',
    skills: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Supabase'],
  },
  {
    id: 'ai-ml',
    label: 'AI & ML',
    icon: Brain,
    color: '#d97706',
    bg: 'rgba(217,119,6,0.07)',
    skills: ['LLM Integration', 'RAG Architecture', 'Semantic Search', 'Vector Databases', 'TensorFlow', 'TensorFlow Lite'],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: Wrench,
    color: '#dc2626',
    bg: 'rgba(220,38,38,0.07)',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva', 'Antigravity', 'Cursor'],
  },
];

function SkillTag({ skill }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '5px 12px',
        borderRadius: '100px',
        fontSize: '12.5px',
        fontWeight: 500,
        background: 'var(--color-surface-2)',
        color: 'var(--color-text-secondary)',
        border: '1px solid var(--color-border)',
        transition: 'all 0.2s ease',
        cursor: 'default',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--color-accent-blue-light)';
        e.currentTarget.style.color = 'var(--color-accent-blue)';
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--color-surface-2)';
        e.currentTarget.style.color = 'var(--color-text-secondary)';
        e.currentTarget.style.borderColor = 'var(--color-border)';
      }}
    >
      {skill}
    </span>
  );
}

function CategoryCard({ category, index }) {
  const Icon = category.icon;

  return (
    <AnimatedSection delay={index * 80} direction="up">
      <div
        style={{
          padding: '28px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
          height: '100%',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = category.color + '40';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = `0 12px 32px ${category.color}15`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border)';
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{
            width: '40px', height: '40px',
            borderRadius: '10px',
            background: category.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Icon size={18} color={category.color} />
          </div>
          <h3 style={{
            fontSize: '15px', fontWeight: 700,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.3px',
          }}>
            {category.label}
          </h3>
        </div>

        {/* Skill Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {category.skills.map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(80px, 12vw, 120px) max(24px, calc((100vw - 1200px) / 2))',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
      aria-label="Skills section"
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
            Technical Stack
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            color: 'var(--color-text-primary)',
            lineHeight: 1.1,
            marginBottom: '14px',
          }}>
            Skills &amp; Technologies
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            color: 'var(--color-text-secondary)',
            maxWidth: '520px',
            lineHeight: 1.7,
          }}>
            A comprehensive toolkit spanning mobile, web, backend, and AI development.
          </p>
        </div>
      </AnimatedSection>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
        gap: '16px',
      }}>
        {SKILL_CATEGORIES.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
