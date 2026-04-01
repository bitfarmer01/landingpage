import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Coltrane Kubo",
    title: "Co-founder @ Aidgentic",
    quote: "Rajath is a phenomenal AI and automation expert. He brought serious <highlight>technical depth</highlight> to my project, and clearly knows his stuff.",
    image: "coltrane.png",
  },
  {
    name: "Zak Hodgson",
    title: "CEO @ Sundale Systems",
    quote: "Delivered faster than expected, explained in plain language, and it <highlight>just works</highlight>. Bounce rates are down and we're saving hours every week.",
    image: "zak.png",
  },
];

export const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const renderQuote = (quote: string) => {
    const parts = quote.split(/<highlight>|<\/highlight>/);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className="text-[#D4FF3F]">{part}</span>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  };

  return (
    <section
      className="py-56 px-6 bg-[#0A0A0A] relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#D4FF3F]/5 blur-[120px] rounded-full opacity-50"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="text-[#D4FF3F] mb-16 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ))}
        </div>

        <div className="relative min-h-[380px] md:min-h-[420px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === activeIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <blockquote className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-16 tracking-tighter [text-wrap:balance]">
                "{renderQuote(testimonial.quote)}"
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 p-1 mb-6 overflow-hidden">
                  <img
                    src={new URL(`../images/${testimonial.image}`, import.meta.url).href}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <cite className="not-italic">
                  <span className="block font-black text-xl text-white mb-2 tracking-tight">{testimonial.name}</span>
                  <span className="text-[#D4FF3F] text-xs font-black tracking-[0.3em] uppercase">{testimonial.title}</span>
                </cite>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-20">
          <button
            onClick={goToPrev}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[#D4FF3F] scale-125'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
