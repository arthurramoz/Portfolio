'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useAccessibility } from '@/contexts/AccessibilityContext';
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
  InfoBlock,
} from './styles';

const Hero = () => {
  const { t } = useLanguage();
  const { reduceAnimations } = useAccessibility();

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
            </Actions>
          </InfoBlock>
        </TextBlock>
      </Content>
    </Section>
  );
};

export default Hero;
