
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

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
    <div style={{ borderBottom: '1px solid var(--border-color)' }} className="last:border-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-6 sm:py-8 md:py-10 text-left group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg sm:text-xl md:text-2xl font-bold transition-colors tracking-tight" style={{ color: isOpen ? 'var(--accent)' : 'var(--text-secondary)' }}>
          {q}
        </span>
        <div className={`p-3 rounded-full transition-all ${isOpen ? 'rotate-180' : ''}`} style={{ background: isOpen ? 'var(--accent-dim)' : 'var(--bg-card)', color: isOpen ? 'var(--accent)' : 'var(--text-tertiary)' }}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-medium" style={{ color: 'var(--text-secondary)' }}>
          {a}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-8 sm:py-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto glass-card rounded-2xl sm:rounded-[3.5rem] p-5 sm:p-10 md:p-20">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter" style={{ color: 'var(--text-primary)' }}>Insights.</h2>
            <p className="text-xl font-medium" style={{ color: 'var(--text-tertiary)' }}>Everything you need to know about custom AI deployment.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div>
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
        </ScrollReveal>
      </div>
    </section>
  );
};
