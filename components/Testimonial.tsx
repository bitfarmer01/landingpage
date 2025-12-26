
import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-56 px-6 bg-[#0A0A0A] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#D4FF3F]/5 blur-[120px] rounded-full opacity-50"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="text-[#D4FF3F] mb-16 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ))}
        </div>
        <blockquote className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-16 tracking-tighter [text-wrap:balance]">
          "Rajath is a phenomenal AI and automation expert. He brought serious <span className="text-[#D4FF3F]">technical depth</span> to my project, and clearly knows his stuff."
        </blockquote>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 p-1 mb-6">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#D4FF3F] to-emerald-400"></div>
          </div>
          <cite className="not-italic">
            <span className="block font-black text-xl text-white mb-2 tracking-tight">Coltrane Kubo</span>
            <span className="text-[#D4FF3F] text-xs font-black tracking-[0.3em] uppercase">Co-founder @ Aidgentic</span>
          </cite>
        </div>
      </div>
    </section>
  );
};
