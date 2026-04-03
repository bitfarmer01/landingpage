
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Process: React.FC = () => {

  const steps = [
    {
      title: "01. Analyze",
      body: "We map your current data ecosystem to find high-ROI automation gaps generic tools miss.",
      visual: (
        <div className="flex flex-wrap gap-2 mt-4">
          {["Workflow Audit", "Data Sync", "Gap Analysis"].map((label, idx) => (
            <span key={idx} className="px-3 py-1.5 rounded-lg text-[9px] font-bold shadow-sm tracking-tight" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
              {label}
            </span>
          ))}
        </div>
      )
    },
    {
      title: "02. Develop",
      body: "Our engineers build private AI automations grounded in your specific business logic and truth.",
      visual: (
        <div className="mt-4 p-4 bg-[#1A1A1A] rounded-xl text-[9px] font-mono overflow-hidden shadow-lg border border-white/5">
          <div className="flex items-center gap-1.5 mb-2 border-b border-white/10 pb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
          </div>
          <div className="text-[#D4FF3F]">{"const Engine = {"}</div>
          <div className="pl-3 text-blue-300">mode: 'proprietary',</div>
          <div className="pl-3 text-green-400">grounding: 'source_truth'</div>
          <div className="text-[#D4FF3F]">{"}"}</div>
        </div>
      )
    },
    {
      title: "03. Deploy",
      body: "Zero-friction integration into your existing stack—Slack, Excel, HubSpot, Shopify, or Custom APIs.",
      visual: (
        <div className="mt-4 flex items-center justify-center h-24 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px dashed var(--border-color)' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg shadow-sm flex items-center justify-center text-[8px] font-bold" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-tertiary)' }}>STACK</div>
            <div className="w-6 h-px" style={{ background: `linear-gradient(to right, var(--border-color), var(--accent))` }}></div>
            <div className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center shadow-lg ring-4 ring-[#D4FF3F]/10">
              <div className="w-4 h-4 rounded-sm bg-white"></div>
            </div>
            <div className="w-6 h-px" style={{ background: `linear-gradient(to left, var(--border-color), var(--accent))` }}></div>
            <div className="w-8 h-8 rounded-lg shadow-sm flex items-center justify-center text-[8px] font-bold" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-tertiary)' }}>LIVE</div>
          </div>
        </div>
      )
    },
    {
      title: "04. Scale",
      body: "Automated reporting and feedback loops ensure the system gets smarter with every interaction.",
      visual: (
        <div className="mt-4 space-y-2">
          <div className="p-3 rounded-xl flex justify-between items-center shadow-sm" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold uppercase tracking-tighter" style={{ color: 'var(--text-tertiary)' }}>System Output</span>
              <span className="text-[10px] font-bold" style={{ color: 'var(--accent)' }}>Effort: -80%</span>
            </div>
            <div className="flex items-end gap-0.5 h-6">
              <div className="w-1 h-3" style={{ background: 'var(--border-color)' }}></div>
              <div className="w-1 h-5" style={{ background: 'var(--text-tertiary)' }}></div>
              <div className="w-1 h-7" style={{ background: 'var(--accent)' }}></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="process" className="py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto glass-card rounded-[3.5rem] p-10 md:p-20">
        <ScrollReveal>
          <div className="text-center mb-24">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--accent)' }}>Our Engineering Cycle</div>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter" style={{ color: 'var(--text-primary)' }}>Built to Outperform.</h2>
            <p className="max-w-2xl mx-auto text-xl leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
              Custom automation isn't just a tool, it's a fundamental shift in how your business scales.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="h-full">
              <div className="group relative h-full">
                <div className="glass-card rounded-[3rem] p-10 h-full flex flex-col transition-all duration-700">
                  <h3 className="text-xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed mb-10 min-h-[60px] transition-colors" style={{ color: 'var(--text-secondary)' }}>{step.body}</p>
                  <div className="mt-auto group-hover:scale-105 transition-transform duration-500">
                    {step.visual}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
