'use client';

import { useEffect, useRef, useState } from 'react';
import { Dot, Ring } from './styles';
import { useCursor } from '@/contexts/CursorContext';

const HOVER_SELECTORS = 'a, button, [role="button"], input, textarea, select, label';

const CustomCursor = () => {
  const { cursorMode } = useCursor();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isNarrow = window.innerWidth < 1024;
    if (hasTouch || isNarrow) return;
    setIsMobile(false);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let isHovering = false;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const hovering = !!target?.closest(HOVER_SELECTORS);

      if (hovering !== isHovering) {
        isHovering = hovering;
        if (!dotRef.current || !ringRef.current) return;
        if (hovering) {
          dotRef.current.style.width = '6px';
          dotRef.current.style.height = '6px';
          dotRef.current.style.opacity = '0.6';
          ringRef.current.style.width = '32px';
          ringRef.current.style.height = '32px';
          ringRef.current.style.opacity = '0.8';
        } else {
          dotRef.current.style.width = '10px';
          dotRef.current.style.height = '10px';
          dotRef.current.style.opacity = '1';
          ringRef.current.style.width = '20px';
          ringRef.current.style.height = '20px';
          ringRef.current.style.opacity = '0.5';
        }
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.5;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.5;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.3;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.3;

      if (dotRef.current) {
        const dw = dotRef.current.offsetWidth / 2;
        dotRef.current.style.transform =
          `translate3d(${dotPos.current.x - dw}px, ${dotPos.current.y - dw}px, 0)`;
      }
      if (ringRef.current) {
        const rw = ringRef.current.offsetWidth / 2;
        ringRef.current.style.transform =
          `translate3d(${ringPos.current.x - rw}px, ${ringPos.current.y - rw}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, visible]);

  if (isMobile || cursorMode === 'default') return null;

  return (
    <>
      <Dot
        ref={dotRef}
        style={{ opacity: visible ? 1 : 0 }}
      />
      <Ring
        ref={ringRef}
        style={{ opacity: visible ? 0.5 : 0 }}
      />
    </>
  );
};

export default CustomCursor;
