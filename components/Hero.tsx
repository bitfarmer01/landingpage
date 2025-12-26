
import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-32 pb-20">
      {/* Refined local glows that supplement the global pulse */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[40%] h-[40%] bg-[#D4FF3F]/5 blur-[150px] rounded-full -z-10 animate-pulse duration-[12000ms]"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-16 text-[11px] font-bold tracking-[0.3em] uppercase bg-white/5 border border-white/10 text-[#D4FF3F] rounded-full shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-1000">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#D4FF3F] animate-ping"></span>
          Engineering the Future
        </div>
        
        <div className="mb-14 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="relative z-10 text-xl md:text-3xl lg:text-4xl font-medium text-white/40 mb-2 tracking-tight">
            Because your business isn’t generic,
          </h2>
          <h1 className="relative z-20 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight whitespace-nowrap drop-shadow-[0_25px_35px_rgba(212,255,63,0.2)] tracking-tighter">
            Your AI <span className="text-[#D4FF3F]">Shouldn’t</span> Be Either.
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-white/50 mb-20 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Stop using tools that don't know your business. We build custom intelligence engines that master your proprietary data.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button size="lg" variant="primary" className="shadow-[0_0_50px_rgba(212,255,63,0.3)]">
            Start Free Consultation
          </Button>
          <a href="#process" className="group flex items-center gap-4 text-sm font-bold text-white tracking-[0.2em] hover:text-[#D4FF3F] transition-all duration-300 uppercase">
            The Methodology 
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white"></div>
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
      </div>
    </section>
  );
};
