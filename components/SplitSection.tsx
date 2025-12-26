
import React from 'react';

export const SplitSection: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight">
            We don't just build chatbots. We build businesses.
          </h2>
          <p className="text-lg text-[#475569] mb-10 leading-relaxed">
            Every project begins with a deep dive into your business goals. We partner with you to understand your customers, your challenges, and your vision.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Iterative design sprints",
              "Performance-first development",
              "Conversion rate optimization",
              "Long-term strategic partnership"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-[#475569]">
                <div className="w-1.5 h-1.5 bg-[#FACC15] rounded-full"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200" 
              alt="Creative process" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Accent float element */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#FACC15] rounded-3xl -z-10 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};
