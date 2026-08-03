'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FiExternalLink,
  FiLinkedin,
  FiTarget,
  FiClock,
  FiZap,
  FiLayers,
  FiStar,
  FiBriefcase,
  FiUser,
  FiBook,
  FiMail,
} from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ProjectItem, ProjectCategory } from '@/config/projects';
import ImageCarousel from './ImageCarousel';
import ProjectModal from './ProjectModal';
import {
  PageWrapper,
  PageTitleWrapper,
  PageHeading,
  PageDescription,
} from '@/components/Pages/global';
import {
  CardContent,
  CardDescription,
  CardMeta,
  CardTitle,
  CategoryBadge,
  EmptyState,
  FeaturedBadge,
  FilterBar,
  FilterButton,
  ImpactBanner,
  ImpactCta,
  ImpactDivider,
  ImpactLabel,
  ImpactMetric,
  ImpactMetrics,
  ImpactNumber,
  InfoPill,
  InfoPillsRow,
  PlatformBadge,
  ProjectCard,
  ProjectsGrid,
  Tag,
  TagsRow,
  TimelineWrapper,
  YearCount,
  YearHeader,
  YearLabel,
  YearLine,
  YearSection,
} from './styles';

export type { ProjectItem };

interface AllProjectsPageProps {
  projects: ProjectItem[];
  /** Número de projetos em produção (para o banner de impacto) */
  productionCount?: number;
}

type FilterCategory = 'all' | ProjectCategory;

const CATEGORY_ICONS: Record<ProjectCategory, typeof FiBriefcase> = {
  company: FiBriefcase,
  personal: FiUser,
  university: FiBook,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const AllProjectsPage = ({
  projects,
  productionCount = 5,
}: AllProjectsPageProps) => {
  const { t } = useLanguage();
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const visibleProjects = projects.filter(p => !p.hidden);

  /* ── Filter ── */
  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? visibleProjects
        : visibleProjects.filter(p => p.category === activeFilter),
    [visibleProjects, activeFilter],
  );

  /* ── Group by year ── */
  const projectsByYear = useMemo(() => {
    const map = new Map<number, ProjectItem[]>();
    filteredProjects.forEach(p => {
      const list = map.get(p.year) ?? [];
      list.push(p);
      map.set(p.year, list);
    });
    // Sort years descending
    return Array.from(map.entries()).sort(([a], [b]) => b - a);
  }, [filteredProjects]);

  /* ── Metrics ── */
  const totalCount = visibleProjects.length;
  const yearsActive = useMemo(() => {
    if (visibleProjects.length === 0) return 3;
    const years = visibleProjects.map(p => p.year);
    return Math.max(...years) - Math.min(...years) + 1;
  }, [visibleProjects]);

  const FILTERS: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: t('projects.filter.all' as Parameters<typeof t>[0]) },
    { key: 'company', label: t('projects.filter.company' as Parameters<typeof t>[0]) },
    { key: 'personal', label: t('projects.filter.personal' as Parameters<typeof t>[0]) },
    { key: 'university', label: t('projects.filter.university' as Parameters<typeof t>[0]) },
  ];

  const renderCard = (project: ProjectItem, index: number) => {
    const CategoryIcon = CATEGORY_ICONS[project.category];
    const isClickable = !!project.platforms && project.platforms.length > 0;

    return (
      <motion.div key={`${project.title}-${index}`} variants={itemVariants}>
        <ProjectCard
          $clickable={isClickable}
          $featured={project.featured}
          onClick={() => {
            if (isClickable) setSelectedProject(project);
          }}
        >
          {project.featured && (
            <FeaturedBadge>
              <FiStar size={10} />
              {t('projects.section.featured' as Parameters<typeof t>[0])}
            </FeaturedBadge>
          )}

          {project.images && project.images.length > 0 && (
            <ImageCarousel images={project.images} alt={project.title} />
          )}

          <CardContent>
            <CardMeta>
              <CategoryBadge $category={project.category}>
                <CategoryIcon size={10} />
                {t(`projects.category.${project.category}` as Parameters<typeof t>[0])}
              </CategoryBadge>
              {project.platforms && project.platforms.length > 0 && (
                <PlatformBadge>
                  <FiLayers size={10} />
                  {project.platforms.length}{' '}
                  {t('projects.platforms' as Parameters<typeof t>[0])}
                </PlatformBadge>
              )}
            </CardMeta>

            <CardTitle>
              {project.title}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                >
                  <FiExternalLink size={15} />
                </a>
              )}
              <a
                href="https://www.linkedin.com/in/arthur-moreira-ramos/details/projects/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
              >
                <FiLinkedin size={15} />
              </a>
            </CardTitle>

            <CardDescription>
              {t(project.descriptionKey as Parameters<typeof t>[0])}
            </CardDescription>

            {(project.roleKey || project.durationKey || project.highlightKey) && (
              <InfoPillsRow>
                {project.roleKey && (
                  <InfoPill>
                    <FiTarget size={12} />
                    <strong>
                      {t('projects.pill.role' as Parameters<typeof t>[0])}:
                    </strong>{' '}
                    {t(project.roleKey as Parameters<typeof t>[0])}
                  </InfoPill>
                )}
                {project.durationKey && (
                  <InfoPill>
                    <FiClock size={12} />
                    <strong>
                      {t('projects.pill.duration' as Parameters<typeof t>[0])}:
                    </strong>{' '}
                    {t(project.durationKey as Parameters<typeof t>[0])}
                  </InfoPill>
                )}
                {project.highlightKey && (
                  <InfoPill>
                    <FiZap size={12} />
                    <strong>
                      {t('projects.pill.highlight' as Parameters<typeof t>[0])}:
                    </strong>{' '}
                    {t(project.highlightKey as Parameters<typeof t>[0])}
                  </InfoPill>
                )}
              </InfoPillsRow>
            )}

            {project.tags.length > 0 && (
              <TagsRow>
                {project.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsRow>
            )}
          </CardContent>
        </ProjectCard>
      </motion.div>
    );
  };

  return (
    <PageWrapper>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        {/* ── Page header ── */}
        <PageTitleWrapper>
          <motion.div variants={itemVariants}>
            <PageDescription>
              {t('projects.subtitle.all' as Parameters<typeof t>[0])}
            </PageDescription>
          </motion.div>
          <motion.div variants={itemVariants}>
            <PageHeading>
              {t('projects.title.all' as Parameters<typeof t>[0])}
            </PageHeading>
          </motion.div>
        </PageTitleWrapper>

        {/* ── Impact Banner ── */}
        <motion.div variants={itemVariants}>
          <ImpactBanner>
            <ImpactMetrics>
              <ImpactMetric>
                <ImpactNumber>{totalCount}+</ImpactNumber>
                <ImpactLabel>
                  {t('projects.impact.total' as Parameters<typeof t>[0])}
                </ImpactLabel>
              </ImpactMetric>

              <ImpactDivider />

              <ImpactMetric>
                <ImpactNumber>{productionCount}</ImpactNumber>
                <ImpactLabel>
                  {t('projects.impact.prod' as Parameters<typeof t>[0])}
                </ImpactLabel>
              </ImpactMetric>

              <ImpactDivider />

              <ImpactMetric>
                <ImpactNumber>{yearsActive}+</ImpactNumber>
                <ImpactLabel>
                  {t('projects.impact.years' as Parameters<typeof t>[0])}
                </ImpactLabel>
              </ImpactMetric>
            </ImpactMetrics>

            <ImpactCta onClick={() => router.push('/contato')}>
              <FiMail size={15} />
              {t('projects.impact.cta' as Parameters<typeof t>[0])}
            </ImpactCta>
          </ImpactBanner>
        </motion.div>

        {/* ── Filter Bar ── */}
        <motion.div variants={itemVariants}>
          <FilterBar>
            {FILTERS.map(filter => (
              <FilterButton
                key={filter.key}
                $active={activeFilter === filter.key}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </FilterButton>
            ))}
          </FilterBar>
        </motion.div>

        {/* ── Timeline ── */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EmptyState>
                {t('projects.empty' as Parameters<typeof t>[0])}
              </EmptyState>
            </motion.div>
          ) : (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
            >
              <TimelineWrapper>
                {projectsByYear.map(([year, yearProjects]) => (
                  <YearSection key={year}>
                    <YearHeader>
                      <YearLabel>{year}</YearLabel>
                      <YearLine />
                      <YearCount>
                        {yearProjects.length}{' '}
                        {yearProjects.length === 1 ? 'projeto' : 'projetos'}
                      </YearCount>
                    </YearHeader>

                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <ProjectsGrid>
                        {yearProjects.map((project, index) =>
                          renderCard(project, index),
                        )}
                      </ProjectsGrid>
                    </motion.div>
                  </YearSection>
                ))}
              </TimelineWrapper>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </PageWrapper>
  );
};

export default AllProjectsPage;
