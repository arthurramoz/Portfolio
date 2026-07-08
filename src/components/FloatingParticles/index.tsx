'use client';

import { motion } from 'motion/react';
import styled from 'styled-components';

const ParticleWrapper = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

/* Brilhinho: radial-gradient do centro branco → cor → transparente, com blur suave */
const Sparkle = styled(motion.div)<{ $size: number; $color: string }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    #ffffff 0%,
    ${({ $color }) => $color} 40%,
    transparent 70%
  );
  filter: blur(${({ $size }) => Math.max(1, $size * 0.6)}px);
  box-shadow:
    0 0 ${({ $size }) => $size * 2}px ${({ $color }) => $color},
    0 0 ${({ $size }) => $size * 5}px ${({ $color }) => $color}55;
  will-change: transform, opacity;
`;

/* primary1 = #48cae4 (ciano), secondary1 = #fb6f92 (rosa) */
const SPARKLES = [
  { id: 1,  top: '6%',  left: '12%', size: 6,  color: '#48cae4', dur: 18, delay: 0,   dx: [0, 180, -60, 220, 0],  dy: [0, -80, 160, -120, 0]  },
  { id: 2,  top: '18%', left: '78%', size: 5,  color: '#fb6f92', dur: 22, delay: 3,   dx: [0, -200, 60, -150, 0], dy: [0, 100, -60, 180, 0]   },
  { id: 3,  top: '50%', left: '25%', size: 7,  color: '#48cae4', dur: 16, delay: 1,   dx: [0, 140, -100, 80, 0],  dy: [0, -120, 140, -80, 0]  },
  { id: 4,  top: '78%', left: '65%', size: 5,  color: '#fb6f92', dur: 24, delay: 5,   dx: [0, -80, 60, -160, 0],  dy: [0, -180, 100, -140, 0] },
  { id: 5,  top: '32%', left: '90%', size: 6,  color: '#48cae4', dur: 20, delay: 2,   dx: [0, -160, -320, -100, 0], dy: [0, 60, -140, 180, 0]  },
  { id: 6,  top: '68%', left: '8%',  size: 5,  color: '#fb6f92', dur: 26, delay: 6,   dx: [0, 220, 100, 320, 0],  dy: [0, -60, 140, -100, 0]  },
  { id: 7,  top: '12%', left: '48%', size: 4,  color: '#fb6f92', dur: 19, delay: 1.5, dx: [0, 60, -180, 40, 0],   dy: [0, 160, -80, 200, 0]   },
  { id: 8,  top: '88%', left: '38%', size: 6,  color: '#48cae4', dur: 23, delay: 7,   dx: [0, -100, 180, -60, 0], dy: [0, -220, 70, -160, 0]  },
  { id: 9,  top: '42%', left: '55%', size: 4,  color: '#fb6f92', dur: 17, delay: 4,   dx: [0, 100, -80, 150, 0],  dy: [0, -100, 120, -80, 0]  },
  { id: 10, top: '4%',  left: '62%', size: 5,  color: '#48cae4', dur: 21, delay: 0.5, dx: [0, -60, 120, 40, 0],   dy: [0, 180, -100, 140, 0]  },
  { id: 11, top: '60%', left: '82%', size: 6,  color: '#48cae4', dur: 25, delay: 8,   dx: [0, -140, -80, -200, 0], dy: [0, -100, 80, -180, 0] },
  { id: 12, top: '25%', left: '5%',  size: 4,  color: '#fb6f92', dur: 18, delay: 3.5, dx: [0, 240, 100, 300, 0],  dy: [0, 80, -120, 40, 0]    },
];

export const FloatingParticles = () => {
  return (
    <ParticleWrapper>
      {SPARKLES.map((p) => (
        <Sparkle
          key={p.id}
          $size={p.size}
          $color={p.color}
          style={{ top: p.top, left: p.left }}
          animate={{
            x: p.dx,
            y: p.dy,
            opacity: [0, 0.9, 0.5, 1, 0],
            scale: [0.6, 1.4, 0.8, 1.6, 0.6],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </ParticleWrapper>
  );
};

export default FloatingParticles;
