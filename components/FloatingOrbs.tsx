import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Orb {
  id: number;
  x: string;
  y: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const darkOrbs: Orb[] = [
  { id: 1, x: '15%', y: '20%', size: 400, color: 'rgba(212, 255, 63, 0.07)', duration: 20, delay: 0 },
  { id: 2, x: '75%', y: '60%', size: 350, color: 'rgba(59, 130, 246, 0.06)', duration: 25, delay: 2 },
  { id: 3, x: '50%', y: '80%', size: 450, color: 'rgba(212, 255, 63, 0.05)', duration: 30, delay: 5 },
  { id: 4, x: '85%', y: '15%', size: 300, color: 'rgba(139, 92, 246, 0.06)', duration: 22, delay: 3 },
  { id: 5, x: '30%', y: '50%', size: 380, color: 'rgba(212, 255, 63, 0.04)', duration: 28, delay: 7 },
];

const lightOrbs: Orb[] = [
  { id: 1, x: '15%', y: '20%', size: 400, color: 'rgba(80, 95, 0, 0.06)', duration: 20, delay: 0 },
  { id: 2, x: '75%', y: '60%', size: 350, color: 'rgba(59, 100, 200, 0.05)', duration: 25, delay: 2 },
  { id: 3, x: '50%', y: '80%', size: 450, color: 'rgba(80, 95, 0, 0.04)', duration: 30, delay: 5 },
  { id: 4, x: '85%', y: '15%', size: 300, color: 'rgba(100, 60, 180, 0.05)', duration: 22, delay: 3 },
  { id: 5, x: '30%', y: '50%', size: 380, color: 'rgba(80, 95, 0, 0.035)', duration: 28, delay: 7 },
];

export const FloatingOrbs: React.FC = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const orbs = theme === 'light' ? lightOrbs : darkOrbs;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -15 }}>
      {orbs.map((orb) => {
        const parallaxFactor = 0.3 + (orb.id * 0.15);
        return (
          <div
            key={orb.id}
            className="absolute rounded-full"
            style={{
              left: orb.x,
              top: orb.y,
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              filter: 'blur(60px)',
              transform: `translate(${offset.x * parallaxFactor}px, ${offset.y * parallaxFactor}px)`,
              transition: 'transform 0.3s ease-out',
              animation: `orb-float-${orb.id} ${orb.duration}s ease-in-out infinite`,
              animationDelay: `${orb.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};
