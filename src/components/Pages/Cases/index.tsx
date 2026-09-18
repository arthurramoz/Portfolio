'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiChevronDown, FiAlertCircle, FiCpu, FiTrendingUp } from 'react-icons/fi';
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
  CaseDomainBadge,
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
  StepHeader,
  StepIconWrap,
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
  { labelKey: 'cases.section.problem', num: '01', icon: FiAlertCircle, type: 'problem' as const },
  { labelKey: 'cases.section.approach', num: '02', icon: FiCpu, type: 'solution' as const },
  { labelKey: 'cases.section.result', num: '03', icon: FiTrendingUp, type: 'result' as const },
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
              <CaseHeader onClick={() => toggleExpand(cs.id)}>
                <CaseHeaderTop>
                  <CaseIconWrap $accentColor={cs.accentColor}>
                    <Icon size={22} />
                  </CaseIconWrap>
                  <CaseHeaderText>
                    <CaseDomainBadge $accentColor={cs.accentColor}>
                      {t(cs.domainKey as Parameters<typeof t>[0])}
                    </CaseDomainBadge>
                    <CaseTitle>
                      {t(cs.titleKey as Parameters<typeof t>[0])}
                    </CaseTitle>
                    <CaseSubtitle>
                      {t(cs.summaryKey as Parameters<typeof t>[0])}
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

              <MetricRow>
                {cs.metrics.map((m) => (
                  <MetricItem key={m.labelKey} $accentColor={cs.accentColor}>
                    <MetricLabel>
                      {t(m.labelKey as Parameters<typeof t>[0])}
                    </MetricLabel>
                    <MetricValue $accentColor={cs.accentColor}>
                      {t(m.valueKey as Parameters<typeof t>[0])}
                    </MetricValue>
                  </MetricItem>
                ))}
              </MetricRow>

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
                        {STEPS.map((step, i) => {
                          const StepIcon = step.icon;
                          return (
                            <StoryStep
                              key={step.num}
                              $accentColor={cs.accentColor}
                              $type={step.type}
                            >
                              <StepHeader>
                                <StepIconWrap $accentColor={cs.accentColor}>
                                  <StepIcon size={14} />
                                </StepIconWrap>
                                <StepLabel $accentColor={cs.accentColor}>
                                  {t(step.labelKey as Parameters<typeof t>[0])}
                                </StepLabel>
                              </StepHeader>
                              <StepText>
                                {t(textKeys[i] as Parameters<typeof t>[0])}
                              </StepText>
                            </StoryStep>
                          );
                        })}
                      </StoryTimeline>
                    </CaseBodyInner>
                  </CaseBody>
                )}
              </AnimatePresence>

              <ExpandButton
                $accentColor={cs.accentColor}
                onClick={() => toggleExpand(cs.id)}
              >
                <span>
                  {isExpanded
                    ? t('cases.btn.collapse' as Parameters<typeof t>[0])
                    : t('cases.btn.expand' as Parameters<typeof t>[0])}
                </span>
                <FiChevronDown
                  size={18}
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
