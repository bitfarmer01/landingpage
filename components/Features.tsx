
import React from 'react';
import { Database, Search, TrendingUp, ShieldCheck, FileCheck, ArrowRight } from 'lucide-react';

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
    <section id="services" className="bg-[#080808] py-48 px-6 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#D4FF3F]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-32">
          <div className="text-xs font-bold text-[#D4FF3F] tracking-[0.4em] uppercase mb-8">Service Spectrum</div>
          <h2 className="text-5xl md:text-8xl font-extrabold text-white mb-10 leading-[0.9] tracking-tighter">
            Total Intelligence. <br />
            No Compromise.
          </h2>
          <p className="text-white/40 text-2xl leading-relaxed max-w-2xl font-medium">
            We bridge the gap between raw data and actionable profit with surgical precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((f, i) => (
            <div key={i} className="group p-10 bg-white/[0.02] border border-white/10 rounded-[2.5rem] hover:bg-white/[0.04] hover:border-[#D4FF3F]/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl mb-10 text-[#D4FF3F] border border-white/5 group-hover:bg-[#D4FF3F] group-hover:text-black transition-all duration-500 shadow-xl">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">{f.title}</h3>
              <p className="text-white/40 leading-relaxed text-lg font-medium group-hover:text-white/60 transition-colors">
                {f.description}
              </p>
            </div>
          ))}
          
          <div className="bg-[#D4FF3F] text-black rounded-[2.5rem] p-12 flex flex-col justify-between group overflow-hidden relative hover:scale-[1.02] transition-transform duration-500 shadow-[0_0_80px_rgba(212,255,63,0.2)]">
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6 tracking-tighter leading-none">Ready to automate?</h3>
              <p className="text-black/70 text-lg leading-snug font-bold">
                Join the top 1% of B2B companies leveraging custom data models for extreme efficiency.
              </p>
            </div>
            <div className="flex items-center gap-4 font-black text-black group-hover:translate-x-4 transition-transform relative z-10 uppercase text-sm tracking-widest pt-12">
              Let's build <ArrowRight size={24} />
            </div>
            {/* Abstract design elements */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-black/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
