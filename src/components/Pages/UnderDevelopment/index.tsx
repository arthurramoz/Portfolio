'use client';

import { motion, type Easing } from 'motion/react';
import {
  WipBadge,
  WipDivider,
  WipDot,
  WipLogo,
  WipSubtitle,
  WipTitle,
  WipWrapper,
} from './styles';

const EASE: Easing = 'easeOut';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: EASE },
});

const UnderDevelopment = () => {
  return (
    <WipWrapper>
      <motion.div {...fade(0)}>
        <WipLogo src="/logo.svg" alt="logo" />
      </motion.div>

      <motion.div {...fade(0.1)}>
        <WipBadge>
          <WipDot />
          Em desenvolvimento
        </WipBadge>
      </motion.div>

      <motion.div
        {...fade(0.2)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <WipTitle>
          Algo incrível
          <br />
          está chegando.
        </WipTitle>
        <WipDivider />
        <WipSubtitle>
          Estou construindo meu portfólio com muito cuidado. Em breve você vai
          poder conhecer meus projetos e trajetória.
        </WipSubtitle>
      </motion.div>
    </WipWrapper>
  );
};

export default UnderDevelopment;
