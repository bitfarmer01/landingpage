
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Features } from './components/Features';
import { Testimonial } from './components/Testimonial';
import { Founder } from './components/Founder';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ParticleField } from './components/ParticleField';
import { FloatingOrbs } from './components/FloatingOrbs';

const SectionDivider = () => <div className="section-divider" />;

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleField />
      <FloatingOrbs />
      <Navbar />

      <main>
        <Hero />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <Testimonial />
        <SectionDivider />
        <Founder />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
