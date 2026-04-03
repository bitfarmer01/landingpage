import React, { useState } from 'react';
import { Cpu, Mail, MapPin, Copy, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'rajath@startaiascent.com';

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore failures silently
    }
  };

  return (
    <footer className="px-6 pt-40 pb-16 relative z-10">
      <div className="max-w-7xl mx-auto glass-card rounded-[3.5rem] p-10 md:p-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4FF3F] shadow-[0_0_30px_rgba(212,255,63,0.2)]">
                  <Cpu size={24} className="text-black" />
                </div>
                <span className="font-black text-3xl tracking-tighter" style={{ color: 'var(--text-primary)' }}>AI Ascent</span>
              </div>
              <p className="text-xl leading-relaxed max-w-sm mb-12 font-medium" style={{ color: 'var(--text-secondary)' }}>
                We engineer proprietary intelligence for the most ambitious B2B companies on earth.
              </p>
              <div className="space-y-6">
                 <div
                   role="button"
                   tabIndex={0}
                   onClick={handleCopy}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                       e.preventDefault();
                       handleCopy();
                     }
                   }}
                   aria-label={`Copy email ${email} to clipboard`}
                   title="Click to copy email"
                   className="flex items-center gap-4 transition-colors cursor-pointer group"
                   style={{ color: 'var(--text-secondary)' }}
                 >
                   <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors" style={{ background: 'var(--bg-card)' }}>
                     <Mail size={20} />
                   </div>
                   <span className="font-bold tracking-tight flex items-center gap-2">
                     {copied ? (
                       <>
                         <Check size={16} style={{ color: 'var(--accent)' }} />
                         Copied!
                       </>
                     ) : (
                       <>
                         {email}
                         <Copy size={14} className="ml-2 hidden md:inline" style={{ color: 'var(--text-tertiary)' }} />
                       </>
                     )}
                   </span>
                   <span className="sr-only" aria-live="polite">{copied ? 'Email copied to clipboard' : ''}</span>
                 </div>
                 <div className="flex items-center gap-4" style={{ color: 'var(--text-secondary)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--bg-card)' }}>
                      <MapPin size={20} />
                    </div>
                    <span className="font-bold tracking-tight">NYC</span>
                 </div>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
              <div>
                <h4 className="font-black text-xs mb-10 uppercase tracking-[0.4em]" style={{ color: 'var(--accent)' }}>Platform</h4>
                <ul className="space-y-6 text-lg font-bold" style={{ color: 'var(--text-secondary)' }}>
                  <li><a href="#process" className="hover:opacity-100 opacity-70 transition-all hover:translate-x-1 inline-block">Process</a></li>
                  <li><a href="#services" className="hover:opacity-100 opacity-70 transition-all hover:translate-x-1 inline-block">Services</a></li>
                  <li><a href="#faq" className="hover:opacity-100 opacity-70 transition-all hover:translate-x-1 inline-block">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-xs mb-10 uppercase tracking-[0.4em]" style={{ color: 'var(--accent)' }}>Social</h4>
                <ul className="space-y-6 text-lg font-bold" style={{ color: 'var(--text-secondary)' }}>
                  <li><a href="https://x.com/rajathThinks" className="hover:opacity-100 opacity-70 transition-all hover:translate-x-1 inline-block">Twitter</a></li>
                  <li><a href="#" className="hover:opacity-100 opacity-70 transition-all hover:translate-x-1 inline-block">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-12 text-sm font-bold tracking-widest uppercase" style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-tertiary)' }}>
          <div className="flex items-center gap-10">
            <p>© 2024 AI Ascent.</p>
            <div className="hidden md:flex items-center gap-10">
               <a href="#" className="hover:opacity-100 opacity-70 transition-colors">Privacy</a>
               <a href="#" className="hover:opacity-100 opacity-70 transition-colors">Terms</a>
            </div>
          </div>
          <p style={{ color: 'var(--accent)', opacity: 0.4 }}>Intelligence Grounded in Truth.</p>
        </div>
      </div>
    </footer>
  );
};
