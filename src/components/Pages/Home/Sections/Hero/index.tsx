'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { FiDownload } from 'react-icons/fi';
import ResumeModal from '@/components/ResumeModal';
import InteractiveOrb from './InteractiveOrb';
import {
  Actions,
  ArrowDownIcon,
  Content,
  Description,
  Greeting,
  Name,
  PrimaryButton,
  ResumeWrapper,
  ResumeButton,
  SecondaryButton,
  Section,
  TextBlock,
  InfoBlock,
  StatusBadge,
  StatusDot,
} from './styles';

const Hero = () => {
  const { t } = useLanguage();
  const { reduceAnimations } = useAccessibility();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <Section id="home">
      {!reduceAnimations && <InteractiveOrb />}
      <Content>
        <TextBlock>
          <StatusBadge
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <StatusDot aria-hidden="true" />
            <span>{t('hero.status' as Parameters<typeof t>[0])}</span>
          </StatusBadge>

          <Greeting>{t('hero.greeting')}</Greeting>

          <Name>Arthur Moreira Ramos</Name>

          <InfoBlock>
            <Description>{t('hero.description')}</Description>

            <Actions>
              <PrimaryButton href="/contato">
                {t('hero.btn.primary')}
                <ArrowDownIcon size={18} aria-hidden="true" />
              </PrimaryButton>

              <SecondaryButton href="/cases">
                {t('hero.btn.secondary')}
              </SecondaryButton>

              <ResumeWrapper>
                <ResumeButton
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded={isResumeModalOpen}
                  aria-label={t('hero.btn.resume' as Parameters<typeof t>[0])}
                  onClick={() => setIsResumeModalOpen(true)}
                >
                  <FiDownload size={16} aria-hidden="true" />
                  {t('hero.btn.resume' as Parameters<typeof t>[0])}
                </ResumeButton>
              </ResumeWrapper>
            </Actions>
          </InfoBlock>
        </TextBlock>
      </Content>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </Section>
  );
};

export default Hero;
