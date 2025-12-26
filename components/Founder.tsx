
import React from 'react';
export const Founder: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto bg-[#080808]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1">
          <span className="text-sm font-black text-[#D4FF3F] uppercase tracking-[0.3em] mb-6 block">Leadership</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Rajath Raghu</h2>
          <p className="text-xl font-medium text-[#D4FF3F] mb-10 italic opacity-90">AI Automation Architect & Software Engineer</p>
          <div className="space-y-8 text-white/50 text-xl leading-relaxed font-medium">
            <p>
              I bridge the gap between complex engineering and measurable business growth. Having scaled systems at Walmart and high-growth startups, I focus exclusively on high-ROI automation.
            </p>
            <p>
              Today, I help B2B organizations reclaim thousands of hours by building "Thinking Systems" that master their internal data.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative group">
            {/* Solar Glow Background */}
            <div className="absolute -inset-10 bg-[#D4FF3F]/10 blur-[100px] rounded-full -z-10 group-hover:scale-110 transition-transform duration-1000 opacity-50"></div>
            
            <div className="aspect-square bg-white/5 rounded-[3.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 relative">
               <img 
                 src="../images/rajath.jpg"
                 alt="Rajath Raghu" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
