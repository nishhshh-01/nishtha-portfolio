import { useEffect, useRef } from 'react';

const styles = {
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
};

export function AnimatedSection({ children, className = '', delay = 0, direction = 'up', style = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const transforms = {
      up: 'translateY(32px)',
      down: 'translateY(-32px)',
      left: 'translateX(32px)',
      right: 'translateX(-32px)',
      scale: 'scale(0.95)',
      none: 'none',
    };

    el.style.opacity = '0';
    el.style.transform = transforms[direction] || transforms.up;
    el.style.transition = `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className} style={{ ...styles.wrapper, ...style }}>
      {children}
    </div>
  );
}

export function StaggeredList({ children, className = '', staggerDelay = 80 }) {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <AnimatedSection key={index} delay={index * staggerDelay} direction="up">
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}
