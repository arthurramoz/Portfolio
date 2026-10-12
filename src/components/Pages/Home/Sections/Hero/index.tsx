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

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Section id="home">
      {!reduceAnimations && <InteractiveOrb />}
      <Content>
        <TextBlock>
          <Greeting>{t('hero.greeting')}</Greeting>

          <Name>Arthur Moreira Ramos</Name>

          <InfoBlock>
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

              <ResumeWrapper ref={resumeRef}>
                <ResumeButton
                  type="button"
                  onClick={() => setIsResumeOpen(prev => !prev)}
                >
                  <FiDownload size={16} />
                  {t('hero.btn.resume' as Parameters<typeof t>[0])}
                  <FiChevronDown
                    size={14}
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
                          alt="BR"
                        />
                        <ResumeOptionInfo>
                          <ResumeOptionTitle>
                            {t('hero.btn.resume.pt' as Parameters<typeof t>[0])}
                          </ResumeOptionTitle>
                          <ResumeOptionMeta>PDF • PT-BR</ResumeOptionMeta>
                        </ResumeOptionInfo>
                        <FiDownload size={14} style={{ opacity: 0.5 }} />
                      </ResumeOption>

                      <ResumeOption
                        href="/resume/Arthur%20Moreira%20Ramos%20English.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsResumeOpen(false)}
                      >
                        <ResumeOptionFlag
                          src="https://flagcdn.com/w40/us.png"
                          alt="US"
                        />
                        <ResumeOptionInfo>
                          <ResumeOptionTitle>
                            {t('hero.btn.resume.en' as Parameters<typeof t>[0])}
                          </ResumeOptionTitle>
                          <ResumeOptionMeta>PDF • EN-US</ResumeOptionMeta>
                        </ResumeOptionInfo>
                        <FiDownload size={14} style={{ opacity: 0.5 }} />
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
