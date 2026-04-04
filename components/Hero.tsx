
import React from 'react';
import { Button } from './Button';
import { handleAnchorClick } from '../utils/scroll';
import { testimonials } from '../data/testimonials';
export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-24 sm:pt-32 pb-10 sm:pb-20">
      <div className={`absolute top-[20%] left-1/2 -translate-x-1/2 w-[40%] h-[40%] blur-[80px] md:blur-[150px] rounded-full -z-10 animate-pulse duration-[12000ms] ${'bg-[#D4FF3F]/5'}`}></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-5 sm:py-2 mb-8 sm:mb-16 text-[11px] font-bold tracking-[0.3em] uppercase rounded-full shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-1000" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--accent)' }}>
          <span className="flex h-1.5 w-1.5 rounded-full animate-ping" style={{ background: 'var(--accent)' }}></span>
          Engineering the Future
        </div>

        <div className="mb-6 sm:mb-14 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="relative z-10 hidden sm:block text-xl md:text-3xl lg:text-4xl font-medium mb-2 tracking-tight" style={{ color: 'var(--text-tertiary)' }}>
             Your business isn't generic,
          </h2>
          <h1 className="relative z-20 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tighter" style={{ color: 'var(--text-primary)' }}>
            Your AI <span className="text-shimmer">Shouldn't</span> Be Either.
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-20 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200" style={{ color: 'var(--text-secondary)' }}>
          We build custom AI that masters your proprietary data.<span className="hidden sm:inline"> Stop using tools that don't know your business.</span>
        </p>

        <a href="#testimonials" onClick={handleAnchorClick} className="flex items-center justify-center gap-3 mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-250 cursor-pointer group">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24" style={{ animation: `star-entrance 0.6s cubic-bezier(0.34,1.56,0.64,1) ${1.2 + i * 0.12}s both, star-pulse 2.5s ease-in-out ${2.2 + i * 0.15}s infinite` }}>
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          <div className="flex -space-x-2">
            {testimonials.map((t, i) => (
              <img
                key={i}
                src={new URL(`../images/${t.image}`, import.meta.url).href}
                alt={t.name}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 object-cover group-hover:scale-110 transition-transform"
                style={{ borderColor: 'var(--bg-primary)' }}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-wide" style={{ color: 'var(--text-tertiary)' }}>Trusted by B2B leaders</span>
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button size="lg" variant="primary" className={'shadow-[0_0_50px_rgba(212,255,63,0.3)]'} onClick={() => window.open('https://calendly.com/rajathmobile/discovery-call', '_blank', 'noopener,noreferrer')}>
            Start Free Consultation
          </Button>
          <a href="#process" onClick={handleAnchorClick} className="group flex items-center gap-4 text-sm font-bold tracking-[0.2em] transition-all duration-300 uppercase" style={{ color: 'var(--text-primary)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}>
            The Methodology
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-[1px] h-16" style={{ background: `linear-gradient(to bottom, transparent, var(--text-primary))` }}></div>
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
      </div>
    </section>
  );
};
