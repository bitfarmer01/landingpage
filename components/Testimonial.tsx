import React, { useState, useEffect, useRef } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { testimonials } from '../data/testimonials';

export const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView, activeIndex]);

  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);

  const renderQuote = (quote: string) => {
    const parts = quote.split(/<highlight>|<\/highlight>/);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} style={{ color: 'var(--accent)' }}>{part}</span>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-8 sm:py-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto glass-card rounded-2xl sm:rounded-[3.5rem] p-5 sm:p-10 md:p-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[100px] pointer-events-none" style={{ background: 'var(--accent-glow)' }}></div>

        <ScrollReveal>
          <div className="text-center mb-10 relative z-10">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--accent)' }}>What Our Clients Say</div>
            <div className="flex justify-center gap-1 mb-4 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="relative min-h-[320px] md:min-h-[350px] z-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col ${
                index === activeIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <div className="flex items-center justify-center gap-5 mb-10">
                <div className="w-14 h-14 rounded-full p-0.5 overflow-hidden flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-dim))' }}>
                  <img
                    src={new URL(`../images/${testimonial.image}`, import.meta.url).href}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-left">
                  <span className="block font-black text-lg tracking-tight" style={{ color: 'var(--text-primary)' }}>{testimonial.name}</span>
                  <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: 'var(--accent)' }}>{testimonial.title}</span>
                </div>
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-4xl font-bold leading-[1.3] tracking-tight text-center [text-wrap:balance]" style={{ color: 'var(--text-primary)' }}>
                "{renderQuote(testimonial.quote)}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-12 relative z-10">
          <div className="flex justify-center gap-3 mb-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="h-1 rounded-full transition-all duration-500 cursor-pointer"
                style={{
                  width: index === activeIndex ? '40px' : '16px',
                  background: index === activeIndex ? 'var(--accent)' : 'var(--border-color)',
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-110"
              style={{ border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-110"
              style={{ border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
