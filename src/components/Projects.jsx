import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ExternalLink, Star, Zap, Brain, Smartphone, TrendingUp, Code2, Leaf } from 'lucide-react';
import { GithubIcon, AndroidIcon, LinkedinIcon } from './Icons';

const PROJECTS = [
  {
    id: 'qrforge',
    featured: true,
    title: 'QRForge',
    subtitle: 'Universal QR Generator',
    description: 'A modern QR generation platform supporting URL, WhatsApp, Email, Phone, Text and WiFi QR generation with instant creation, high-resolution downloads, and a fully responsive design.',
    tech: ['React', 'Vite', 'JavaScript', 'QR Library'],
    icon: Code2,
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.07)',
    features: ['QR Code Generation', 'High-Res Downloads', '6 QR Formats', 'Mobile Responsive'],
    github: 'https://github.com/nishhshh-01/digital-heroes-qrforge',
    demo: 'https://nishtha-qrforge.vercel.app/',
    category: 'web',
  },
  {
    id: 'spendpilot',
    featured: false,
    title: 'SpendPilot',
    subtitle: 'AI Cost Optimization Platform',
    description: 'Full-stack SaaS platform that analyzes AI subscription spending across multiple AI tools and generates personalized cost optimization recommendations using data-driven insights.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    icon: TrendingUp,
    color: '#059669',
    bg: 'rgba(5,150,105,0.07)',
    features: ['AI Cost Analysis', 'Personalized Reports', 'Multi-tool Tracking', 'SaaS Dashboard'],
    github: 'https://github.com/nishhshh-01/spendpilot',
    demo: 'https://spendpilot-delta.vercel.app/',
    category: 'web',
  },
  {
    id: 'rag-assistant',
    featured: false,
    title: 'Private RAG AI Assistant',
    subtitle: 'Document Intelligence Platform',
    description: 'Retrieval-Augmented Generation system enabling intelligent conversations over uploaded documents using semantic search, vector embeddings, and Llama-3 for context-aware responses.',
    tech: ['Python', 'Llama-3', 'Next.js', 'Supabase pgvector'],
    icon: Brain,
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.07)',
    features: ['RAG Architecture', 'Semantic Search', 'Vector Embeddings', 'LLM Integration'],
    github: 'https://github.com/nishhshh-01/Zero-Cost-Private-RAG-System',
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7436280611583193088/',
    demo: null,
    category: 'ai',
  },
  {
    id: 'saabi',
    featured: false,
    title: 'SAABI',
    subtitle: 'Smart AI for Animal Breed Identification',
    description: 'AI-powered livestock breed identification mobile application capable of identifying 30+ breeds using optimized deep learning models deployed on-device with TensorFlow Lite.',
    tech: ['React Native', 'TensorFlow Lite', 'Expo', 'Python'],
    icon: Smartphone,
    color: '#d97706',
    bg: 'rgba(217,119,6,0.07)',
    features: ['30+ Breed Detection', 'On-Device AI', 'Mobile-First', 'Real-Time Classification'],
    github: 'https://github.com/nishthaagupta',
    demo: null,
    category: 'ai',
  },
  {
    id: 'expense-tracker',
    featured: false,
    title: 'Expense Tracker',
    subtitle: 'Personal Finance App',
    description: 'Cross-platform mobile app for managing personal finances with real-time expense tracking, categorization, budget management, and cloud sync powered by Supabase.',
    tech: ['React Native', 'Supabase', 'Expo'],
    icon: Zap,
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.07)',
    features: ['Real-Time Tracking', 'Budget Categories', 'Cloud Sync', 'Analytics'],
    github: 'https://github.com/nishhshh-01/Expensefy-Main-Repo',
    apk: 'https://github.com/nishhshh-01/expensefy-apk/releases/tag/v1.0.0',
    demo: null,
    category: 'mobile',
  },
  {
    id: 'herbify',
    featured: false,
    title: 'Herbify',
    subtitle: 'Herbal Plant Identifier',
    description: 'React Native mobile application for identifying and learning about medicinal herbs and plants, with a MongoDB-backed knowledge base and offline capability.',
    tech: ['React Native', 'MongoDB', 'Expo'],
    icon: Leaf,
    color: '#16a34a',
    bg: 'rgba(22,163,74,0.07)',
    features: ['Plant Identification', 'Herbal Knowledge', 'Offline Mode', 'MongoDB Backend'],
    github: 'https://github.com/nishhshh-01/herbify',
    apk: 'https://github.com/nishhshh-01/herbify-apk/releases/tag/v1.0.0',
    demo: null,
    category: 'mobile',
  },
];

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI / ML' },
];

function FeaturedCard({ project }) {
  const Icon = project.icon;

  return (
    <AnimatedSection direction="up" delay={0}>
      <div
        style={{
          padding: 'clamp(28px, 4vw, 44px)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
          marginBottom: '16px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${project.color}40`;
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = `0 16px 48px ${project.color}15`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border)';
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Featured badge */}
        <div style={{
          position: 'absolute', top: '20px', right: '20px',
          display: 'inline-flex', alignItems: 'center', gap: '5px',
          padding: '4px 10px', borderRadius: '100px',
          background: 'rgba(37,99,235,0.1)',
          color: 'var(--color-accent-blue)',
          fontSize: '11px', fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          <Star size={10} fill="currentColor" />
          Featured
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'center',
        }}>
          {/* Left content */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{
                width: '52px', height: '52px',
                borderRadius: '14px',
                background: project.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={24} color={project.color} />
              </div>
              <div>
                <h3 style={{
                  fontSize: 'clamp(20px, 3vw, 26px)',
                  fontWeight: 800, letterSpacing: '-0.8px',
                  color: 'var(--color-text-primary)', lineHeight: 1.1,
                }}>
                  {project.title}
                </h3>
                <div style={{ fontSize: '13.5px', color: 'var(--color-text-tertiary)', fontWeight: 500 }}>
                  {project.subtitle}
                </div>
              </div>
            </div>

            <p style={{
              fontSize: 'clamp(14px, 1.8vw, 15.5px)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginBottom: '24px',
            }}>
              {project.description}
            </p>

            {/* Tech stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {project.tech.map((t) => (
                <span key={t} style={{
                  padding: '5px 12px', borderRadius: '6px',
                  fontSize: '12px', fontWeight: 600,
                  background: 'var(--color-surface-2)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                  fontFamily: 'monospace',
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  padding: '10px 20px', borderRadius: '8px',
                  fontSize: '13.5px', fontWeight: 600,
                  background: 'var(--color-text-primary)',
                  color: 'var(--color-bg)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
              >
                <GithubIcon size={15} />
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    padding: '10px 20px', borderRadius: '8px',
                    fontSize: '13.5px', fontWeight: 600,
                    background: 'var(--gradient-accent)',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: `0 4px 12px ${project.color}30`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 8px 20px ${project.color}40`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `0 4px 12px ${project.color}30`; }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Right - Feature list */}
          <div style={{
            background: 'var(--color-bg)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            padding: '24px',
          }}>
            <div style={{
              fontSize: '11px', fontWeight: 700,
              color: 'var(--color-text-tertiary)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              Key Features
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {project.features.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: 'var(--gradient-accent)', flexShrink: 0,
                  }} aria-hidden="true" />
                  <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <AnimatedSection delay={index * 80} direction="up">
      <div
        style={{
          padding: '24px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          height: '100%',
          display: 'flex', flexDirection: 'column',
          transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${project.color}40`;
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = `0 12px 32px ${project.color}12`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border)';
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Icon + Title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
          <div style={{
            width: '44px', height: '44px',
            borderRadius: '10px',
            background: project.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Icon size={20} color={project.color} />
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '32px', height: '32px',
              borderRadius: '8px',
              color: 'var(--color-text-tertiary)',
              border: '1px solid var(--color-border)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'var(--color-text-primary)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-tertiary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
          >
            <GithubIcon size={14} />
          </a>
        </div>

        <h3 style={{
          fontSize: '16px', fontWeight: 700,
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.3px', marginBottom: '4px',
        }}>
          {project.title}
        </h3>
        <div style={{ fontSize: '12.5px', color: project.color, fontWeight: 600, marginBottom: '10px' }}>
          {project.subtitle}
        </div>

        <p style={{
          fontSize: '13.5px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.65,
          marginBottom: '16px',
          flexGrow: 1,
        }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: (project.apk || project.linkedin) ? '16px' : '0' }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: '3px 10px', borderRadius: '5px',
              fontSize: '11px', fontWeight: 600,
              background: 'var(--color-surface-2)',
              color: 'var(--color-text-tertiary)',
              border: '1px solid var(--color-border)',
              fontFamily: 'monospace',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Action row: demo, LinkedIn, APK */}
        {(project.apk || project.linkedin || project.demo) && (
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '4px' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '7px 14px',
                borderRadius: '8px',
                fontSize: '12.5px', fontWeight: 600,
                background: 'var(--color-surface-2)',
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
                e.currentTarget.style.borderColor = 'var(--color-text-primary)';
                e.currentTarget.style.background = 'var(--color-surface)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-secondary)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.background = 'var(--color-surface-2)';
              }}
            >
              <GithubIcon size={13} />
              GitHub
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '12.5px', fontWeight: 600,
                  background: 'var(--gradient-accent)',
                  color: '#fff',
                  border: 'none',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(37,99,235,0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,99,235,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(37,99,235,0.2)';
                }}
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}

            {project.linkedin && (
              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on LinkedIn`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '12.5px', fontWeight: 600,
                  background: 'rgba(10,102,194,0.07)',
                  color: '#0a66c2',
                  border: '1px solid rgba(10,102,194,0.22)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(10,102,194,0.13)';
                  e.currentTarget.style.borderColor = 'rgba(10,102,194,0.4)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(10,102,194,0.07)';
                  e.currentTarget.style.borderColor = 'rgba(10,102,194,0.22)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <LinkedinIcon size={13} color="#0a66c2" />
                LinkedIn
              </a>
            )}

            {project.apk && (
              <a
                href={project.apk}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Download ${project.title} APK`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '12.5px', fontWeight: 600,
                  background: 'rgba(34,197,94,0.08)',
                  color: '#16a34a',
                  border: '1px solid rgba(34,197,94,0.25)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(34,197,94,0.14)';
                  e.currentTarget.style.borderColor = 'rgba(34,197,94,0.45)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(34,197,94,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <AndroidIcon size={14} color="#16a34a" />
                Download APK
              </a>
            )}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const featuredProject = PROJECTS.find(p => p.featured);
  const filteredProjects = PROJECTS.filter(p =>
    !p.featured && (activeFilter === 'all' || p.category === activeFilter)
  );

  return (
    <section
      id="projects"
      style={{
        padding: 'clamp(80px, 12vw, 120px) max(24px, calc((100vw - 1200px) / 2))',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
      aria-label="Projects section"
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
            Portfolio
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            color: 'var(--color-text-primary)',
            lineHeight: 1.1,
            marginBottom: '14px',
          }}>
            Selected Projects
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            color: 'var(--color-text-secondary)',
            maxWidth: '520px',
            lineHeight: 1.7,
          }}>
            A curated selection of projects spanning mobile applications, full-stack platforms, and AI-powered solutions.
          </p>
        </div>
      </AnimatedSection>

      {/* Featured Project */}
      {featuredProject && <FeaturedCard project={featuredProject} />}

      {/* Filter Tabs */}
      <AnimatedSection delay={100}>
        <div style={{
          display: 'flex', gap: '8px', flexWrap: 'wrap',
          margin: 'clamp(32px, 4vw, 48px) 0 24px',
        }} role="tablist" aria-label="Project category filter">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeFilter === id}
              onClick={() => setActiveFilter(id)}
              style={{
                padding: '8px 18px',
                borderRadius: '100px',
                border: '1px solid',
                fontSize: '13px', fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderColor: activeFilter === id ? 'var(--color-accent-blue)' : 'var(--color-border)',
                background: activeFilter === id ? 'var(--color-accent-blue-light)' : 'var(--color-surface)',
                color: activeFilter === id ? 'var(--color-accent-blue)' : 'var(--color-text-secondary)',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== id) {
                  e.currentTarget.style.borderColor = 'var(--color-text-tertiary)';
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== id) {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
        gap: '16px',
      }}>
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div style={{
          textAlign: 'center', padding: '60px 20px',
          color: 'var(--color-text-tertiary)', fontSize: '15px',
        }}>
          No projects in this category yet.
        </div>
      )}
    </section>
  );
}
