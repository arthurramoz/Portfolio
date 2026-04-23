'use client';

import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import { LuCopyright } from 'react-icons/lu';
import { useLanguage } from '@/contexts/LanguageContext';
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
  SocialLink,
  SocialRow,
} from './styles';

const NAV_LINKS = [
  { key: 'nav.home' as const, id: 'home' },
  { key: 'nav.about' as const, id: 'sobre-mim' },
  { key: 'nav.projects' as const, id: 'projetos' },
  { key: 'nav.courses' as const, id: 'cursos' },
];

const Footer = () => {
  const { t } = useLanguage();

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterBrand>
          <BrandName>Arthur Ramos</BrandName>
          <BrandDescription>
            Software Engineer & Full Stack — construindo produtos digitais modernos, do design à arquitetura. Focado em React, Next.js e TypeScript.
          </BrandDescription>
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
          {NAV_LINKS.map(({ key, id }) => (
            <FooterLink key={id} onClick={() => handleNavClick(id)}>
              {t(key)}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>{t('footer.contact')}</ColumnTitle>
          <ContactItem>
            <FiMail size={15} />
            arthurmoreiraramos550sp@gmail.com
          </ContactItem>
          <ContactItem>
            <FiPhone size={15} />
            (11) 94100-6962
          </ContactItem>
        </FooterColumn>
      </FooterContent>

      <Divider />

      <BottomRow>
        <LuCopyright size={14} />
        <span>{new Date().getFullYear()} Arthur Ramos. {t('footer.copyright')}</span>
      </BottomRow>
    </FooterContainer>
  );
};

export default Footer;
