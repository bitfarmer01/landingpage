
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
import { ScrollNav } from './components/ScrollNav';

const App: React.FC = () => {
  return (
    <div data-scroll-container className="relative h-screen overflow-y-auto" style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}>
      <ParticleField />
      <FloatingOrbs />
      <ScrollNav />
      <Navbar />

      <main>
        <div style={{ scrollSnapAlign: 'start' }}><Hero /></div>
        <div style={{ scrollSnapAlign: 'start', scrollMarginTop: '80px' }}><Process /></div>
        <div style={{ scrollSnapAlign: 'start', scrollMarginTop: '80px' }}><Features /></div>
        <div style={{ scrollSnapAlign: 'start', scrollMarginTop: '80px' }}><Testimonial /></div>
        <div style={{ scrollSnapAlign: 'start', scrollMarginTop: '80px' }}><Founder /></div>
        <div style={{ scrollSnapAlign: 'start', scrollMarginTop: '80px' }}><FAQ /></div>
        <div style={{ scrollSnapAlign: 'start', scrollMarginTop: '80px' }}><CTA /></div>
      </main>

      <div style={{ scrollSnapAlign: 'start' }}><Footer /></div>
    </div>
  );
};

export default App;
