
import React from 'react';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';

export const CTA: React.FC = () => {
  return (
    <section className="px-6 py-40 relative z-10">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto glass-card rounded-[3.5rem] py-32 px-10 md:px-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full blur-[120px] -z-0" style={{ background: 'var(--accent-glow)' }}></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-full blur-[120px] -z-0" style={{ background: 'rgba(59, 130, 246, 0.03)' }}></div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] max-w-4xl mx-auto tracking-tighter" style={{ color: 'var(--text-primary)' }}>
              Own the <span style={{ color: 'var(--accent)' }}>Intelligence</span> Gap.
            </h2>
            <p className="text-2xl mb-16 max-w-2xl mx-auto font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Stop leaving revenue on the table. Every manual task is a wasted opportunity. Let's fix it today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
              <Button variant="primary" size="lg" className="shadow-[0_0_50px_rgba(212,255,63,0.3)]">
                Book Your Strategy Call
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase" style={{ color: 'var(--text-tertiary)' }}>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full" style={{ background: 'var(--accent)' }}></span>
                Enterprise Grade
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full" style={{ background: 'var(--accent)' }}></span>
                Private Deployment
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full" style={{ background: 'var(--accent)' }}></span>
                Human-In-The-Loop
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
