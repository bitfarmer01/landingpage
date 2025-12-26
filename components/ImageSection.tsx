
import React from 'react';

export const ImageSection: React.FC = () => {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl group">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern workspace" 
          className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5"></div>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-between gap-8 md:items-end">
        <p className="text-[#475569] max-w-md text-sm leading-relaxed">
          Our design philosophy is rooted in clarity. We believe that every pixel should serve a purpose, creating interfaces that are as intuitive as they are beautiful.
        </p>
        <div className="flex gap-12 text-sm">
          <div>
            <span className="block font-semibold text-[#0F172A]">Founded</span>
            <span className="text-[#475569]">2019</span>
          </div>
          <div>
            <span className="block font-semibold text-[#0F172A]">Location</span>
            <span className="text-[#475569]">Remote-First</span>
          </div>
        </div>
      </div>
    </section>
  );
};
