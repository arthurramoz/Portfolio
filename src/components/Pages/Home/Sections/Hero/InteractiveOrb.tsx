'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppTheme } from '@/contexts/ThemeContext';

const PARTICLE_COUNT = 3800;
const SPHERE_RADIUS = 200;
const DOT_SIZE_BASE = 1.5;
const BASE_ROTATION_SPEED = 0.00004;
const PERSPECTIVE = 400;
const MOUSE_DRAG = 0.0002;
const FRICTION = 0.98;

interface Particle {
  baseX: number;
  baseY: number;
  baseZ: number;
}

const createParticles = (): Particle[] => {
  const particles: Particle[] = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const theta = Math.acos(2 * Math.random() - 1);
    const phi = Math.random() * Math.PI * 2;

    const n1 = Math.sin(theta * 3.0) * Math.cos(phi * 2.0) * 0.12;
    const n2 = Math.sin(theta * 5.0 + 1.3) * Math.sin(phi * 3.0 + 0.7) * 0.06;
    const n3 = Math.cos(theta * 2.0 + phi * 4.0) * 0.04;
    const deform = 1 + n1 + n2 + n3;

    const r = SPHERE_RADIUS * deform;

    particles.push({
      baseX: r * Math.sin(theta) * Math.cos(phi),
      baseY: r * Math.sin(theta) * Math.sin(phi),
      baseZ: r * Math.cos(theta),
    });
  }

  return particles;
};

const InteractiveOrb = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { themeMode } = useAppTheme();
  const mouseRef = useRef({ x: 9999, y: 9999 });
  const mouseDeltaRef = useRef({ dx: 0, dy: 0 });
  const rafRef = useRef<number>(0);
  const rotRef = useRef({ x: 0.3, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>(createParticles());
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      if (mouseRef.current.x < 9000) {
        mouseDeltaRef.current.dx += newX - mouseRef.current.x;
        mouseDeltaRef.current.dy += newY - mouseRef.current.y;
      }

      mouseRef.current.x = newX;
      mouseRef.current.y = newY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = 9999;
      mouseRef.current.y = 9999;
      mouseDeltaRef.current.dx = 0;
      mouseDeltaRef.current.dy = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const isDark = themeMode === 'dark';
    const particles = particlesRef.current;

    const animate = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      const sphereCx = w * 0.76;
      const sphereCy = h * 0.52;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const distToCenter = Math.sqrt((mx - sphereCx) ** 2 + (my - sphereCy) ** 2);
      const isNearSphere = distToCenter < SPHERE_RADIUS;

      if (isNearSphere) {
        const mdx = mouseDeltaRef.current.dx;
        const mdy = mouseDeltaRef.current.dy;
        mouseDeltaRef.current.dx = 0;
        mouseDeltaRef.current.dy = 0;

        const speed = Math.sqrt(mdx * mdx + mdy * mdy);

        if (speed > 0.5) {
          const factor = Math.min(speed, 80) * MOUSE_DRAG;
          const nx = mdx / speed;
          const ny = mdy / speed;

          velRef.current.y += nx * factor;
          velRef.current.x += ny * factor;
        }
      } else {
        mouseDeltaRef.current.dx = 0;
        mouseDeltaRef.current.dy = 0;
      }

      velRef.current.x *= FRICTION;
      velRef.current.y *= FRICTION;

      rotRef.current.y += BASE_ROTATION_SPEED + velRef.current.y;
      rotRef.current.x += velRef.current.x;

      const rotY = rotRef.current.y;
      const rotX = rotRef.current.x;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      ctx.clearRect(0, 0, w, h);

      const projected: { sx: number; sy: number; depth: number; dotSize: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        let rx = p.baseX * cosY - p.baseZ * sinY;
        let rz = p.baseX * sinY + p.baseZ * cosY;
        const ry = p.baseY * cosX - rz * sinX;
        rz = p.baseY * sinX + rz * cosX;

        const scale = PERSPECTIVE / (PERSPECTIVE + rz);
        const sx = sphereCx + rx * scale;
        const sy = sphereCy + ry * scale;

        const dotSize = DOT_SIZE_BASE * scale;
        const depth = (rz + SPHERE_RADIUS) / (2 * SPHERE_RADIUS);

        projected.push({ sx, sy, depth, dotSize });
      }

      projected.sort((a, b) => b.depth - a.depth);

      const BUCKETS_COUNT = 16;
      const buckets: typeof projected[] = Array.from({ length: BUCKETS_COUNT }, () => []);

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const bIndex = Math.max(0, Math.min(Math.floor((1 - p.depth) * BUCKETS_COUNT), BUCKETS_COUNT - 1));
        buckets[bIndex].push(p);
      }

      for (let b = 0; b < BUCKETS_COUNT; b++) {
        const list = buckets[b];
        if (list.length === 0) continue;

        const alpha = 0.08 + ((b + 0.5) / BUCKETS_COUNT) * 0.85;
        ctx.fillStyle = isDark
          ? `rgba(220, 240, 245, ${alpha})`
          : `rgba(30, 30, 35, ${alpha})`;

        ctx.beginPath();
        for (let j = 0; j < list.length; j++) {
          const { sx, sy, dotSize } = list[j];
          ctx.moveTo(sx + dotSize, sy);
          ctx.arc(sx, sy, dotSize, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateSize);
    };
  }, [themeMode, isMounted]);

  if (!isMounted || isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}
    />
  );
};

export default InteractiveOrb;
