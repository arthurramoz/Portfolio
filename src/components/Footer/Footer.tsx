'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiPhone,
} from 'react-icons/fi';
import { LuCopyright } from 'react-icons/lu';
import { useLanguage } from '@/contexts/LanguageContext';
import { VERSION_HISTORY, CURRENT_VERSION } from '@/config/versions';
import {
  BottomRow,
  BrandDescription,
  BrandName,
  ColumnTitle,
  ContactItem,
  Divider,
  FooterBrand,
  FooterColumn,
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterSubLabel,
  SocialLink,
  SocialRow,
  VersionDate,
  VersionItem,
  VersionList,
  VersionTag,
} from './styles';

const Footer = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/home');
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterBrand>
          <BrandName>Arthur Ramos</BrandName>
          <BrandDescription>{t('footer.bio')}</BrandDescription>
          <SocialRow>
            <SocialLink
              href="https://github.com/arthurramoz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={18} />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/arthur-moreira-ramos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={18} />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/arthurmoreira.7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram size={18} />
            </SocialLink>
          </SocialRow>
        </FooterBrand>

        <FooterColumn>
          <ColumnTitle>{t('footer.navigation')}</ColumnTitle>
          <FooterLink onClick={() => handleScrollTo('home')}>
            {t('nav.home')}
          </FooterLink>

          <FooterLink onClick={() => router.push('/projetos')}>
            {t('nav.projects')}
          </FooterLink>

          <FooterSubLabel
            onClick={() => setAboutOpen(prev => !prev)}
            style={{ cursor: 'pointer' }}
          >
            {t('nav.aboutme' as Parameters<typeof t>[0])} {aboutOpen ? '−' : '+'}
          </FooterSubLabel>

          <AnimatePresence>
            {aboutOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <FooterLink onClick={() => router.push('/skills')}>
                  {t('nav.skills' as Parameters<typeof t>[0])}
                </FooterLink>
                <FooterLink onClick={() => router.push('/jornada')}>
                  {t('nav.timeline' as Parameters<typeof t>[0])}
                </FooterLink>
                <FooterLink onClick={() => router.push('/depoimentos')}>
                  {t('nav.testimonials' as Parameters<typeof t>[0])}
                </FooterLink>
                <FooterLink onClick={() => router.push('/cursos')}>
                  {t('nav.courses')}
                </FooterLink>
              </motion.div>
            )}
          </AnimatePresence>

          <FooterLink onClick={() => router.push('/cases')}>
            {t('nav.cases' as Parameters<typeof t>[0])}
          </FooterLink>
          <FooterLink onClick={() => router.push('/contato')}>
            {t('nav.cta')}
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>{t('footer.contact')}</ColumnTitle>
          <ContactItem>
            <FiMail size={15} />
            arthurmoreiraramosdev@gmail.com
          </ContactItem>
          <ContactItem>
            <FiPhone size={15} />
            (11) 94100-6962
          </ContactItem>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>{t('footer.versions')}</ColumnTitle>
          <VersionList>
            {VERSION_HISTORY.slice(0, 4).map(entry => (
              <VersionItem key={entry.version}>
                <span>{entry.version}</span>
                <VersionTag $active={entry.version === CURRENT_VERSION}>
                  {entry.label}
                </VersionTag>
                <VersionDate>{entry.date}</VersionDate>
              </VersionItem>
            ))}
          </VersionList>
          <FooterLink onClick={() => router.push('/changelog')}>
            {t('footer.changelog.viewAll')}
          </FooterLink>
        </FooterColumn>
      </FooterContent>

      <Divider />

      <BottomRow>
        <LuCopyright size={14} />
        <span>
          {new Date().getFullYear()} Arthur Ramos. {t('footer.copyright')}
        </span>
      </BottomRow>
    </FooterContainer>
  );
};

export default Footer;
