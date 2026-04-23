'use client';

import { motion } from 'motion/react';
import { VERSION_HISTORY, CURRENT_VERSION } from '@/config/versions';
import {
  Entry,
  EntryActive,
  EntryBadge,
  EntryDate,
  EntryVersion,
  HighlightItem,
  HighlightList,
  PageContainer,
  PageDescription,
  PageTitle,
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

const ChangelogPage = () => {
  return (
    <PageContainer>
      <SidebarColumn>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <PageTitle>Changelog</PageTitle>
          <PageDescription>
            Histórico completo de atualizações e melhorias do portfolio.
          </PageDescription>
        </motion.div>
      </SidebarColumn>

      <TimelineColumn>
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
                    {isCurrent ? 'atual' : entry.label}
                  </EntryBadge>
                  <HighlightList>
                    {entry.highlights.map((highlight, i) => (
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
