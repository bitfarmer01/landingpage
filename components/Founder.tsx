
import React, { useRef, useEffect, useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Founder: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const raw = 1 - (rect.top - windowH * 0.3) / (windowH * 0.6);
      setScrollProgress(Math.max(0, Math.min(1, raw)));
    };

    const container = document.querySelector('[data-scroll-container]') || window;
    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const grayscale = 1 - scrollProgress;
  const scale = 1 + scrollProgress * 0.05;
  const glowScale = 1 + scrollProgress * 0.15;
  const glowOpacity = 0.2 + scrollProgress * 0.4;

  return (
    <section id="leadership" className="py-8 sm:py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto glass-card rounded-2xl sm:rounded-[3.5rem] p-5 sm:p-10 md:p-20">
        {/* Mobile: compact horizontal layout */}
        <div className="sm:hidden">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div ref={imageRef} className="relative flex-shrink-0">
                <div
                  className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg relative"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    filter: `grayscale(${grayscale})`,
                  }}
                >
                  <img
                    src={new URL('../images/rajath.jpg', import.meta.url).href}
                    alt="Rajath Raghu"
                    className="w-full h-full object-cover"
                    style={{ transform: `scale(${scale})` }}
                  />
                </div>
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] block" style={{ color: 'var(--accent)' }}>Leadership</span>
                <h2 className="text-xl font-black tracking-tighter" style={{ color: 'var(--text-primary)' }}>Rajath Raghu</h2>
                <p className="text-xs font-medium italic opacity-90" style={{ color: 'var(--accent)' }}>AI Architect · Ex-Walmart</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
              Scaled systems at Walmart and high-growth startups. Today I help B2B orgs reclaim thousands of hours with custom AI that masters their internal data.
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop: full layout */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal direction="left" className="order-2 md:order-1">
            <span className="text-sm font-black uppercase tracking-[0.3em] mb-6 block" style={{ color: 'var(--accent)' }}>Leadership</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter" style={{ color: 'var(--text-primary)' }}>Rajath Raghu</h2>
            <p className="text-xl font-medium mb-10 italic opacity-90" style={{ color: 'var(--accent)' }}>AI Automation Architect & Software Engineer</p>
            <div className="space-y-8 text-xl leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
              <p>
                I bridge the gap between complex engineering and measurable business growth. Having scaled systems at Walmart and high-growth startups, I focus exclusively on high-ROI automation.
              </p>
              <p>
                Today, I help B2B organizations reclaim thousands of hours by building "Thinking Systems" that master their internal data.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" className="order-1 md:order-2">
            <div className="relative">
              <div
                className="absolute -inset-10 blur-[100px] rounded-full -z-10 transition-transform duration-700"
                style={{
                  background: 'var(--accent-glow)',
                  transform: `scale(${glowScale})`,
                  opacity: glowOpacity,
                }}
              ></div>

              <div
                className="aspect-square rounded-[3.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] relative transition-all duration-700"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  filter: `grayscale(${grayscale})`,
                }}
              >
                <img
                  src={new URL('../images/rajath.jpg', import.meta.url).href}
                  alt="Rajath Raghu"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: `scale(${scale})` }}
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, var(--bg-primary), transparent 40%)`, opacity: 0.4 }}></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
