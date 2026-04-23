'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import GitHubGraph from './GitHubGraph';
import {
  ContentWrapper,
  Paragraph,
  Section,
  SectionSubtitle,
  SectionTitle,
  StatCard,
  StatLabel,
  StatNumber,
  StatsColumn,
  TextColumn,
  TitleWrapper,
} from './styles';

const STATS = [
  { value: '4', labelKey: 'about.stats.projects' as const },
  { value: '2+', labelKey: 'about.stats.years' as const },
];

const About = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <Section id="sobre-mim">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <TitleWrapper>
          <motion.div variants={itemVariants}>
            <SectionSubtitle>{t('about.subtitle')}</SectionSubtitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle>{t('about.title')}</SectionTitle>
          </motion.div>
        </TitleWrapper>

        <ContentWrapper>
          <TextColumn>
            <motion.div variants={itemVariants}>
              <Paragraph>{t('about.p1')}</Paragraph>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Paragraph>{t('about.p2')}</Paragraph>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Paragraph>{t('about.p3')}</Paragraph>
            </motion.div>
          </TextColumn>

          <StatsColumn>
            {STATS.map(({ value, labelKey }) => (
              <motion.div key={labelKey} variants={itemVariants}>
                <StatCard>
                  <StatNumber>{value}</StatNumber>
                  <StatLabel>{t(labelKey)}</StatLabel>
                </StatCard>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} style={{ gridColumn: '1 / -1' }}>
              <GitHubGraph />
            </motion.div>
          </StatsColumn>
        </ContentWrapper>
      </motion.div>
    </Section>
  );
};

export default About;
