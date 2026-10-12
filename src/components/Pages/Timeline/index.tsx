'use client';

import { useMemo, useRef, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  PageWrapper,
  PageTitleWrapper,
  PageTag,
  PageHeading,
  PageDescription,
} from '@/components/Pages/global';
import {
  TIMELINE_ENTRIES,
  CATEGORY_COLORS,
  TimelineCategory,
} from '@/config/timeline';
import {
  FilterBar,
  FilterChip,
  FilterDot,
  TimelineWrapper,
  SpineTop,
  SpineRail,
  SpineBeam,
  TimelineRow,
  DateCell,
  NodeCell,
  CardCell,
  DatePill,
  PillDot,
  NodeDot,
  Card,
  CategoryTag,
  CardTitle,
  CompanyAccent,
  CardDescription,
} from './styles';

type TranslationKey = Parameters<ReturnType<typeof useLanguage>['t']>[0];

const CATEGORIES: TimelineCategory[] = ['work', 'milestone', 'education'];

const EASE = [0.16, 1, 0.3, 1] as const;

const rowVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: EASE },
  },
};

const splitTitle = (title: string) => {
  const colonIndex = title.lastIndexOf(':');
  if (colonIndex > -1) {
    return {
      main: `${title.slice(0, colonIndex).trim()}: `,
      accent: title.slice(colonIndex + 1).trim(),
    };
  }
  const parenIndex = title.indexOf('(');
  if (parenIndex > -1 && title.endsWith(')')) {
    return {
      main: `${title.slice(0, parenIndex).trim()} `,
      accent: title.slice(parenIndex).trim(),
    };
  }
  return { main: title, accent: '' };
};

const TimelinePage = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | TimelineCategory>('all');
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 60%', 'end 60%'],
  });

  const beamScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const entries = useMemo(
    () =>
      selectedCategory === 'all'
        ? TIMELINE_ENTRIES
        : TIMELINE_ENTRIES.filter(entry => entry.category === selectedCategory),
    [selectedCategory],
  );

  const formatDate = (year: number, month?: number) =>
    month ? `${t(`month.${month}` as TranslationKey)} ${year}` : `${year}`;

  return (
    <PageWrapper>
      <PageTitleWrapper>
        <PageTag
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {t('timeline.page.tag' as TranslationKey)}
        </PageTag>
        <PageHeading
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.04 }}
        >
          {t('timeline.page.title' as TranslationKey)}
        </PageHeading>
        <PageDescription
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45, ease: 'easeOut' }}
        >
          {t('timeline.page.subtitle' as TranslationKey)}
        </PageDescription>
      </PageTitleWrapper>

      <FilterBar
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.4, ease: EASE }}
      >
        <FilterChip
          id="timeline-filter-all"
          type="button"
          $active={selectedCategory === 'all'}
          onClick={() => setSelectedCategory('all')}
        >
          {t('courses.filter.all' as TranslationKey)}
        </FilterChip>
        {CATEGORIES.map(category => (
          <FilterChip
            key={category}
            id={`timeline-filter-${category}`}
            type="button"
            $active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            <FilterDot $color={CATEGORY_COLORS[category]} />
            {t(`timeline.cat.${category}` as TranslationKey)}
          </FilterChip>
        ))}
      </FilterBar>

      <TimelineWrapper ref={trackRef}>
        <SpineTop
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.2, ease: EASE }}
        >
          <FiChevronDown size={18} />
        </SpineTop>

        <SpineRail />
        <SpineBeam style={{ scaleY: beamScale }} />

        <AnimatePresence mode="popLayout" initial={false}>
          {entries.map((entry, index) => {
            const color = CATEGORY_COLORS[entry.category];
            const Icon = entry.icon;
            const cardLeft = index % 2 === 1;
            const { main, accent } = splitTitle(t(entry.titleKey as TranslationKey));

            return (
              <TimelineRow
                key={entry.id}
                layout
                $cardLeft={cardLeft}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                <DateCell $cardLeft={cardLeft}>
                  <DatePill>
                    <PillDot $color={color} />
                    {formatDate(entry.year, entry.month)}
                  </DatePill>
                </DateCell>

                <NodeCell>
                  <NodeDot $color={color} />
                </NodeCell>

                <CardCell $cardLeft={cardLeft}>
                  <Card $color={color}>
                    <CategoryTag $color={color}>
                      {Icon && <Icon size={14} />}
                      {t(`timeline.cat.${entry.category}` as TranslationKey)}
                    </CategoryTag>
                    <CardTitle>
                      {main}
                      {accent && <CompanyAccent>{accent}</CompanyAccent>}
                    </CardTitle>
                    <CardDescription>
                      {t(entry.descriptionKey as TranslationKey)}
                    </CardDescription>
                  </Card>
                </CardCell>
              </TimelineRow>
            );
          })}
        </AnimatePresence>
      </TimelineWrapper>
    </PageWrapper>
  );
};

export default TimelinePage;
