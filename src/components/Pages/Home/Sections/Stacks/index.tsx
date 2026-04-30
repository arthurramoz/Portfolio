'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Section,
  TitleWrapper,
  SectionTitle,
  SectionSubtitle,
  ContentWrapper,
  TextColumn,
  Paragraph,
  StatLabel,
  StacksRow,
  StackChip,
  StatsGrid,
  StatCard,
  StatNumber,
} from './styles';

const STATS = [
  { value: '15+', labelKey: 'exp.stats.corporate' as const },
  { value: '1', labelKey: 'exp.stats.fullstack' as const },
  { value: '28', labelKey: 'exp.stats.certifications' as const },
];

const STACKS = [
  'React.js',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Prisma',
  'PostgreSQL',
  'Styled-Components',
  'Firebase',
  'REST APIs',
  'Figma',
  'Git',
  'Docker',
  'AWS',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

const Stacks = () => {
  const { t } = useLanguage();

  return (
    <Section id="stacks">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <TitleWrapper>
          <motion.div variants={itemVariants}>
            <SectionSubtitle>
              {t('stacks.subtitle' as Parameters<typeof t>[0])}
            </SectionSubtitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle>
              {t('stacks.title' as Parameters<typeof t>[0])}
            </SectionTitle>
          </motion.div>
        </TitleWrapper>

        <ContentWrapper>
          <TextColumn>
            <motion.div variants={itemVariants}>
              <Paragraph>{t('exp.p1' as Parameters<typeof t>[0])}</Paragraph>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Paragraph>{t('exp.p2' as Parameters<typeof t>[0])}</Paragraph>
            </motion.div>
            <motion.div variants={itemVariants}>
              <StatLabel style={{ marginTop: 8, marginBottom: -4 }}>
                {t('exp.stacks.label' as Parameters<typeof t>[0])}
              </StatLabel>
              <StacksRow>
                {STACKS.map(stack => (
                  <StackChip key={stack}>{stack}</StackChip>
                ))}
              </StacksRow>
            </motion.div>
          </TextColumn>

          <StatsGrid>
            {STATS.map(({ value, labelKey }) => (
              <motion.div key={labelKey} variants={itemVariants}>
                <StatCard>
                  <StatNumber>{value}</StatNumber>
                  <StatLabel>
                    {t(labelKey as Parameters<typeof t>[0])}
                  </StatLabel>
                </StatCard>
              </motion.div>
            ))}
          </StatsGrid>
        </ContentWrapper>
      </motion.div>
    </Section>
  );
};

export default Stacks;
