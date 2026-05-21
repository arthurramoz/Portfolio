'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import {
  FiUser,
  FiSun,
  FiMoon,
  FiGlobe,
  FiGitBranch,
  FiArrowRight,
  FiCode,
  FiChevronDown,
  FiMousePointer,
} from 'react-icons/fi';
import { useAppTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCursor } from '@/contexts/CursorContext';
import {
  PageTitleWrapper,
  PageTag,
  PageHeading,
  PageDescription,
} from '@/components/Pages/global';
import {
  DirectRedirectCard,
  SettingsPageWrapper,
  SectionCard,
  SectionHeader,
  SectionIconWrap,
  SectionTitle,
  SectionDivider,
  AboutPreview,
  AboutPhotoWrap,
  AboutInfo,
  AboutRole,
  AboutName,
  AboutBio,
  LangCollapsibleCard,
  LangCardHeader,
  LangChevron,
  LangExpandArea,
  LangExpandInner,
  LanguageGrid,
  LanguageCard,
  LangFlag,
  LangInfo,
  LangName,
  LangNative,
  ActiveDot,
  RedirectCard,
  RedirectLeft,
  RedirectIconWrap,
  RedirectInfo,
  RedirectTitle,
  RedirectDesc,
  RedirectArrow,
} from './styles';
import Switch from '@/components/Switch';

const LANGUAGES = [
  { code: 'pt' as const, label: 'Português', native: 'PT-BR', flag: 'https://flagcdn.com/w40/br.png' },
  { code: 'en' as const, label: 'English', native: 'EN-US', flag: 'https://flagcdn.com/w40/us.png' },
  { code: 'es' as const, label: 'Español', native: 'ES', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'fr' as const, label: 'Français', native: 'FR', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'ru' as const, label: 'Русский', native: 'RU', flag: 'https://flagcdn.com/w40/ru.png' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const SettingsPage = () => {
  const router = useRouter();
  const { themeMode, toggleTheme } = useAppTheme();
  const { language, setLanguage, t } = useLanguage();
  const { cursorMode, toggleCursor } = useCursor();
  const [langOpen, setLangOpen] = useState(false);

  return (
    <SettingsPageWrapper>
      <PageTitleWrapper>
        <PageTag
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('settings.page.tag')}
        </PageTag>
        <PageHeading
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.04 }}
        >
          {t('settings.page.title')}
        </PageHeading>
        <PageDescription
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45, ease: 'easeOut' }}
        >
          {t('settings.page.subtitle')}
        </PageDescription>
      </PageTitleWrapper>

      <SectionCard custom={0} variants={cardVariants} initial="hidden" animate="visible">
        <SectionHeader>
          <SectionIconWrap><FiUser size={18} /></SectionIconWrap>
          <SectionTitle>{t('settings.about.title')}</SectionTitle>
        </SectionHeader>
        <SectionDivider />
        <AboutPreview>
          <AboutPhotoWrap>
            <Image
              src="/me/2.jpg"
              alt="Arthur Moreira Ramos"
              width={96}
              height={96}
              style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
            />
          </AboutPhotoWrap>
          <AboutInfo>
            <AboutRole>Software Engineer &amp; Full Stack</AboutRole>
            <AboutName>Arthur Moreira Ramos</AboutName>
            <AboutBio>{t('settings.about.bio')}</AboutBio>
          </AboutInfo>
        </AboutPreview>
      </SectionCard>

      <DirectRedirectCard
        custom={1}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        onClick={toggleTheme}
        id="settings-theme-toggle"
        aria-label="Toggle theme"
      >
        <RedirectLeft>
          <RedirectIconWrap>
            {themeMode === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </RedirectIconWrap>
          <RedirectInfo>
            <RedirectTitle>{t('settings.theme')}</RedirectTitle>
            <RedirectDesc>
              {themeMode === 'dark' ? t('settings.theme.dark') : t('settings.theme.light')} — {t('settings.theme.desc')}
            </RedirectDesc>
          </RedirectInfo>
        </RedirectLeft>
        <Switch active={themeMode === 'dark'} />
      </DirectRedirectCard>

      <DirectRedirectCard
        custom={2}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        onClick={toggleCursor}
        id="settings-cursor-toggle"
        aria-label="Toggle cursor"
      >
        <RedirectLeft>
          <RedirectIconWrap>
            <FiMousePointer size={20} />
          </RedirectIconWrap>
          <RedirectInfo>
            <RedirectTitle>{t('settings.cursor' as Parameters<typeof t>[0])}</RedirectTitle>
            <RedirectDesc>
              {cursorMode === 'modern'
                ? t('settings.cursor.modern' as Parameters<typeof t>[0])
                : t('settings.cursor.default' as Parameters<typeof t>[0])}
            </RedirectDesc>
          </RedirectInfo>
        </RedirectLeft>
        <Switch active={cursorMode === 'modern'} />
      </DirectRedirectCard>

      <LangCollapsibleCard
        custom={2}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <LangCardHeader onClick={() => setLangOpen(o => !o)} id="settings-language-toggle">
          <RedirectLeft>
            <RedirectIconWrap><FiGlobe size={20} /></RedirectIconWrap>
            <RedirectInfo>
              <RedirectTitle>{t('settings.language')}</RedirectTitle>
              <RedirectDesc>
                {LANGUAGES.find(l => l.code === language)?.label}
              </RedirectDesc>
            </RedirectInfo>
          </RedirectLeft>
          <LangChevron $open={langOpen}>
            <FiChevronDown size={18} />
          </LangChevron>
        </LangCardHeader>

        <AnimatePresence initial={false}>
          {langOpen && (
            <LangExpandArea
              key="lang-expand"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <LangExpandInner>
                <LanguageGrid>
                  {LANGUAGES.map(lang => (
                    <LanguageCard
                      key={lang.code}
                      $active={language === lang.code}
                      onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                    >
                      <LangFlag src={lang.flag} alt={lang.label} />
                      <LangInfo>
                        <LangName $active={language === lang.code}>{lang.label}</LangName>
                        <LangNative>{lang.native}</LangNative>
                      </LangInfo>
                      {language === lang.code && <ActiveDot />}
                    </LanguageCard>
                  ))}
                </LanguageGrid>
              </LangExpandInner>
            </LangExpandArea>
          )}
        </AnimatePresence>
      </LangCollapsibleCard>

      <DirectRedirectCard
        custom={3}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        onClick={() => router.push('/changelog')}
        id="settings-changelog-redirect"
      >
        <RedirectLeft>
          <RedirectIconWrap><FiGitBranch size={20} /></RedirectIconWrap>
          <RedirectInfo>
            <RedirectTitle>{t('settings.versions.title')}</RedirectTitle>
            <RedirectDesc>{t('changelog.description')}</RedirectDesc>
          </RedirectInfo>
        </RedirectLeft>
        <RedirectArrow><FiArrowRight size={18} /></RedirectArrow>
      </DirectRedirectCard>

      <DirectRedirectCard
        custom={4}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        onClick={() => router.push('/under-development')}
        id="settings-wip-redirect"
      >
        <RedirectLeft>
          <RedirectIconWrap><FiCode size={20} /></RedirectIconWrap>
          <RedirectInfo>
            <RedirectTitle>{t('settings.wip.title')}</RedirectTitle>
            <RedirectDesc>{t('settings.wip.desc')}</RedirectDesc>
          </RedirectInfo>
        </RedirectLeft>
        <RedirectArrow><FiArrowRight size={18} /></RedirectArrow>
      </DirectRedirectCard>
    </SettingsPageWrapper>
  );
};

export default SettingsPage;
