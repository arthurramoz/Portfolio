'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppTheme } from '@/contexts/ThemeContext';

const C_LEFT = [72, 202, 228];
const C_RIGHT = [251, 111, 146];

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const { themeMode } = useAppTheme();
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isNarrow = window.innerWidth < 1024;
    if (hasTouch || isNarrow) return;
    setIsMobile(false);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const animate = () => {
      const lerp = 0.08;
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * lerp;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * lerp;

      if (glowRef.current) {
        const x = currentRef.current.x;
        const y = currentRef.current.y + window.scrollY;
        const w = window.innerWidth;

        const t = Math.min(Math.max(x / w, 0), 1);
        const r = (C_LEFT[0] + (C_RIGHT[0] - C_LEFT[0]) * t) | 0;
        const g = (C_LEFT[1] + (C_RIGHT[1] - C_LEFT[1]) * t) | 0;
        const b = (C_LEFT[2] + (C_RIGHT[2] - C_LEFT[2]) * t) | 0;

        const distFromCenter = Math.abs(x - w / 2) / (w / 2);
        const radius = 400 + distFromCenter * 400;

        const isDark = glowRef.current.dataset.dark === '1';
        const a1 = isDark ? 0.06 : 0.08;
        const a2 = isDark ? 0.02 : 0.03;

        glowRef.current.style.background =
          `radial-gradient(${radius}px circle at ${x}px ${y}px, ` +
          `rgba(${r}, ${g}, ${b}, ${a1}), ` +
          `rgba(${r}, ${g}, ${b}, ${a2}) 50%, ` +
          `transparent 70%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={glowRef}
      data-dark={themeMode === 'dark' ? '1' : '0'}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default CursorGlow;
