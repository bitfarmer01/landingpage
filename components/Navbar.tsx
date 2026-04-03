
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Sun, Moon } from 'lucide-react';
import { Button } from './Button';
import { handleAnchorClick } from '../utils/scroll';
import { useTheme } from '../contexts/ThemeContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-5xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'backdrop-blur-xl rounded-full py-3 px-8 mx-4 shadow-2xl' : ''}`} style={scrolled ? { background: 'var(--nav-bg)', border: '1px solid var(--border-color)' } : undefined}>
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500 bg-[#D4FF3F] shadow-[0_0_20px_rgba(212,255,63,0.4)]">
            <Cpu size={22} className="text-black" />
          </div>
          <span className="font-bold text-xl tracking-tighter" style={{ color: 'var(--text-primary)' }}>AI Ascent</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#process" onClick={handleAnchorClick} className="text-sm font-semibold transition-colors tracking-tight" style={{ color: 'var(--text-secondary)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>Process</a>
          <a href="#services" onClick={handleAnchorClick} className="text-sm font-semibold transition-colors tracking-tight" style={{ color: 'var(--text-secondary)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>Services</a>
          <a href="#faq" onClick={handleAnchorClick} className="text-sm font-semibold transition-colors tracking-tight" style={{ color: 'var(--text-secondary)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>FAQ</a>
          <button
            onClick={toggle}
            className="p-2 rounded-full transition-all duration-300 hover:scale-110"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} style={{ color: 'var(--text-primary)' }} /> : <Sun size={16} style={{ color: 'var(--text-primary)' }} />}
          </button>
          <Button variant="primary" size="sm" onClick={() => window.open('https://calendly.com/rajathmobile/discovery-call', '_blank', 'noopener,noreferrer')}>Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-full transition-all duration-300"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} style={{ color: 'var(--text-primary)' }} /> : <Sun size={16} style={{ color: 'var(--text-primary)' }} />}
          </button>
          <button className="p-2" style={{ color: 'var(--text-primary)' }} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-6 right-6 glass-card p-8 rounded-[3.5rem] flex flex-col gap-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
          <a href="#process" className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }} onClick={(e) => { setIsOpen(false); handleAnchorClick(e); }}>Process</a>
          <a href="#services" className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }} onClick={(e) => { setIsOpen(false); handleAnchorClick(e); }}>Services</a>
          <a href="#faq" className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }} onClick={(e) => { setIsOpen(false); handleAnchorClick(e); }}>FAQ</a>
          <Button variant="primary" size="lg" className="w-full" onClick={() => window.open('https://calendly.com/rajathmobile/discovery-call', '_blank', 'noopener,noreferrer')}>Book a Free Call</Button>
        </div>
      )}
    </nav>
  );
};
