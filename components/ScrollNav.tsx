import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'process', label: 'Process' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'faq', label: 'FAQ' },
  { id: 'cta', label: 'Contact' },
];

export const ScrollNav: React.FC = () => {
  const [active, setActive] = useState('hero');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // The scroll container is the App div, not window
    const getScrollContainer = () => document.querySelector('[data-scroll-container]') as HTMLElement | null;

    const handleScroll = () => {
      const container = getScrollContainer();
      const scrollTop = container ? container.scrollTop : window.scrollY;

      setVisible(scrollTop > 300);

      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          current = section.id;
        }
      }
      setActive(current);
    };

    // Try the scroll container first, fall back to window
    const container = getScrollContainer();
    const target = container || window;
    target.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => target.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 hidden lg:flex flex-col items-end gap-1"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
    >
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="group flex items-center gap-3 py-1.5 focus:outline-none"
            aria-label={`Scroll to ${section.label}`}
          >
            <span
              className="text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
              style={{
                color: isActive ? 'var(--accent)' : 'var(--text-tertiary)',
                opacity: isActive ? 1 : undefined,
                transform: isActive ? 'translateX(0)' : undefined,
              }}
            >
              {section.label}
            </span>

            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: isActive ? '20px' : '6px',
                height: '3px',
                background: isActive ? 'var(--accent)' : 'var(--border-color)',
              }}
            />
          </button>
        );
      })}
    </div>
  );
};
