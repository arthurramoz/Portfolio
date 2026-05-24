'use client';

import { useMemo } from 'react';
import { motion } from 'motion/react';
import { VERSION_HISTORY, CURRENT_VERSION } from '@/config/versions';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  PageHeading,
  PageDescription,
} from '@/components/Pages/global';
import {
  DevTimeAlert,
  Entry,
  EntryActive,
  EntryBadge,
  EntryDate,
  EntryVersion,
  HighlightItem,
  HighlightList,
  PageContainer,
  SidebarColumn,
  TimelineColumn,
} from './styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const PROJECT_START = new Date(2026, 0, 14);

const ChangelogPage = () => {
  const { language, t } = useLanguage();

  const devTime = useMemo(() => {
    const now = new Date();
    let months = (now.getFullYear() - PROJECT_START.getFullYear()) * 12 + (now.getMonth() - PROJECT_START.getMonth());
    let days = now.getDate() - PROJECT_START.getDate();
    if (days < 0) {
      months--;
      const prev = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prev.getDate();
    }

    const labels: Record<string, { m: string; ms: string; d: string; ds: string }> = {
      pt: { m: 'mês', ms: 'meses', d: 'dia', ds: 'dias' },
      en: { m: 'month', ms: 'months', d: 'day', ds: 'days' },
      fr: { m: 'mois', ms: 'mois', d: 'jour', ds: 'jours' },
      ru: { m: 'месяц', ms: 'месяцев', d: 'день', ds: 'дней' },
      es: { m: 'mes', ms: 'meses', d: 'día', ds: 'días' },
    };

    const l = labels[language] || labels.en;
    const parts: string[] = [];
    if (months > 0) parts.push(`${months} ${months === 1 ? l.m : l.ms}`);
    if (days > 0) parts.push(`${days} ${days === 1 ? l.d : l.ds}`);

    return parts.join(language === 'en' ? ' and ' : language === 'fr' ? ' et ' : language === 'ru' ? ' и ' : ' e ');
  }, [language]);

  return (
    <PageContainer>
      <SidebarColumn>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <PageHeading>{t('changelog.title')}</PageHeading>
          <PageDescription>
            {t('changelog.description')}
          </PageDescription>
        </motion.div>
      </SidebarColumn>

      <TimelineColumn>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <DevTimeAlert>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{t('changelog.devtime').replace('{time}', devTime)}</span>
          </DevTimeAlert>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {VERSION_HISTORY.map(entry => {
            const isCurrent = entry.version === CURRENT_VERSION;
            const Wrapper = isCurrent ? EntryActive : Entry;

            return (
              <motion.div key={entry.version} variants={itemVariants}>
                <Wrapper>
                  <EntryDate>{entry.date}</EntryDate>
                  <EntryVersion>{entry.version}</EntryVersion>
                  <EntryBadge $active={isCurrent}>
                    {isCurrent ? t('changelog.current') : entry.label}
                  </EntryBadge>
                  <HighlightList>
                    {(entry.highlights[language] ?? entry.highlights['pt']).map((highlight, i) => (
                      <HighlightItem key={i}>• {highlight}</HighlightItem>
                    ))}
                  </HighlightList>
                </Wrapper>
              </motion.div>
            );
          })}
        </motion.div>
      </TimelineColumn>
    </PageContainer>
  );
};

export default ChangelogPage;

