'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  PageWrapper,
  PageTitleWrapper,
  PageHeading,
  PageDescription,
} from '@/components/Pages/global';
import { CASE_STUDIES } from '@/config/cases';
import {
  CasesGrid,
  CaseCard,
  CaseHero,
  CaseIconWrap,
  CaseHeroText,
  CaseTitle,
  CaseSubtitle,
  CaseTags,
  CaseTag,
  CaseBody,
  StoryTimeline,
  StoryStep,
  StepNumber,
  StepLabel,
  StepText,
  MetricStrip,
  MetricItem,
  MetricValue,
  MetricLabel,
} from './styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const STEPS = [
  { labelKey: 'cases.section.problem', num: '01' },
  { labelKey: 'cases.section.approach', num: '02' },
  { labelKey: 'cases.section.result', num: '03' },
] as const;

const CasesPage = () => {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <PageTitleWrapper>
        <PageDescription
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('cases.page.tag' as Parameters<typeof t>[0])}
        </PageDescription>
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
          const textKeys = [cs.problemKey, cs.approachKey, cs.resultKey];

          return (
            <CaseCard
              key={cs.id}
              $accentColor={cs.accentColor}
              variants={cardVariants}
            >
              <CaseHero $accentColor={cs.accentColor}>
                <CaseIconWrap $accentColor={cs.accentColor}>
                  <Icon size={24} />
                </CaseIconWrap>
                <CaseHeroText>
                  <CaseTitle>
                    {t(cs.titleKey as Parameters<typeof t>[0])}
                  </CaseTitle>
                  <CaseSubtitle>
                    {t(cs.problemKey as Parameters<typeof t>[0]).slice(0, 120)}…
                  </CaseSubtitle>
                  <CaseTags>
                    {cs.tags.map((tag) => (
                      <CaseTag key={tag} $accentColor={cs.accentColor}>
                        {tag}
                      </CaseTag>
                    ))}
                  </CaseTags>
                </CaseHeroText>
              </CaseHero>

              <CaseBody>
                <StoryTimeline>
                  {STEPS.map((step, i) => (
                    <StoryStep
                      key={step.num}
                      $accentColor={cs.accentColor}
                      $isLast={i === STEPS.length - 1}
                      custom={i}
                      variants={stepVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-40px' }}
                    >
                      <StepNumber $accentColor={cs.accentColor}>
                        {step.num}
                      </StepNumber>
                      <StepLabel $accentColor={cs.accentColor}>
                        {t(step.labelKey as Parameters<typeof t>[0])}
                      </StepLabel>
                      <StepText>
                        {t(textKeys[i] as Parameters<typeof t>[0])}
                      </StepText>
                    </StoryStep>
                  ))}
                </StoryTimeline>
              </CaseBody>

              <MetricStrip>
                {cs.metrics.map((m) => (
                  <MetricItem key={m.labelKey} $accentColor={cs.accentColor}>
                    <MetricValue $accentColor={cs.accentColor}>
                      {m.value}
                    </MetricValue>
                    <MetricLabel>
                      {t(m.labelKey as Parameters<typeof t>[0])}
                    </MetricLabel>
                  </MetricItem>
                ))}
              </MetricStrip>
            </CaseCard>
          );
        })}
      </CasesGrid>
    </PageWrapper>
  );
};

export default CasesPage;
