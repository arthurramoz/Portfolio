'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRouter } from 'next/navigation';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import { CURRENT_VERSION } from '@/config/versions';
import { HIGHLIGHT_CONFIG } from '@/config/highlights';
import {
  Section,
  SectionBg,
  VersionWatermark,
  WatermarkVersion,
  WatermarkLabel,
  SectionInner,
  Card,
  CardContent,
  Title,
  Description,
  ActionBtn,
  CardVisual,
  PreviewCard,
  PreviewHeader,
  PreviewIcon,
  PreviewLabel,
  PreviewLine,
  PreviewTags,
  PreviewTag,
  FeatureGrid,
  FeatureCard,
  FeatureHeader,
  FeatureIcon,
  FeatureTitle,
  FeatureDesc,
  FeatureBtn,
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

const ACTIONS: Record<string, (router: ReturnType<typeof useRouter>) => void> = {
  'cases-page': (router) => router.push('/cases'),
  'skills-page': (router) => router.push('/skills'),
  'cursor-settings': (router) => {
    router.push('/configuracoes');
    setTimeout(() => {
      const el = document.getElementById('settings-cursor-toggle');
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 600);
  },
  'a11y-widget': () => {
    const el = document.getElementById('a11y-widget-trigger');
    if (el) {
      el.click();
    }
  },
};

const WhatsNew = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const cfg = HIGHLIGHT_CONFIG;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const versionOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 0.5, 0.5, 0]);
  const versionScale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.85, 1, 1, 0.85]);
  const labelOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.65, 0.85], [0, 0.6, 0.6, 0]);
  const labelY = useTransform(scrollYProgress, [0.15, 0.35, 0.65, 0.85], [20, 0, 0, -20]);

  return (
    <Section id="novidade" ref={sectionRef}>
      <SectionBg
        as={motion.div}
        style={{
          background: '#48cae4',
          opacity: bgOpacity,
        }}
      />

      <VersionWatermark>
        <WatermarkVersion
          as={motion.span}
          style={{
            opacity: versionOpacity,
            scale: versionScale,
          }}
        >
          {CURRENT_VERSION.replace('v', '')}
        </WatermarkVersion>
        <WatermarkLabel
          as={motion.span}
          style={{
            opacity: labelOpacity,
            y: labelY,
          }}
        >
          What&apos;s New
        </WatermarkLabel>
      </VersionWatermark>

      <SectionInner>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Card>
            <CardContent>
              <motion.div variants={itemVariants}>
                <Title>{t(cfg.titleKey as Parameters<typeof t>[0])}</Title>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Description>{t(cfg.descKey as Parameters<typeof t>[0])}</Description>
              </motion.div>

              <motion.div variants={itemVariants}>
                <ActionBtn onClick={() => router.push(cfg.ctaPath)}>
                  {t(cfg.ctaKey as Parameters<typeof t>[0])}
                  <FiArrowRight size={16} />
                </ActionBtn>
              </motion.div>
            </CardContent>

            <CardVisual>
              <motion.div
                variants={itemVariants}
                style={{ position: 'relative', width: '100%', height: '100%' }}
              >
                {cfg.mocks.map((mock, i) => {
                  const Icon = mock.icon;
                  return (
                    <PreviewCard
                      key={i}
                      as={motion.div}
                      $delay={mock.delay}
                      $accent={mock.accent}
                      initial={{ opacity: 0, y: 20, rotate: mock.rotate }}
                      whileInView={{ opacity: 1, y: 0, rotate: mock.rotate }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: mock.delay, ease: [0.25, 0.1, 0.25, 1] }}
                      style={mock.position}
                    >
                      <PreviewHeader $accent={mock.accent}>
                        <PreviewIcon $accent={mock.accent}>
                          <Icon size={14} />
                        </PreviewIcon>
                        <PreviewLabel>{mock.title}</PreviewLabel>
                      </PreviewHeader>
                      {mock.lines.map((w, j) => (
                        <PreviewLine key={j} $w={w} />
                      ))}
                      <PreviewTags>
                        {mock.tags.map((tag) => (
                          <PreviewTag key={tag} $accent={mock.accent}>{tag}</PreviewTag>
                        ))}
                      </PreviewTags>
                    </PreviewCard>
                  );
                })}
              </motion.div>
            </CardVisual>
          </Card>

          <FeatureGrid>
            {cfg.features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <FeatureCard key={i} as={motion.div} variants={itemVariants} $accent={feat.accent}>
                  <FeatureHeader>
                    <FeatureIcon $color={feat.accent}>
                      <Icon size={32} />
                    </FeatureIcon>
                    <FeatureTitle>
                      {t(feat.titleKey as Parameters<typeof t>[0])}
                    </FeatureTitle>
                  </FeatureHeader>
                  <FeatureDesc>
                    {t(feat.descKey as Parameters<typeof t>[0])}
                  </FeatureDesc>
                  {feat.ctaKey && feat.action && (
                    <FeatureBtn
                      onClick={() => ACTIONS[feat.action!]?.(router)}
                    >
                      {t(feat.ctaKey as Parameters<typeof t>[0])}
                      <FiArrowRight size={14} />
                    </FeatureBtn>
                  )}
                </FeatureCard>
              );
            })}
          </FeatureGrid>
        </motion.div>
      </SectionInner>
    </Section>
  );
};

export default WhatsNew;
