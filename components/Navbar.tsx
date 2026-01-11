
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { Button } from './Button';
import { handleAnchorClick } from '../utils/scroll';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-5xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-xl border border-white/10 rounded-full py-3 px-8 mx-4 shadow-2xl' : ''}`}>
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#D4FF3F] rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-[0_0_20px_rgba(212,255,63,0.4)]">
            <Cpu size={22} className="text-black" />
          </div>
          <span className="font-bold text-xl tracking-tighter text-white">AI Ascent</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#process" onClick={handleAnchorClick} className="text-sm font-semibold text-white/60 hover:text-[#D4FF3F] transition-colors tracking-tight">Process</a>
          <a href="#services" onClick={handleAnchorClick} className="text-sm font-semibold text-white/60 hover:text-[#D4FF3F] transition-colors tracking-tight">Services</a>
          <a href="#faq" onClick={handleAnchorClick} className="text-sm font-semibold text-white/60 hover:text-[#D4FF3F] transition-colors tracking-tight">FAQ</a>
          <Button variant="primary" size="sm" onClick={() => window.open('https://calendly.com/rajathmobile/discovery-call', '_blank', 'noopener,noreferrer')}>Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-6 right-6 bg-[#0D0D0D] border border-white/10 p-8 rounded-[2.5rem] flex flex-col gap-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
          <a href="#process" className="text-2xl font-bold text-white" onClick={(e) => { setIsOpen(false); handleAnchorClick(e); }}>Process</a>
          <a href="#services" className="text-2xl font-bold text-white" onClick={(e) => { setIsOpen(false); handleAnchorClick(e); }}>Services</a>
          <a href="#faq" className="text-2xl font-bold text-white" onClick={(e) => { setIsOpen(false); handleAnchorClick(e); }}>FAQ</a>
          <Button variant="primary" size="lg" className="w-full" onClick={() => window.open('https://calendly.com/rajathmobile/discovery-call', '_blank', 'noopener,noreferrer')}>Book a Free Call</Button>
        </div>
      )}
    </nav>
  );
};
