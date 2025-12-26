
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How is this different from ChatGPT?",
    a: "ChatGPT is general-purpose. Our systems are 'Data-Grounded'. We connect AI directly to your HubSpot, Shopify, or SQL databases. It doesn't guess; it references your live, proprietary truth to drive actions."
  },
  {
    q: "Is my business data secure?",
    a: "Privacy is our architecture. We deploy within private, siloed environments. Your proprietary information is never stored long-term by the model and never used for public training."
  },
  {
    q: "What is the implementation timeline?",
    a: "We move at the speed of software. Most high-ROI connectors are live within 2-4 weeks, integrated seamlessly into your existing stack like Slack or Salesforce."
  },
  {
    q: "Can this eliminate human error?",
    a: "It minimizes it significantly by automating repetitive extraction and logic. However, we design with 'Human-In-The-Loop' where critical decisions still require your final sign-off."
  }
];

const FAQItem: React.FC<{ q: string; a: string; isOpen: boolean; onClick: () => void }> = ({ q, a, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center py-10 text-left group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`text-2xl font-bold transition-colors tracking-tight ${isOpen ? 'text-[#D4FF3F]' : 'text-white/60 group-hover:text-white'}`}>
          {q}
        </span>
        <div className={`p-3 rounded-full bg-white/5 group-hover:bg-[#D4FF3F]/20 transition-all ${isOpen ? 'rotate-180 bg-[#D4FF3F]/10 text-[#D4FF3F]' : 'text-white/40'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-white/40 text-xl leading-relaxed max-w-3xl font-medium">
          {a}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-40 px-6 bg-[#080808]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Insights.</h2>
          <p className="text-white/30 text-xl font-medium">Everything you need to know about custom AI deployment.</p>
        </div>
        <div className="bg-white/[0.02] rounded-[3rem] p-6 md:p-16 border border-white/10 shadow-2xl">
          {faqs.map((item, idx) => (
            <FAQItem 
              key={idx} 
              q={item.q} 
              a={item.a} 
              isOpen={openIndex === idx} 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
