
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Features } from './components/Features';
import { Testimonial } from './components/Testimonial';
import { Founder } from './components/Founder';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Process />
        <Features />
        <Testimonial />
        <Founder />
        <FAQ />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
