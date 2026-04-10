'use client';

import { AnimatePresence, motion, type Easing } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  AboutBio,
  AboutCard,
  AboutName,
  AboutPhoto,
  SocialLink,
  SocialLinks,
  TabBar,
  TabButton,
  TabContent,
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
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 1, ease: EASE },
});

const TABS = ['Portfolio', 'Sobre mim'] as const;
type Tab = (typeof TABS)[number];

const UnderDevelopment = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Portfolio');
  const [diffDays, setDiffDays] = useState<number | null>(null);

  useEffect(() => {
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), 6, 10);

    if (targetDate.getTime() < today.getTime()) {
      targetDate.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = targetDate.getTime() - today.getTime();
    setDiffDays(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <WipWrapper>
      <motion.div {...fade(0)}>
        <WipLogo src="/logo.svg" alt="logo" />
      </motion.div>

      <motion.div {...fade(0.05)}>
        <TabBar>
          {TABS.map(tab => (
            <TabButton
              key={tab}
              $active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </TabBar>
      </motion.div>

      <TabContent>
        <AnimatePresence mode="wait">
          {activeTab === 'Portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.35, ease: EASE }}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1.5rem',
              }}
            >
              <motion.div {...fade(0.1)}>
                <WipBadge>
                  <WipDot />
                  {diffDays !== null
                    ? `Faltam ${diffDays} dias`
                    : 'Calculando...'}
                </WipBadge>
              </motion.div>

              <WipTitle>
                O portfolio
                <br />
                está chegando.
              </WipTitle>
              <WipDivider />
              <WipSubtitle>
                Estou construindo meu portfólio com muito cuidado. Em breve você
                vai poder conhecer meus projetos e trajetória.
              </WipSubtitle>
            </motion.div>
          )}

          {activeTab === 'Sobre mim' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35, ease: EASE }}
              style={{ width: '100%' }}
            >
              <AboutCard>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
                >
                  <AboutPhoto>
                    <Image
                      src="/me/2.jpg"
                      alt="Arthur Moreira Ramos"
                      width={180}
                      height={180}
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </AboutPhoto>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
                >
                  <AboutName>Arthur Moreira Ramos</AboutName>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
                >
                  <WipDivider />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
                >
                  <AboutBio>
                    Desenvolvedor Full Stack apaixonado por criar experiências
                    digitais modernas. Em breve mais detalhes sobre minha
                    trajetória e projetos.
                  </AboutBio>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
                >
                  <SocialLinks>
                    <SocialLink
                      href="https://linkedin.com/in/arthur-moreira-ramos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </SocialLink>
                    <SocialLink
                      href="https://github.com/arthurramoz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </SocialLink>
                  </SocialLinks>
                </motion.div>
              </AboutCard>
            </motion.div>
          )}
        </AnimatePresence>
      </TabContent>
    </WipWrapper>
  );
};

export default UnderDevelopment;
