
import React from 'react';
import { Database, Search, TrendingUp, ShieldCheck, FileCheck, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const featureList = [
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Sovereignty",
    description: "Connect your HubSpot, Shopify, and Internal DBs seamlessly. We create a unified intelligence layer that lives in your private VPC."
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Instant Accuracy",
    description: "Query your business in plain English. No more waiting for reports. Get real-time answers grounded in your live operations."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Predictive Scaling",
    description: "Identify churn patterns and revenue leaks before they happen. Our AI models are built to forecast your specific business cycle."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Uncompromising Privacy",
    description: "Zero data leakage. We use segregated environments so your proprietary logic stays exactly where it belongs: with you."
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Citations Included",
    description: "Every answer comes with source-truth verification. Our 'Traceable Intelligence' ensures 100% confidence in every decision."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="services" className="py-8 sm:py-16 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto glass-card rounded-2xl sm:rounded-[3.5rem] p-4 sm:p-8 md:p-14">

        <ScrollReveal/>

        {/* Mobile: compact 2-col grid, no descriptions */}
        <div className="sm:hidden grid grid-cols-2 gap-3">
          {featureList.map((f, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-lg mb-2 shadow-md" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--accent)' }}>
                  {f.icon}
                </div>
                <h3 className="text-xs font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>{f.title}</h3>
              </div>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={featureList.length * 60}>
            <div className="rounded-xl p-4 flex flex-col items-center justify-center bg-[#D4FF3F] text-[#1A1A1A] shadow-[0_0_40px_rgba(212,255,63,0.15)]">
              <h3 className="text-sm font-black tracking-tight text-center leading-tight mb-2">Ready to automate?</h3>
              <div className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest">
                Let's go <ArrowRight size={14} />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Desktop: full cards */}
        <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((f, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="group glass-card p-8 md:p-10 rounded-[3rem] transition-all duration-500">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl mb-10 transition-all duration-500 shadow-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--accent)' }}>
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {f.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>{f.title}</h3>
                <p className="leading-relaxed text-lg font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  {f.description}
                </p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={featureList.length * 80}>
            <div className="rounded-[3rem] p-12 flex flex-col justify-between group overflow-hidden relative hover:scale-[1.02] transition-transform duration-500 h-full bg-[#D4FF3F] text-[#1A1A1A] shadow-[0_0_80px_rgba(212,255,63,0.2)]">
              <div className="relative z-10">
                <h3 className="text-4xl font-black mb-6 tracking-tighter leading-none">Ready to automate?</h3>
                <p className="text-lg leading-snug font-bold text-black/70">
                  Join the top 1% of B2B companies leveraging custom data models for extreme efficiency.
                </p>
              </div>
              <div className="flex items-center gap-4 font-black group-hover:translate-x-4 transition-transform relative z-10 uppercase text-sm tracking-widest pt-12">
                Let's build <ArrowRight size={24} />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-3xl bg-black/10"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
