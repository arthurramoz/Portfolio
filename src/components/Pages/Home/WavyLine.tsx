'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import styled, { keyframes, useTheme } from 'styled-components';

const drip = keyframes`
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -400; }
`;

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

const EdgePath = styled.path`
  animation: ${drip} 2s linear infinite;
`;

const EDGE_LEFT = 'M1410,-57 Q1110,843 810,1643 Q510,2443 -190,3343';
const EDGE_RIGHT = 'M1590,-143 Q1290,757 990,1557 Q690,2357 -10,3257';

const WavyLine = () => {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const c1 = theme.colors.primary1;

  return (
    <WavyContainer>
      <motion.svg
        viewBox="0 0 1440 3200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: '-5%',
          left: 0,
          width: '100%',
          height: '110%',
          y,
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1s ease',
        }}
      >
        <EdgePath
          d={EDGE_LEFT}
          stroke={c1}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
          strokeDasharray="60 340"
        />

        <EdgePath
          d={EDGE_RIGHT}
          stroke={c1}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
          strokeDasharray="60 340"
        />
      </motion.svg>
    </WavyContainer>
  );
};

export default WavyLine;
