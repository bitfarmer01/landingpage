
import React from 'react';

const steps = [
  {
    title: "01. Analyze",
    body: "We map your current data ecosystem to find high-ROI automation gaps generic tools miss.",
    visual: (
      <div className="flex flex-wrap gap-2 mt-4">
        {["Workflow Audit", "Data Sync", "Gap Analysis"].map((label, idx) => (
          <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold text-white/60 shadow-sm tracking-tight">
            {label}
          </span>
        ))}
      </div>
    )
  },
  {
    title: "02. Develop",
    body: "Our engineers build private AI agents grounded in your specific business logic and truth.",
    visual: (
      <div className="mt-4 p-4 bg-black rounded-xl text-[9px] font-mono text-white/80 overflow-hidden shadow-lg border border-white/5">
        <div className="flex items-center gap-1.5 mb-2 border-b border-white/10 pb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
        </div>
        <div className="text-[#D4FF3F]">const Engine = {"{"}</div>
        <div className="pl-3 text-blue-300">mode: 'proprietary',</div>
        <div className="pl-3 text-green-400">grounding: 'source_truth'</div>
        <div className="text-[#D4FF3F]">{"}"}</div>
      </div>
    )
  },
  {
    title: "03. Deploy",
    body: "Zero-friction integration into your existing stack—Slack, HubSpot, Shopify, or Custom APIs.",
    visual: (
      <div className="mt-4 flex items-center justify-center h-24 bg-white/[0.02] rounded-xl border border-dashed border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/5 rounded-lg shadow-sm border border-white/10 flex items-center justify-center text-[8px] font-bold text-white/40">STACK</div>
          <div className="w-6 h-px bg-gradient-to-r from-white/10 to-[#D4FF3F]"></div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg ring-4 ring-[#D4FF3F]/10">
            <div className="w-4 h-4 bg-black rounded-sm"></div>
          </div>
          <div className="w-6 h-px bg-gradient-to-l from-white/10 to-[#D4FF3F]"></div>
          <div className="w-8 h-8 bg-white/5 rounded-lg shadow-sm border border-white/10 flex items-center justify-center text-[8px] font-bold text-white/40">LIVE</div>
        </div>
      </div>
    )
  },
  {
    title: "04. Scale",
    body: "Automated reporting and feedback loops ensure the system gets smarter with every interaction.",
    visual: (
      <div className="mt-4 space-y-2">
        <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center shadow-sm">
          <div className="flex flex-col">
            <span className="text-[9px] text-white/40 font-bold uppercase tracking-tighter">System Output</span>
            <span className="text-[10px] text-[#D4FF3F] font-bold">Effort: -80%</span>
          </div>
          <div className="flex items-end gap-0.5 h-6">
            <div className="w-1 h-3 bg-white/10"></div>
            <div className="w-1 h-5 bg-white/20"></div>
            <div className="w-1 h-7 bg-[#D4FF3F]"></div>
          </div>
        </div>
      </div>
    )
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-40 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="text-[10px] font-bold text-[#D4FF3F] tracking-[0.3em] uppercase mb-6">Our Engineering Cycle</div>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Built to Outperform.</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            Custom automation isn't just a tool—it's a fundamental shift in how your business scales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative">
              <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 h-full hover:bg-white/[0.05] transition-all duration-700">
                <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-10 min-h-[60px] group-hover:text-white/60 transition-colors">{step.body}</p>
                <div className="mt-auto group-hover:scale-105 transition-transform duration-500">
                  {step.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
