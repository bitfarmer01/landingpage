import React, { useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  baseVx: number;
  baseVy: number;
}

export const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number>(0);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  const prevThemeRef = useRef(theme);
  const flashRef = useRef(0); // 0-1 flash intensity for theme switch

  // Detect theme change and trigger flash
  if (theme !== prevThemeRef.current) {
    prevThemeRef.current = theme;
    flashRef.current = 1;
  }
  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const PARTICLE_COUNT = Math.min(120, Math.floor((w * h) / 15000));
    const CONNECTION_DIST = 150;
    const MOUSE_RADIUS = 200;

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const vx = (Math.random() - 0.5) * 0.3;
      const vy = (Math.random() - 0.5) * 0.3;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx,
        vy,
        baseVx: vx,
        baseVy: vy,
        radius: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.01 + 0.005,
      };
    });

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      const mouse = mouseRef.current;
      const isLight = themeRef.current === 'light';
      const flash = flashRef.current;

      // Decay the flash
      if (flash > 0) {
        flashRef.current = Math.max(0, flash - 0.015);
      }

      const particleColor = isLight ? '180, 210, 30' : '212, 255, 63';
      const lineColor = isLight ? '70, 85, 0' : '212, 255, 63';

      // Light mode: faster movement, faster pulse
      const speedMult = isLight ? 2.2 : 1;
      const pulseMult = isLight ? 2.5 : 1;

      for (const p of particles) {
        p.pulse += p.pulseSpeed * pulseMult;
        const pulseAlpha = Math.sin(p.pulse) * 0.15 + 0.85;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.02;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // During flash, add an outward burst from center
        if (flash > 0.3) {
          const cx = p.x - w / 2;
          const cy = p.y - h / 2;
          const cd = Math.sqrt(cx * cx + cy * cy) || 1;
          p.vx += (cx / cd) * flash * 0.8;
          p.vy += (cy / cd) * flash * 0.8;
        }

        p.vx *= 0.995;
        p.vy *= 0.995;

        // Ensure minimum drift speed based on theme
        const currentSpeed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const minSpeed = Math.sqrt(p.baseVx * p.baseVx + p.baseVy * p.baseVy) * speedMult;
        if (currentSpeed < minSpeed && flash < 0.1) {
          const angle = Math.atan2(p.vy, p.vx);
          p.vx = Math.cos(angle) * minSpeed;
          p.vy = Math.sin(angle) * minSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity * pulseAlpha})`;
        ctx.fill();
      }

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const baseAlpha = (1 - dist / CONNECTION_DIST);
            const alpha = isLight ? baseAlpha * 0.35 : baseAlpha * 0.15;

            const p1 = particles[i];
            const p2 = particles[j];
            const pulse1 = Math.sin(p1.pulse) * 0.15 + 0.85;
            const pulse2 = Math.sin(p2.pulse) * 0.15 + 0.85;
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(${lineColor}, ${alpha * pulse1})`);
            gradient.addColorStop(0.5, `rgba(${lineColor}, ${alpha * 0.4})`);
            gradient.addColorStop(1, `rgba(${lineColor}, ${alpha * pulse2})`);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = isLight ? 0.8 : 0.5;
            ctx.stroke();

            if (baseAlpha > 0.5) {
              const mx = (p1.x + p2.x) / 2;
              const my = (p1.y + p2.y) / 2;
              const glowR = 8 + baseAlpha * 12;
              const glow = ctx.createRadialGradient(mx, my, 0, mx, my, glowR);
              const glowAlpha = baseAlpha * (isLight ? 0.06 : 0.04) * ((pulse1 + pulse2) / 2);
              glow.addColorStop(0, `rgba(${particleColor}, ${glowAlpha})`);
              glow.addColorStop(1, `rgba(${particleColor}, 0)`);
              ctx.fillStyle = glow;
              ctx.fillRect(mx - glowR, my - glowR, glowR * 2, glowR * 2);
            }
          }
        }
      }

      // Mouse glow
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 250);
        gradient.addColorStop(0, `rgba(${lineColor}, ${isLight ? 0.04 : 0.06})`);
        gradient.addColorStop(1, `rgba(${lineColor}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(mouse.x - 250, mouse.y - 250, 500, 500);
      }

      // Flash overlay — "lights on/off" effect
      if (flash > 0) {
        const flashColor = isLight ? '255, 255, 245' : '212, 255, 63';
        const flashAlpha = flash * (isLight ? 0.3 : 0.08);
        ctx.fillStyle = `rgba(${flashColor}, ${flashAlpha})`;
        ctx.fillRect(0, 0, w, h);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -10 }}
    />
  );
};
