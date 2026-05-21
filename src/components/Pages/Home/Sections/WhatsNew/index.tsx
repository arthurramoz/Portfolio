'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FiArrowRight, FiCreditCard, FiMessageCircle } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import { CURRENT_VERSION } from '@/config/versions';
import {
  Section,
  Card,
  CardContent,
  Badge,
  BadgeDot,
  Title,
  Description,
  ExploreBtn,
  CardVisual,
  MockCard,
  MockTitle,
  MockIcon,
  MockTitleText,
  MockLine,
  MockTags,
  MockTag,
  VersionTag,
} from './styles';

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

const WhatsNew = () => {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <Section id="novidade">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <Card>
          <CardContent>
            <motion.div variants={itemVariants}>
              <Badge>
                <BadgeDot />
                {t('whatsnew.badge' as Parameters<typeof t>[0])}
              </Badge>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Title>
                {t('whatsnew.title' as Parameters<typeof t>[0])}
              </Title>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Description>
                {t('whatsnew.description' as Parameters<typeof t>[0])}
              </Description>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ExploreBtn onClick={() => router.push('/cases')}>
                {t('whatsnew.cta' as Parameters<typeof t>[0])}
                <FiArrowRight size={16} />
              </ExploreBtn>
            </motion.div>

            <motion.div variants={itemVariants}>
              <VersionTag>{CURRENT_VERSION}</VersionTag>
            </motion.div>
          </CardContent>

          <CardVisual>
            <motion.div
              variants={itemVariants}
              style={{ position: 'relative', width: '100%', height: '100%' }}
            >
              <MockCard
                as={motion.div}
                $delay={0}
                $accent="#22d3ee"
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ top: '15%', left: '8%' }}
              >
                <MockTitle $accent="#22d3ee">
                  <MockIcon $accent="#22d3ee">
                    <FiCreditCard size={14} />
                  </MockIcon>
                  <MockTitleText>Pagar.me v5</MockTitleText>
                </MockTitle>
                <MockLine $w="90%" />
                <MockLine $w="70%" />
                <MockLine $w="50%" />
                <MockTags>
                  <MockTag $accent="#22d3ee">Node.js</MockTag>
                  <MockTag $accent="#22d3ee">PIX</MockTag>
                  <MockTag $accent="#22d3ee">Split</MockTag>
                </MockTags>
              </MockCard>

              <MockCard
                as={motion.div}
                $delay={0.15}
                $accent="#fb6f92"
                initial={{ opacity: 0, y: 20, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ bottom: '10%', right: '8%' }}
              >
                <MockTitle $accent="#fb6f92">
                  <MockIcon $accent="#fb6f92">
                    <FiMessageCircle size={14} />
                  </MockIcon>
                  <MockTitleText>Realtime Chat</MockTitleText>
                </MockTitle>
                <MockLine $w="85%" />
                <MockLine $w="65%" />
                <MockLine $w="75%" />
                <MockTags>
                  <MockTag $accent="#fb6f92">Firebase</MockTag>
                  <MockTag $accent="#fb6f92">React</MockTag>
                </MockTags>
              </MockCard>
            </motion.div>
          </CardVisual>
        </Card>
      </motion.div>
    </Section>
  );
};

export default WhatsNew;
