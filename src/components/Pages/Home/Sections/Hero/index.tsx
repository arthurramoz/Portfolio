'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import InteractiveOrb from './InteractiveOrb';
import {
  Actions,
  ArrowDownIcon,
  Content,
  Description,
  Greeting,
  Name,
  PrimaryButton,
  SecondaryButton,
  Section,
  TextBlock,
} from './styles';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <Section id="home">
      <InteractiveOrb />
      <Content>
        <TextBlock>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Greeting>{t('hero.greeting')}</Greeting>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Name>Arthur Moreira Ramos</Name>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Description>{t('hero.description')}</Description>

            <Actions>
              <PrimaryButton
                onClick={() => {
                  const next = document.getElementById('sobre-mim');
                  next?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero.btn.primary')}
                <ArrowDownIcon size={18} />
              </PrimaryButton>
              <SecondaryButton
                onClick={() => {
                  const el = document.getElementById('novidade');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 270;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                {t('hero.btn.secondary')}
              </SecondaryButton>
            </Actions>
          </motion.div>
        </TextBlock>
      </Content>
    </Section>
  );
};

export default Hero;
