import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ExternalLink, Star, Zap, Brain, Smartphone, TrendingUp, Code2, Leaf, Globe, ShoppingBag } from 'lucide-react';
import { GithubIcon, AndroidIcon, LinkedinIcon } from './Icons';

/* ─── Google Play SVG icon ────────────────────────────────────────────── */
function GooglePlayIcon({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M3.18 23.76c.39.22.84.26 1.26.1l13.03-7.52-2.87-2.88L3.18 23.76zM.42 1.6A1.84 1.84 0 000 2.77v18.46c0 .43.14.83.42 1.17l.06.06 10.34-10.34v-.24L.48 1.54l-.06.06zM22.45 10.3l-2.78-1.6-3.13 3.13 3.13 3.13 2.8-1.6c.8-.46.8-1.6-.02-2.06zM4.44.14L17.47 7.66l-2.87 2.88L3.18.24A1.5 1.5 0 014.44.14z"/>
    </svg>
  );
}

/* ─── Data ─────────────────────────────────────────────────────────────── */
const PROFESSIONAL_PROJECTS = [
  {
    id: 'joblyt',
    title: 'Joblyt — Android Application',
    subtitle: 'Lead Mobile Developer | React Native, Expo, Native API Integrations',
    category: 'professional',
    color: '#059669',
    bg: 'rgba(5,150,105,0.07)',
    badge: { text: 'Published on Google Play', color: '#059669', bg: 'rgba(5,150,105,0.08)', border: 'rgba(5,150,105,0.2)' },
    description:
      'Engineered, optimized, and successfully shipped an Android application to the Google Play Store using React Native inside a production release cycle. Implemented lazy loading rendering and optimized image viewports to ensure high frame rates and quick response states across low-end mobile devices. Integrated persistent application caching states to keep the mobile runtime functioning smoothly during intermittent cellular connectivity drops.',
    tech: ['React Native', 'Expo', 'Native API Integrations', 'State Management', 'Google Play Store'],
    highlights: [
      'Shipped Android app to Google Play Store inside production release cycle',
      'Lazy loading rendering & optimized image viewports for high frame rates on low-end devices',
      'Persistent caching states for seamless runtime during intermittent connectivity drops',
      'Lead Mobile Developer role overseeing React Native & native API integrations',
    ],
    image: '/joblyt-mockup.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aamni.JobLyt',
    github: null,
  },
  {
    id: 'eccura',
    title: 'Eccura Technologies — Enterprise Workflows & Web Platform',
    subtitle: 'Enterprise Platform / Client Work',
    category: 'professional',
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.07)',
    badge: { text: 'Live Production Platform', color: '#2563eb', bg: 'rgba(37,99,235,0.08)', border: 'rgba(37,99,235,0.2)' },
    description:
      'Developed and maintained cross-platform mobile modules and enterprise workflows. Built reusable UI components and collaborated closely on ASP.NET Core and SQL Server backend server layers to debug, optimize, and test data flow pipeline efficiency for client devices.',
    tech: ['React.js', 'ASP.NET Core', 'MS SQL Server', 'RESTful APIs', 'Enterprise Workflows'],
    highlights: [
      'Enterprise workflow implementation & production deployment',
      'ASP.NET Core & SQL Server backend server layer collaboration',
      'REST API endpoints for authentication & data synchronization',
      'Reusable component architectures and data flow pipeline optimization',
      'Client enterprise platform showcase',
    ],
    image: '/eccura-mockup.png',
    liveUrl: 'https://eccuratech.com/',
    github: null,
  },
];

const PROJECTS = [
  {
    id: 'qrforge',
    featured: true,
    title: 'QRForge',
    subtitle: 'Universal QR Generator (Full-Stack Developer | React, Vite, JavaScript)',
    description: 'Engineered a secure QR processing engine supporting 6 dynamic generation variations (URL, WhatsApp, Email, Phone, Text, WiFi). Created clean component architectures to enable real-time canvas translations and instant local device downloads.',
    tech: ['React.js', 'Vite', 'JavaScript', 'Canvas API', 'State Management'],
    icon: Code2,
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.07)',
    features: [
      'Secure QR Processing Engine (6 Dynamic Variations)',
      'URL, WhatsApp, Email, Phone, Text & WiFi Support',
      'Real-Time Canvas Translations & Processing',
      'Instant Local Device High-Resolution Downloads',
    ],
    github: 'https://github.com/nishhshh-01/digital-heroes-qrforge',
    demo: 'https://nishtha-qrforge.vercel.app/',
    category: 'web',
  },
  {
    id: 'rag-assistant',
    featured: false,
    title: 'Private RAG AI Assistant',
    subtitle: 'Backend & AI Engineer | Next.js, Llama 3, Supabase pgvector',
    description: 'Architected an enterprise document search platform using Next.js and Llama 3 running atop a high-speed vector storage pipeline. Implemented secure contextual semantic search patterns and managed document vector matching mechanisms via Supabase pgvector infrastructure.',
    tech: ['Next.js', 'Llama 3', 'Supabase (pgvector)', 'Vector Pipeline', 'RESTful APIs'],
    icon: Brain,
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.07)',
    features: [
      'Enterprise Document Search Platform',
      'Next.js & Llama 3 LLM Architecture',
      'High-Speed Vector Storage Pipeline',
      'Contextual Semantic Search via Supabase pgvector',
    ],
    github: 'https://github.com/nishhshh-01/Zero-Cost-Private-RAG-System',
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7436280611583193088/',
    demo: null,
    category: 'ai',
  },
  {
    id: 'spendpilot',
    featured: false,
    title: 'SpendPilot',
    subtitle: 'AI Cost Optimization Platform | Next.js & PostgreSQL',
    description: 'Full-stack enterprise financial analytics platform analyzing AI subscription spend, forecasting resource utilization, and generating automated cost optimization recommendations.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'RESTful APIs'],
    icon: TrendingUp,
    color: '#059669',
    bg: 'rgba(5,150,105,0.07)',
    features: [
      'Subscription Spend Analytics',
      'Resource Forecasting Reports',
      'Automated Cost Recommendations',
      'Enterprise SaaS Dashboard',
    ],
    github: 'https://github.com/nishhshh-01/spendpilot',
    demo: 'https://spendpilot-delta.vercel.app/',
    category: 'web',
  },
  {
    id: 'expense-tracker',
    featured: false,
    title: 'Expense Tracker',
    subtitle: 'Personal Finance Mobile App | React Native & Expo',
    description: 'Cross-platform personal finance mobile application built with React Native and Expo, featuring real-time transaction synchronization, persistent offline caching states, and budget management.',
    tech: ['React Native', 'Expo', 'Mobile API Integration', 'Supabase', 'State Management'],
    icon: Zap,
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.07)',
    features: [
      'Real-Time Transaction Sync',
      'Persistent Application Caching',
      'Budget Categorization',
      'Secure Cloud State Management',
    ],
    github: 'https://github.com/nishhshh-01/Expensefy-Main-Repo',
    apk: 'https://github.com/nishhshh-01/expensefy-apk/releases/tag/v1.0.0',
    demo: null,
    category: 'mobile',
  },
  {
    id: 'herbify',
    featured: false,
    title: 'Herbify',
    subtitle: 'Botanical Knowledge App | React Native & Expo',
    description: 'Cross-platform mobile application developed with React Native and Expo, integrating persistent offline caching states and database synchronization for mobile client devices.',
    tech: ['React Native', 'Expo', 'Mobile API Integration', 'State Management'],
    icon: Leaf,
    color: '#16a34a',
    bg: 'rgba(22,163,74,0.07)',
    features: [
      'Offline Caching States',
      'Cross-Platform React Native',
      'Mobile Client Synchronization',
      'Clean Component Architecture',
    ],
    github: 'https://github.com/nishhshh-01/herbify',
    apk: 'https://github.com/nishhshh-01/herbify-apk/releases/tag/v1.0.0',
    demo: null,
    category: 'mobile',
  },
];

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'professional', label: 'Professional' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI / ML' },
];

/* ─── Professional Card (image-based, wide) ───────────────────────────── */
function ProfessionalCard({ project, index }) {
  const isEccura = project.id === 'eccura';

  return (
    <AnimatedSection direction="up" delay={index * 120}>
      <div
        style={{
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
          marginBottom: '16px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${project.color}40`;
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = `0 20px 56px ${project.color}12`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border)';
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          alignItems: 'stretch',
          minHeight: '280px',
        }}>
          {/* Left — Image */}
          <div style={{
            background: `linear-gradient(135deg, ${project.color}10 0%, ${project.color}05 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            minHeight: '240px',
            overflow: 'hidden',
          }}>
            <img
              src={project.image}
              alt={`${project.title} preview`}
              style={{
                width: '100%',
                maxWidth: isEccura ? '520px' : '480px',
                height: isEccura ? '300px' : '280px',
                borderRadius: '12px',
                objectFit: 'cover',
                objectPosition: 'top left',
                boxShadow: `0 8px 32px ${project.color}20`,
              }}
            />
          </div>

          {/* Right — Content */}
          <div style={{ padding: 'clamp(24px, 4vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '4px 12px', borderRadius: '100px',
              background: project.badge.bg,
              color: project.badge.color,
              border: `1px solid ${project.badge.border}`,
              fontSize: '11.5px', fontWeight: 700,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              marginBottom: '14px', alignSelf: 'flex-start',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: project.badge.color, flexShrink: 0,
              }} aria-hidden="true" />
              {project.badge.text}
            </div>

            <h3 style={{
              fontSize: 'clamp(17px, 2.5vw, 22px)',
              fontWeight: 800, letterSpacing: '-0.6px',
              color: 'var(--color-text-primary)', lineHeight: 1.15,
              marginBottom: '6px',
            }}>
              {project.title}
            </h3>
            <div style={{ fontSize: '13px', color: 'var(--color-text-tertiary)', fontWeight: 500, marginBottom: '14px' }}>
              {project.subtitle}
            </div>

            <p style={{
              fontSize: 'clamp(13.5px, 1.7vw, 14.5px)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7, marginBottom: '18px',
            }}>
              {project.description}
            </p>

            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
              {project.tech.map((t) => (
                <span key={t} style={{
                  padding: '4px 10px', borderRadius: '6px',
                  fontSize: '11.5px', fontWeight: 600,
                  background: 'var(--color-surface-2)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                  fontFamily: 'monospace',
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {isEccura && project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`proj-${project.id}-live`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    padding: '10px 20px', borderRadius: '8px',
                    fontSize: '13.5px', fontWeight: 600,
                    background: 'var(--gradient-accent)',
                    color: '#fff', textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: `0 4px 14px ${project.color}28`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${project.color}40`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `0 4px 14px ${project.color}28`; }}
                >
                  <Globe size={14} />
                  Live Website
                </a>
              )}
              {!isEccura && project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`proj-${project.id}-playstore`}
                  aria-label="View Joblyt on Google Play"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    padding: '10px 20px', borderRadius: '8px',
                    fontSize: '13.5px', fontWeight: 600,
                    background: 'var(--gradient-accent)',
                    color: '#fff',
                    textDecoration: 'none',
                    border: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: `0 4px 14px ${project.color}28`,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${project.color}40`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `0 4px 14px ${project.color}28`; }}
                >
                  <GooglePlayIcon size={15} />
                  View on Google Play
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─── Featured Card ───────────────────────────────────────────────────── */
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

/* ─── Project Card ────────────────────────────────────────────────────── */
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

/* ─── Main Section ────────────────────────────────────────────────────── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const featuredProject = PROJECTS.find(p => p.featured);
  const showProfessional = activeFilter === 'all' || activeFilter === 'professional';
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
            maxWidth: '560px',
            lineHeight: 1.7,
          }}>
            Production-grade mobile applications shipped to Google Play, enterprise vector architectures, and full-stack platforms built with React Native, ASP.NET Core, and modern web frameworks.
          </p>
        </div>
      </AnimatedSection>

      {/* Professional Projects — always at top when visible */}
      {showProfessional && (
        <div style={{ marginBottom: '8px' }}>
          <AnimatedSection direction="up">
            <div style={{
              fontSize: '11px', fontWeight: 700,
              color: 'var(--color-text-tertiary)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span>Real-World Work</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            </div>
          </AnimatedSection>
          {PROFESSIONAL_PROJECTS.map((proj, i) => (
            <ProfessionalCard key={proj.id} project={proj} index={i} />
          ))}
        </div>
      )}

      {/* Featured Project (QRForge) */}
      {(activeFilter === 'all' || activeFilter === 'web') && featuredProject && (
        <div style={{ marginTop: showProfessional ? 'clamp(32px, 4vw, 48px)' : '0' }}>
          <AnimatedSection direction="up">
            <div style={{
              fontSize: '11px', fontWeight: 700,
              color: 'var(--color-text-tertiary)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span>Personal Projects</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            </div>
          </AnimatedSection>
          <FeaturedCard project={featuredProject} />
        </div>
      )}

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

      {filteredProjects.length === 0 && activeFilter !== 'professional' && (
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
