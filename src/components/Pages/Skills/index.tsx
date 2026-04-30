'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { HARD_SKILLS_ROWS, Skill } from '@/config/skills';
import {
  PageTitleWrapper,
  PageTag,
  PageHeading,
  PageDescription,
} from '@/components/Pages/global';
import {
  SkillsPageWrapper,
  TabBar,
  TabButton,
  CarouselSection,
  StaggeredGrid,
  CarouselRow,
  SkillCircle,
  SkillIcon,
  SkillHoverName,
  RowWrapper,
  RowLabel,
} from './styles';

const AUTO_SCROLL_INTERVAL = 5000;
const CIRCLE_STEP = 308;

interface ScrollRowProps {
  skills: Skill[];
  direction?: 'left' | 'right';
}

const ScrollRow = ({ skills, direction = 'right' }: ScrollRowProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const topRow = skills.filter((_, i) => i % 2 === 0);
  const bottomRow = skills.filter((_, i) => i % 2 === 1);

  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      const grid = gridRef.current;
      if (!grid || isDragging.current) return;

      const maxScroll = grid.scrollWidth - grid.clientWidth;
      const delta = direction === 'right' ? CIRCLE_STEP : -CIRCLE_STEP;
      let newScroll = grid.scrollLeft + delta;

      newScroll = Math.round(newScroll / CIRCLE_STEP) * CIRCLE_STEP;

      if (newScroll >= maxScroll) {
        newScroll = 0;
      } else if (newScroll <= 0) {
        newScroll = maxScroll;
      }

      grid.scrollTo({ left: newScroll, behavior: 'smooth' });
    }, AUTO_SCROLL_INTERVAL);
  }, [direction]);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [startAutoScroll]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (gridRef.current?.offsetLeft ?? 0);
    scrollLeft.current = gridRef.current?.scrollLeft ?? 0;
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !gridRef.current) return;
    e.preventDefault();
    const x = e.pageX - gridRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    gridRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    startAutoScroll();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].pageX - (gridRef.current?.offsetLeft ?? 0);
    scrollLeft.current = gridRef.current?.scrollLeft ?? 0;
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!gridRef.current) return;
    const x = e.touches[0].pageX - gridRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    gridRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    startAutoScroll();
  };

  return (
    <CarouselSection>
      <StaggeredGrid
        ref={gridRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CarouselRow>
          {topRow.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <SkillCircle>
                <SkillIcon style={skill.color ? { color: skill.color } : undefined}>
                  <skill.icon />
                </SkillIcon>
                <SkillHoverName>
                  <span>{skill.name}</span>
                </SkillHoverName>
              </SkillCircle>
            </motion.div>
          ))}
        </CarouselRow>
        <CarouselRow $offset>
          {bottomRow.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 + i * 0.08,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <SkillCircle>
                <SkillIcon style={skill.color ? { color: skill.color } : undefined}>
                  <skill.icon />
                </SkillIcon>
                <SkillHoverName>
                  <span>{skill.name}</span>
                </SkillHoverName>
              </SkillCircle>
            </motion.div>
          ))}
        </CarouselRow>
      </StaggeredGrid>
    </CarouselSection>
  );
};

const SkillsPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'hard'>('hard');

  return (
    <SkillsPageWrapper>
      <PageTitleWrapper>
        <PageTag
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('skills.page.tag' as Parameters<typeof t>[0])}
        </PageTag>
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
      </PageTitleWrapper>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.4 }}
      >
        <TabBar>
          <TabButton
            $active={activeTab === 'hard'}
            onClick={() => setActiveTab('hard')}
          >
            Hard Skills
          </TabButton>
        </TabBar>
      </motion.div>

      <RowWrapper>
        {HARD_SKILLS_ROWS.map((row, ri) => (
          <motion.div
            key={row.labelKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + ri * 0.1,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <RowLabel>
              {t(row.labelKey as Parameters<typeof t>[0])}
            </RowLabel>
            <ScrollRow
              skills={row.skills}
              direction={ri % 2 === 0 ? 'right' : 'left'}
            />
          </motion.div>
        ))}
      </RowWrapper>
    </SkillsPageWrapper>
  );
};

export default SkillsPage;
