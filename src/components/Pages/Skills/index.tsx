'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { HARD_SKILLS_ROWS, Skill } from '@/config/skills';
import { SiReact, SiNextdotjs, SiTypescript } from 'react-icons/si';
import {
  PageTitleWrapper,
  PageHeading,
  PageDescription,
} from '@/components/Pages/global';
import {
  SkillsPageWrapper,
  RowWrapper,
  RowLabel,
  GlassGrid,
  GlassCard,
  SkillIconWrapper,
  SkillTooltip,
  PageHint,
  FavoritesSection,
  FavoritesLabel,
  FavoritesGrid,
  FavoriteCard,
  FavoriteHeader,
  FavoriteIconWrapper,
  FavoriteMeta,
  FavoriteName,
  FavoriteBadge,
  FavoriteDescription,
} from './styles';

const LEVEL_MAP: Record<
  number,
  { span: number; iconSize: number }
> = {
  5: { span: 3, iconSize: 130 },
  4: { span: 2, iconSize: 100 },
  3: { span: 1, iconSize: 56 },
  2: { span: 1, iconSize: 50 },
  1: { span: 1, iconSize: 44 },
};

const FAVORITES = [
  {
    name: 'React',
    icon: SiReact,
    color: '#61dafb',
    badgeKey: 'skills.favorites.react.badge' as const,
    descKey: 'skills.favorites.react.desc' as const,
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: undefined,
    badgeKey: 'skills.favorites.next.badge' as const,
    descKey: 'skills.favorites.next.desc' as const,
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178c6',
    badgeKey: 'skills.favorites.ts.badge' as const,
    descKey: 'skills.favorites.ts.desc' as const,
  },
];

const SkillsPage = () => {
  const { t } = useLanguage();

  return (
    <SkillsPageWrapper>
      <PageTitleWrapper>
        <PageDescription
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('skills.page.tag' as Parameters<typeof t>[0])}
        </PageDescription>
        <PageHeading
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.04 }}
        >
          {t('skills.page.title' as Parameters<typeof t>[0])}
        </PageHeading>
        <PageDescription
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45, ease: 'easeOut' }}
        >
          {t('skills.page.subtitle' as Parameters<typeof t>[0])}
        </PageDescription>
        <PageHint
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.14, duration: 0.4 }}
        >
          {t('skills.page.hint' as Parameters<typeof t>[0])}
        </PageHint>
      </PageTitleWrapper>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <FavoritesSection>
          <FavoritesLabel>{t('skills.favorites.label' as Parameters<typeof t>[0])}</FavoritesLabel>
          <FavoritesGrid>
            {FAVORITES.map((fav, i) => (
              <motion.div
                key={fav.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.28 + i * 0.08,
                  duration: 0.45,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <FavoriteCard>
                  <FavoriteHeader>
                    <FavoriteIconWrapper $color={fav.color}>
                      <fav.icon />
                    </FavoriteIconWrapper>
                    <FavoriteMeta>
                      <FavoriteName>{fav.name}</FavoriteName>
                      <FavoriteBadge>{t(fav.badgeKey as Parameters<typeof t>[0])}</FavoriteBadge>
                    </FavoriteMeta>
                  </FavoriteHeader>
                  <FavoriteDescription>{t(fav.descKey as Parameters<typeof t>[0])}</FavoriteDescription>
                </FavoriteCard>
              </motion.div>
            ))}
          </FavoritesGrid>
        </FavoritesSection>
      </motion.div>

      <RowWrapper>
        {HARD_SKILLS_ROWS.map((row, ri) => (
          <motion.div
            key={row.labelKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15 + ri * 0.1,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <RowLabel>
              {t(row.labelKey as Parameters<typeof t>[0])}
            </RowLabel>
            <GlassGrid>
              {row.skills.map((skill, si) => {
                const { span, iconSize } =
                  LEVEL_MAP[skill.level] ?? LEVEL_MAP[3];

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.2 + ri * 0.1 + si * 0.04,
                      duration: 0.45,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    style={{
                      gridColumn: `span ${span}`,
                      gridRow: `span ${span}`,
                    }}
                  >
                    <GlassCard>
                      <SkillIconWrapper
                        $size={iconSize}
                        style={skill.color ? { color: skill.color } : undefined}
                      >
                        <skill.icon />
                      </SkillIconWrapper>
                      <SkillTooltip>{skill.name}</SkillTooltip>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </GlassGrid>
          </motion.div>
        ))}
      </RowWrapper>
    </SkillsPageWrapper>
  );
};

export default SkillsPage;
