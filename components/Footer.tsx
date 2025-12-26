import React, { useState } from 'react';
import { Cpu, Twitter, Linkedin, Github, Mail, MapPin, Copy, Check } from 'lucide-react';

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
    <footer className="px-6 pt-40 pb-16 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-[#D4FF3F] rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(212,255,63,0.2)]">
                <Cpu size={24} className="text-black" />
              </div>
              <span className="font-black text-3xl text-white tracking-tighter">AI Ascent</span>
            </div>
            <p className="text-xl text-white/40 leading-relaxed max-w-sm mb-12 font-medium">
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
                 className="flex items-center gap-4 text-white/40 hover:text-[#D4FF3F] transition-colors cursor-pointer group"
               >
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4FF3F]/10 transition-colors">
                   <Mail size={20} />
                 </div>
                 <span className="font-bold tracking-tight flex items-center gap-2">
                   {copied ? (
                     <>
                       <Check size={16} className="text-[#D4FF3F]" />
                       Copied!
                     </>
                   ) : (
                     <>
                       {email}
                       <Copy size={14} className="text-white/40 ml-2 hidden md:inline" />
                     </>
                   )}
                 </span>
                 {/* accessible live region */}
                 <span className="sr-only" aria-live="polite">{copied ? 'Email copied to clipboard' : ''}</span>
               </div>
               <div className="flex items-center gap-4 text-white/40">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <span className="font-bold tracking-tight">NYC</span>
               </div>
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h4 className="font-black text-xs mb-10 uppercase tracking-[0.4em] text-[#D4FF3F]">Platform</h4>
              <ul className="space-y-6 text-lg text-white/40 font-bold">
                <li><a href="#process" className="hover:text-white transition-all hover:translate-x-1 inline-block">Process</a></li>
                <li><a href="#services" className="hover:text-white transition-all hover:translate-x-1 inline-block">Services</a></li>
                <li><a href="#faq" className="hover:text-white transition-all hover:translate-x-1 inline-block">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xs mb-10 uppercase tracking-[0.4em] text-[#D4FF3F]">Social</h4>
              <ul className="space-y-6 text-lg text-white/40 font-bold">
                <li><a href="https://x.com/rajathThinks" className="hover:text-white transition-all hover:translate-x-1 inline-block">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-all hover:translate-x-1 inline-block">LinkedIn</a></li>
            
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-12 border-t border-white/5 text-sm font-bold tracking-widest uppercase text-white/20">
          <div className="flex items-center gap-10">
            <p>© 2024 AI Ascent.</p>
            <div className="hidden md:flex items-center gap-10">
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          <p className="text-[#D4FF3F]/40">Intelligence Grounded in Truth.</p>
        </div>
      </div>
    </footer>
  );
};
