'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  PageWrapper,
  PageTitleWrapper,
  PageTag,
  PageHeading,
  PageDescription,
} from '@/components/Pages/global';
import { CASE_STUDIES } from '@/config/cases';
import {
  CasesGrid,
  CaseCard,
  CaseHeader,
  CaseIconWrap,
  CaseTitle,
  CaseSection,
  SectionLabel,
  SectionText,
  MetricGrid,
  MetricCard,
  MetricValue,
  MetricLabel,
  CaseTags,
  CaseTag,
} from './styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const CasesPage = () => {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <PageTitleWrapper>
        <PageTag
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('cases.page.tag' as Parameters<typeof t>[0])}
        </PageTag>
        <PageHeading
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.04 }}
        >
          {t('cases.page.title' as Parameters<typeof t>[0])}
        </PageHeading>
        <PageDescription
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45, ease: 'easeOut' }}
        >
          {t('cases.page.subtitle' as Parameters<typeof t>[0])}
        </PageDescription>
      </PageTitleWrapper>

      <CasesGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {CASE_STUDIES.map((cs) => {
          const Icon = cs.icon;
          return (
            <CaseCard
              key={cs.id}
              $accentColor={cs.accentColor}
              variants={cardVariants}
            >
              <CaseHeader>
                <CaseIconWrap $accentColor={cs.accentColor}>
                  <Icon size={22} />
                </CaseIconWrap>
                <CaseTitle>
                  {t(cs.titleKey as Parameters<typeof t>[0])}
                </CaseTitle>
              </CaseHeader>

              <MetricGrid>
                {cs.metrics.map((m) => (
                  <MetricCard key={m.labelKey} $accentColor={cs.accentColor}>
                    <MetricValue $accentColor={cs.accentColor}>
                      {m.value}
                    </MetricValue>
                    <MetricLabel>
                      {t(m.labelKey as Parameters<typeof t>[0])}
                    </MetricLabel>
                  </MetricCard>
                ))}
              </MetricGrid>

              <CaseSection>
                <SectionLabel $accentColor={cs.accentColor}>
                  {t('cases.section.problem' as Parameters<typeof t>[0])}
                </SectionLabel>
                <SectionText>
                  {t(cs.problemKey as Parameters<typeof t>[0])}
                </SectionText>
              </CaseSection>

              <CaseSection>
                <SectionLabel $accentColor={cs.accentColor}>
                  {t('cases.section.approach' as Parameters<typeof t>[0])}
                </SectionLabel>
                <SectionText>
                  {t(cs.approachKey as Parameters<typeof t>[0])}
                </SectionText>
              </CaseSection>

              <CaseSection>
                <SectionLabel $accentColor={cs.accentColor}>
                  {t('cases.section.result' as Parameters<typeof t>[0])}
                </SectionLabel>
                <SectionText>
                  {t(cs.resultKey as Parameters<typeof t>[0])}
                </SectionText>
              </CaseSection>

              <CaseTags>
                {cs.tags.map((tag) => (
                  <CaseTag key={tag} $accentColor={cs.accentColor}>
                    {tag}
                  </CaseTag>
                ))}
              </CaseTags>
            </CaseCard>
          );
        })}
      </CasesGrid>
    </PageWrapper>
  );
};

export default CasesPage;
