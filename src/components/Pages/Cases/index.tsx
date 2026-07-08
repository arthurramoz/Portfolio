'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiChevronDown } from 'react-icons/fi';
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
  CaseHeader,
  CaseHeaderTop,
  CaseIconWrap,
  CaseHeaderText,
  CaseTitle,
  CaseSubtitle,
  CaseHeaderMeta,
  CaseTags,
  CaseTag,
  MetricRow,
  MetricItem,
  MetricValue,
  MetricLabel,
  ExpandButton,
  CaseBody,
  CaseBodyInner,
  StoryTimeline,
  StoryStep,
  StepNumber,
  StepLabel,
  StepText,
} from './styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const STEPS = [
  { labelKey: 'cases.section.problem', num: '01' },
  { labelKey: 'cases.section.approach', num: '02' },
  { labelKey: 'cases.section.result', num: '03' },
] as const;

const CasesPage = () => {
  const { t } = useLanguage();
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

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
          const isExpanded = expandedIds.has(cs.id);
          const textKeys = [cs.problemKey, cs.approachKey, cs.resultKey];

          return (
            <CaseCard
              key={cs.id}
              $accentColor={cs.accentColor}
              variants={cardVariants}
            >
              {/* ── Compact Header ── */}
              <CaseHeader onClick={() => toggleExpand(cs.id)}>
                <CaseHeaderTop>
                  <CaseIconWrap $accentColor={cs.accentColor}>
                    <Icon size={20} />
                  </CaseIconWrap>
                  <CaseHeaderText>
                    <CaseTitle>
                      {t(cs.titleKey as Parameters<typeof t>[0])}
                    </CaseTitle>
                    <CaseSubtitle>
                      {t(cs.problemKey as Parameters<typeof t>[0])}
                    </CaseSubtitle>
                  </CaseHeaderText>
                </CaseHeaderTop>

                <CaseHeaderMeta>
                  <CaseTags>
                    {cs.tags.slice(0, 5).map((tag) => (
                      <CaseTag key={tag} $accentColor={cs.accentColor}>
                        {tag}
                      </CaseTag>
                    ))}
                    {cs.tags.length > 5 && (
                      <CaseTag $accentColor={cs.accentColor}>
                        +{cs.tags.length - 5}
                      </CaseTag>
                    )}
                  </CaseTags>
                </CaseHeaderMeta>
              </CaseHeader>

              {/* ── Metrics (always visible) ── */}
              <MetricRow>
                {cs.metrics.map((m) => (
                  <MetricItem key={m.labelKey} $accentColor={cs.accentColor}>
                    <MetricValue $accentColor={cs.accentColor}>
                      {t(m.valueKey as Parameters<typeof t>[0])}
                    </MetricValue>
                    <MetricLabel>
                      {t(m.labelKey as Parameters<typeof t>[0])}
                    </MetricLabel>
                  </MetricItem>
                ))}
              </MetricRow>

              {/* ── Expanded Body ── */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <CaseBody
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.3, delay: 0.1 },
                    }}
                  >
                    <CaseBodyInner>
                      <StoryTimeline>
                        {STEPS.map((step, i) => (
                          <StoryStep
                            key={step.num}
                            $accentColor={cs.accentColor}
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
                    </CaseBodyInner>
                  </CaseBody>
                )}
              </AnimatePresence>

              {/* ── Expand/Collapse Toggle ── */}
              <ExpandButton
                $accentColor={cs.accentColor}
                onClick={() => toggleExpand(cs.id)}
              >
                {isExpanded
                  ? t('cases.btn.collapse' as Parameters<typeof t>[0])
                  : t('cases.btn.expand' as Parameters<typeof t>[0])}
                <FiChevronDown
                  size={16}
                  style={{
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </ExpandButton>
            </CaseCard>
          );
        })}
      </CasesGrid>
    </PageWrapper>
  );
};

export default CasesPage;
