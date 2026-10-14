'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { FiDownload, FiChevronDown } from 'react-icons/fi';
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
  ResumeDropdown,
  ResumeOption,
  ResumeOptionFlag,
  ResumeOptionInfo,
  ResumeOptionTitle,
  ResumeOptionMeta,
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
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resumeRef.current &&
        !resumeRef.current.contains(event.target as Node)
      ) {
        setIsResumeOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsResumeOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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

              <ResumeWrapper ref={resumeRef}>
                <ResumeButton
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isResumeOpen}
                  aria-label={t('hero.btn.resume' as Parameters<typeof t>[0])}
                  onClick={() => setIsResumeOpen(prev => !prev)}
                >
                  <FiDownload size={16} aria-hidden="true" />
                  {t('hero.btn.resume' as Parameters<typeof t>[0])}
                  <FiChevronDown
                    size={14}
                    aria-hidden="true"
                    style={{
                      transform: isResumeOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      opacity: 0.7,
                    }}
                  />
                </ResumeButton>

                <AnimatePresence>
                  {isResumeOpen && (
                    <ResumeDropdown
                      initial={{ opacity: 0, y: 6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <ResumeOption
                        href="/resume/Arthur%20Moreira%20Ramos.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsResumeOpen(false)}
                      >
                        <ResumeOptionFlag
                          src="https://flagcdn.com/w40/br.png"
                          alt="Bandeira do Brasil"
                          width={20}
                          height={15}
                        />
                        <ResumeOptionInfo>
                          <ResumeOptionTitle>
                            {t('hero.btn.resume.pt' as Parameters<typeof t>[0])}
                          </ResumeOptionTitle>
                          <ResumeOptionMeta>PDF • PT-BR</ResumeOptionMeta>
                        </ResumeOptionInfo>
                        <FiDownload size={14} style={{ opacity: 0.5 }} aria-hidden="true" />
                      </ResumeOption>

                      <ResumeOption
                        href="/resume/Arthur%20Moreira%20Ramos%20English.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsResumeOpen(false)}
                      >
                        <ResumeOptionFlag
                          src="https://flagcdn.com/w40/us.png"
                          alt="US Flag"
                          width={20}
                          height={15}
                        />
                        <ResumeOptionInfo>
                          <ResumeOptionTitle>
                            {t('hero.btn.resume.en' as Parameters<typeof t>[0])}
                          </ResumeOptionTitle>
                          <ResumeOptionMeta>PDF • EN-US</ResumeOptionMeta>
                        </ResumeOptionInfo>
                        <FiDownload size={14} style={{ opacity: 0.5 }} aria-hidden="true" />
                      </ResumeOption>
                    </ResumeDropdown>
                  )}
                </AnimatePresence>
              </ResumeWrapper>
            </Actions>
          </InfoBlock>
        </TextBlock>
      </Content>
    </Section>
  );
};

export default Hero;
