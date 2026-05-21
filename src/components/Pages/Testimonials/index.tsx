'use client';

import { motion } from 'motion/react';
import { FiMessageSquare } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  PageWrapper,
  PageTitleWrapper,
  PageHeading,
  PageDescription,
} from '@/components/Pages/global';
import { TESTIMONIALS } from '@/config/testimonials';
import {
  TestimonialsGrid,
  TestimonialCard,
  QuoteMark,
  QuoteText,
  AuthorInfo,
  AuthorName,
  AuthorRole,
  EmptyState,
  EmptyIcon,
  EmptyText,
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

const TestimonialsPage = () => {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <PageTitleWrapper>
        <PageDescription
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('testimonials.page.tag' as Parameters<typeof t>[0])}
        </PageDescription>
        <PageHeading
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.04 }}
        >
          {t('testimonials.page.title' as Parameters<typeof t>[0])}
        </PageHeading>
        <PageDescription
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45, ease: 'easeOut' }}
        >
          {t('testimonials.page.subtitle' as Parameters<typeof t>[0])}
        </PageDescription>
      </PageTitleWrapper>

      {TESTIMONIALS.length === 0 ? (
        <EmptyState
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <EmptyIcon>
            <FiMessageSquare size={28} />
          </EmptyIcon>
          <EmptyText>
            {t('testimonials.empty' as Parameters<typeof t>[0])}
          </EmptyText>
        </EmptyState>
      ) : (
        <TestimonialsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {TESTIMONIALS.map((tm) => (
            <TestimonialCard key={tm.id} variants={cardVariants}>
              <QuoteMark>"</QuoteMark>
              <QuoteText>
                {t(tm.quoteKey as Parameters<typeof t>[0])}
              </QuoteText>
              <AuthorInfo>
                <AuthorName>{tm.name}</AuthorName>
                <AuthorRole>{tm.role} — {tm.company}</AuthorRole>
              </AuthorInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      )}
    </PageWrapper>
  );
};

export default TestimonialsPage;
