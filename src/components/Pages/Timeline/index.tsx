'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
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
  LegendRow,
  LegendItem,
  LegendDot,
  TimelineTrack,
  YearMarker,
  YearLabel,
  EntryCard,
  EntryHeader,
  EntryIconWrap,
  EntryTitleGroup,
  EntryTitle,
  EntrySubtitle,
  EntryDate,
  EntryDescription,
  EntryTags,
  EntryTag,
} from './styles';

const LEGEND_KEYS: Record<TimelineCategory, string> = {
  education: 'timeline.cat.education',
  work: 'timeline.cat.work',
  freelance: 'timeline.cat.freelance',
  milestone: 'timeline.cat.milestone',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const TimelinePage = () => {
  const { t, language } = useLanguage();

  const grouped = useMemo(() => {
    const map = new Map<number, typeof TIMELINE_ENTRIES>();
    TIMELINE_ENTRIES.forEach(entry => {
      const arr = map.get(entry.year) ?? [];
      arr.push(entry);
      map.set(entry.year, arr);
    });
    return Array.from(map.entries()).sort(([a], [b]) => b - a);
  }, []);

  const formatDate = (year: number, month?: number) => {
    if (!month) return `${year}`;
    const monthName = t(`month.${month}` as Parameters<typeof t>[0]);
    return `${monthName} ${year}`;
  };

  return (
    <PageWrapper>
      <PageTitleWrapper>
        <PageTag
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('timeline.page.tag' as Parameters<typeof t>[0])}
        </PageTag>
        <PageHeading
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.04 }}
        >
          {t('timeline.page.title' as Parameters<typeof t>[0])}
        </PageHeading>
        <PageDescription
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45, ease: 'easeOut' }}
        >
          {t('timeline.page.subtitle' as Parameters<typeof t>[0])}
        </PageDescription>
      </PageTitleWrapper>

      <LegendRow
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        {(Object.keys(LEGEND_KEYS) as TimelineCategory[]).map(cat => (
          <LegendItem key={cat}>
            <LegendDot $color={CATEGORY_COLORS[cat]} />
            {t(LEGEND_KEYS[cat] as Parameters<typeof t>[0])}
          </LegendItem>
        ))}
      </LegendRow>

      <TimelineTrack>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {grouped.map(([year, entries]) => (
            <div key={year}>
              <YearMarker variants={itemVariants}>
                <YearLabel>{year}</YearLabel>
              </YearMarker>

              {entries.map(entry => {
                const color = CATEGORY_COLORS[entry.category];
                const Icon = entry.icon;
                return (
                  <EntryCard
                    key={entry.id}
                    $accentColor={color}
                    variants={itemVariants}
                  >
                    <EntryHeader>
                      {Icon && (
                        <EntryIconWrap $accentColor={color}>
                          <Icon size={18} />
                        </EntryIconWrap>
                      )}
                      <EntryTitleGroup>
                        <EntryTitle>
                          {t(entry.titleKey as Parameters<typeof t>[0])}
                        </EntryTitle>
                        <EntrySubtitle>
                          {t(entry.subtitleKey as Parameters<typeof t>[0])}
                        </EntrySubtitle>
                      </EntryTitleGroup>
                      <EntryDate>
                        {formatDate(entry.year, entry.month)}
                      </EntryDate>
                    </EntryHeader>

                    <EntryDescription>
                      {t(entry.descriptionKey as Parameters<typeof t>[0])}
                    </EntryDescription>

                    {entry.tags && entry.tags.length > 0 && (
                      <EntryTags>
                        {entry.tags.map(tag => (
                          <EntryTag key={tag} $accentColor={color}>
                            {tag}
                          </EntryTag>
                        ))}
                      </EntryTags>
                    )}
                  </EntryCard>
                );
              })}
            </div>
          ))}
        </motion.div>
      </TimelineTrack>
    </PageWrapper>
  );
};

export default TimelinePage;
