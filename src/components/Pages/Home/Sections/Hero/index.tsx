'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Actions,
  ArrowDownIcon,
  Content,
  Description,
  Greeting,
  IllustrationBlock,
  Name,
  PrimaryButton,
  Role,
  SecondaryButton,
  Section,
  TextBlock,
} from './styles';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <Section>
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
            <Role>{t('hero.role')}</Role>
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
                  const next = document.getElementById('next-section');
                  next?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero.btn.primary')}
                <ArrowDownIcon size={18} />
              </PrimaryButton>
              <SecondaryButton>{t('hero.btn.secondary')}</SecondaryButton>
            </Actions>
          </motion.div>
        </TextBlock>

        <IllustrationBlock>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/elements/about-me.svg"
                alt="Ilustração de desenvolvedor"
                width={700}
                height={700}
                priority
              />
            </motion.div>
          </motion.div>
        </IllustrationBlock>
      </Content>
    </Section>
  );
};

export default Hero;
