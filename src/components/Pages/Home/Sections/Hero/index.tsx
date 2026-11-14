'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { FiDownload, FiMapPin, FiGlobe } from 'react-icons/fi';
import { VISIBLE_PROJECTS_COUNT } from '@/config/projects';
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
  Facts,
  Fact,
  Availability,
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
          <Greeting>{t('hero.greeting')}</Greeting>

          <Name>Arthur Moreira Ramos</Name>

          <InfoBlock>
            <Description>{t('hero.description')}</Description>

            <Availability>
              <StatusDot aria-hidden="true" />
              {t('hero.status' as Parameters<typeof t>[0])}
            </Availability>

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

            <Facts>
              <Fact>
                <strong>3+</strong>
                {t('projects.impact.years' as Parameters<typeof t>[0])}
              </Fact>
              <Fact>
                <strong>{VISIBLE_PROJECTS_COUNT}+</strong>
                {t('projects.impact.total' as Parameters<typeof t>[0])}
              </Fact>
              <Fact>
                <FiMapPin size={14} aria-hidden="true" />
                {t('hero.fact.location' as Parameters<typeof t>[0])}
              </Fact>
              <Fact>
                <FiGlobe size={14} aria-hidden="true" />
                {t('hero.fact.english' as Parameters<typeof t>[0])}
              </Fact>
            </Facts>
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
