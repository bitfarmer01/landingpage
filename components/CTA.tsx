
import React from 'react';
import { Button } from './Button';

export const CTA: React.FC = () => {
  return (
    <section className="px-6 py-40">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#0D0D0D] to-[#050505] border border-white/10 rounded-[4rem] py-32 px-6 text-center relative overflow-hidden shadow-2xl">
        {/* Animated Glows */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#D4FF3F]/10 blur-[120px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-full bg-blue-500/5 blur-[120px] -z-0"></div>
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9] max-w-4xl mx-auto tracking-tighter">
            Own the <span className="text-[#D4FF3F]">Intelligence</span> Gap.
          </h2>
          <p className="text-2xl text-white/50 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            Stop leaving revenue on the table. Every manual task is a wasted opportunity. Let's fix it today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Button variant="primary" size="lg" className="shadow-[0_0_50px_rgba(212,255,63,0.3)]">
              Book Your Strategy Call
            </Button>
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12 text-white/30 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#D4FF3F]"></span>
              Enterprise Grade
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#D4FF3F]"></span>
              Private Deployment
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#D4FF3F]"></span>
              Human-In-The-Loop
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
