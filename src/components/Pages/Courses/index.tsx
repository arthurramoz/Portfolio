'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiLinkedin, FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import { COURSES, PLATFORM_FILTERS } from '@/config/courses';
import type { CoursePlatform } from '@/config/courses';
import Pagination, { ITEMS_PER_PAGE } from '@/components/Pagination';
import {
  PageWrapper,
  PageTitleWrapper,
  PageHeading,
  PageDescription,
} from '@/components/Pages/global';
import {
  CourseCard,
  CourseCount,
  CourseInfo,
  CourseMeta,
  CoursesList,
  CourseTitle,
  FilterChip,
  FilterGroup,
  FilterLabel,
  FiltersRow,
  FiltersSection,
  PlatformBadge,
  PlatformLogo,
  SkillsRow,
  SkillTag,
} from './styles';

const PLATFORM_LOGOS: Record<string, string> = {
  Udemy: '/courses/udemy_logo.jpg',
  Alura: '/courses/aluracursos_logo.jpg',
  Cisco: '/courses/cisco_logo.jpg',
  Microsoft: '/courses/microsoft_logo.jpg',
  'Google Cloud': '/courses/google_cloud.jpg',
  SENAI: '/courses/senaisp_logo.jpg',
  AWS: '/courses/amazon_web_services_logo.jpg',
  'Workover Academy': '/courses/workoveracademy.jpg',
  'Centro Paula Souza': '/courses/centropaulasouza_logo.jpg',
};

const FILTER_KEYS: Record<CoursePlatform, string | null> = {
  all: 'courses.filter.all',
  Udemy: null,
  Alura: null,
  Cisco: null,
  Microsoft: null,
  'Google Cloud': null,
  SENAI: null,
  AWS: null,
  'Workover Academy': null,
  'Centro Paula Souza': null,
};

const ALL_PLATFORMS = PLATFORM_FILTERS.filter(p => p !== 'all');

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2 },
  },
};

const CoursesPage = () => {
  const { language, t } = useLanguage();
  const [selectedPlatforms, setSelectedPlatforms] = useState<Set<string>>(
    new Set<string>(),
  );
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);

  const allSkills = useMemo(() => {
    const skills = new Set<string>();
    COURSES.forEach(c => c.skills?.forEach(s => skills.add(s)));
    return Array.from(skills).sort();
  }, []);

  const allPlatformsSelected = selectedPlatforms.size === 0;
  const allSkillsSelected = selectedSkills.size === 0;

  const togglePlatform = (platform: CoursePlatform) => {
    if (platform === 'all') {
      setSelectedPlatforms(new Set());
      setCurrentPage(1);
      return;
    }

    const next = new Set(selectedPlatforms);
    if (next.has(platform)) {
      next.delete(platform);
    } else {
      next.add(platform);
    }
    setSelectedPlatforms(next);
    setCurrentPage(1);
  };

  const toggleSkill = (skill: string) => {
    if (skill === 'all') {
      setSelectedSkills(new Set());
      setCurrentPage(1);
      return;
    }

    const next = new Set(selectedSkills);
    if (next.has(skill)) {
      next.delete(skill);
    } else {
      next.add(skill);
    }
    setSelectedSkills(next);
    setCurrentPage(1);
  };

  const filtered = useMemo(() => {
    return COURSES.filter(course => {
      const matchPlatform =
        allPlatformsSelected || selectedPlatforms.has(course.platform);
      const matchSkill =
        allSkillsSelected || course.skills?.some(s => selectedSkills.has(s));
      return matchPlatform && matchSkill;
    });
  }, [selectedPlatforms, selectedSkills, allSkillsSelected]);

  const formatDate = (month: number, year: number) => {
    const monthKey = `month.${month}` as Parameters<typeof t>[0];
    const preposition = t('date.preposition' as Parameters<typeof t>[0]);
    return `${t(monthKey)}${preposition}${year}`;
  };

  const countLabel =
    filtered.length === 1
      ? t('courses.count.single' as Parameters<typeof t>[0])
      : t('courses.count.plural' as Parameters<typeof t>[0]);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filterKey = `${Array.from(selectedPlatforms).join()}-${Array.from(
    selectedSkills,
  ).join()}`;

  return (
    <PageWrapper>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <PageTitleWrapper>
          <motion.div variants={itemVariants}>
            <PageDescription>
              {t('courses.subtitle' as Parameters<typeof t>[0])}
            </PageDescription>
          </motion.div>
          <motion.div variants={itemVariants}>
            <PageHeading>
              {t('courses.title' as Parameters<typeof t>[0])}
            </PageHeading>
          </motion.div>
        </PageTitleWrapper>

        <motion.div variants={itemVariants}>
          <FiltersSection>
            <FilterGroup>
              <FilterLabel onClick={() => setPlatformsOpen(prev => !prev)}>
                {t('courses.filter.organization' as Parameters<typeof t>[0])}
                <FiChevronDown
                  size={14}
                  style={{
                    transform: platformsOpen
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                  }}
                />
              </FilterLabel>
              <AnimatePresence>
                {platformsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <FiltersRow>
                      <FilterChip
                        $active={allPlatformsSelected}
                        onClick={() => togglePlatform('all')}
                      >
                        {t('courses.filter.all' as Parameters<typeof t>[0])}
                      </FilterChip>
                      {ALL_PLATFORMS.map(platform => {
                        const key = FILTER_KEYS[platform];
                        const label = key
                          ? t(key as Parameters<typeof t>[0])
                          : platform;

                        return (
                          <FilterChip
                            key={platform}
                            $active={selectedPlatforms.has(platform)}
                            onClick={() => togglePlatform(platform)}
                          >
                            {label}
                          </FilterChip>
                        );
                      })}
                    </FiltersRow>
                  </motion.div>
                )}
              </AnimatePresence>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel onClick={() => setSkillsOpen(prev => !prev)}>
                {t('courses.filter.skills' as Parameters<typeof t>[0])}
                <FiChevronDown
                  size={14}
                  style={{
                    transform: skillsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </FilterLabel>
              <AnimatePresence>
                {skillsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <FiltersRow>
                      <FilterChip
                        $active={allSkillsSelected}
                        onClick={() => toggleSkill('all')}
                      >
                        {t('courses.filter.all' as Parameters<typeof t>[0])}
                      </FilterChip>
                      {allSkills.map(skill => (
                        <FilterChip
                          key={skill}
                          $active={selectedSkills.has(skill)}
                          onClick={() => toggleSkill(skill)}
                        >
                          {skill}
                        </FilterChip>
                      ))}
                    </FiltersRow>
                  </motion.div>
                )}
              </AnimatePresence>
            </FilterGroup>
          </FiltersSection>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filterKey}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <CoursesList>
              {paginated.map((course, index) => (
                <motion.div
                  key={`${course.title}-${index}`}
                  variants={itemVariants}
                >
                  <CourseCard>
                    {PLATFORM_LOGOS[course.platform] && (
                      <PlatformLogo
                        src={PLATFORM_LOGOS[course.platform]}
                        alt={course.platform}
                      />
                    )}
                    <CourseInfo>
                      <CourseTitle>
                        {course.title}
                        <a
                          href="https://www.linkedin.com/in/arthur-moreira-ramos/details/certifications/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiLinkedin size={15} />
                        </a>
                      </CourseTitle>
                      <CourseMeta>
                        <span>{formatDate(course.month, course.year)}</span>
                        <span>•</span>
                        <span>
                          {course.hours}{' '}
                          {t('courses.hours' as Parameters<typeof t>[0])}
                        </span>
                      </CourseMeta>
                      {course.skills && course.skills.length > 0 && (
                        <SkillsRow>
                          {course.skills.map(skill => (
                            <SkillTag key={skill}>{skill}</SkillTag>
                          ))}
                        </SkillsRow>
                      )}
                    </CourseInfo>
                    <PlatformBadge>{course.platform}</PlatformBadge>
                  </CourseCard>
                </motion.div>
              ))}
            </CoursesList>
          </motion.div>
        </AnimatePresence>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </motion.div>
    </PageWrapper>
  );
};

export default CoursesPage;
