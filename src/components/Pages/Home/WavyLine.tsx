'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import styled from 'styled-components';

const WavyContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const CENTER_PATH = 'M1200,-600 Q850,800 650,1600 Q450,2400 -100,3400';

const WavyLine = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const [mounted, setMounted] = useState(false);

  const coreRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const setup = (el: SVGPathElement | null) => {
      if (!el) return null;
      const len = el.getTotalLength();
      const dash = 100;
      const gap = (len / 1) - dash;
      el.style.strokeDasharray = `${dash} ${gap}`;
      el.style.strokeDashoffset = '0';
      return { total: dash + gap };
    };

    const coreInfo = setup(coreRef.current);
    const glowInfo = setup(glowRef.current);

    let offset = 0;
    let raf: number;

    const tick = () => {
      offset -= 1;
      if (coreRef.current && coreInfo) {
        coreRef.current.style.strokeDashoffset = `${offset % -coreInfo.total}`;
      }
      if (glowRef.current && glowInfo) {
        glowRef.current.style.strokeDashoffset = `${offset % -glowInfo.total}`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <WavyContainer>
      <motion.svg
        viewBox="-200 -300 1400 3600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          y,
        }}
      >
        <defs>
          <filter id="comet-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          ref={glowRef}
          d={CENTER_PATH}
          stroke="white"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.08"
          filter="url(#comet-glow)"
        />

        <path
          ref={coreRef}
          d={CENTER_PATH}
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.5"
        />
      </motion.svg>
    </WavyContainer>
  );
};

export default WavyLine;
