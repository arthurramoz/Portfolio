'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { FiExternalLink, FiLinkedin, FiTarget, FiClock, FiZap, FiLayers, FiStar, FiGrid } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ProjectItem } from '@/config/projects';
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
  CardTitle,
  EmptyState,
  InfoPill,
  InfoPillsRow,
  PlatformBadge,
  ProjectCard,
  ProjectsGrid,
  SectionHeader,
  SectionSpacer,
  Tag,
  TagsRow,
} from './styles';

export type { ProjectItem };

interface ProjectsPageProps {
  titleKey:
    | 'projects.title.personal'
    | 'projects.title.company'
    | 'projects.title.university';
  subtitleKey:
    | 'projects.subtitle.personal'
    | 'projects.subtitle.company'
    | 'projects.subtitle.university';
  projects: ProjectItem[];
}

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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const ProjectsPage = ({
  titleKey,
  subtitleKey,
  projects,
}: ProjectsPageProps) => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const visibleProjects = projects.filter(p => !p.hidden);
  const hasCompanyFeatures = visibleProjects.some(p => p.roleKey || p.platforms);
  const featuredProjects = visibleProjects.filter(p => p.featured);
  const regularProjects = visibleProjects.filter(p => !p.featured);
  const hasFeatured = featuredProjects.length > 0;

  const renderCard = (project: ProjectItem, index: number) => (
    <motion.div key={`${project.title}-${index}`} variants={itemVariants}>
      <ProjectCard
        $clickable={!!project.platforms && project.platforms.length > 0}
        onClick={() => {
          if (project.platforms && project.platforms.length > 0) {
            setSelectedProject(project);
          }
        }}
      >
        {project.images && project.images.length > 0 && (
          <ImageCarousel
            images={project.images}
            alt={project.title}
          />
        )}
        <CardContent>
          <CardTitle>
            {project.title}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
              >
                <FiExternalLink size={16} />
              </a>
            )}
            <a
              href="https://www.linkedin.com/in/arthur-moreira-ramos/details/projects/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
            >
              <FiLinkedin size={16} />
            </a>
            {project.platforms && project.platforms.length > 0 && (
              <PlatformBadge>
                <FiLayers size={12} />
                {project.platforms.length}{' '}
                {t('projects.platforms' as Parameters<typeof t>[0])}
              </PlatformBadge>
            )}
          </CardTitle>
          <CardDescription>
            {t(project.descriptionKey as Parameters<typeof t>[0])}
          </CardDescription>

          {hasCompanyFeatures &&
            (project.roleKey || project.durationKey || project.highlightKey) && (
              <InfoPillsRow>
                {project.roleKey && (
                  <InfoPill>
                    <FiTarget size={13} />
                    <strong>
                      {t('projects.pill.role' as Parameters<typeof t>[0])}:
                    </strong>{' '}
                    {t(project.roleKey as Parameters<typeof t>[0])}
                  </InfoPill>
                )}
                {project.durationKey && (
                  <InfoPill>
                    <FiClock size={13} />
                    <strong>
                      {t('projects.pill.duration' as Parameters<typeof t>[0])}:
                    </strong>{' '}
                    {t(project.durationKey as Parameters<typeof t>[0])}
                  </InfoPill>
                )}
                {project.highlightKey && (
                  <InfoPill>
                    <FiZap size={13} />
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

  return (
    <PageWrapper>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <PageTitleWrapper>
          <motion.div variants={itemVariants}>
            <PageDescription>{t(subtitleKey)}</PageDescription>
          </motion.div>
          <motion.div variants={itemVariants}>
            <PageHeading>{t(titleKey)}</PageHeading>
          </motion.div>
        </PageTitleWrapper>

        {visibleProjects.length === 0 ? (
          <EmptyState>{t('projects.empty')}</EmptyState>
        ) : hasFeatured ? (
          <>
            <motion.div variants={itemVariants}>
              <SectionHeader>
                <FiStar size={20} />
                <h2>{t('projects.section.featured' as Parameters<typeof t>[0])}</h2>
              </SectionHeader>
            </motion.div>

            <ProjectsGrid>
              {featuredProjects.map((project, index) => renderCard(project, index))}
            </ProjectsGrid>

            {regularProjects.length > 0 && (
              <SectionSpacer>
                <motion.div variants={itemVariants}>
                  <SectionHeader>
                    <FiGrid size={18} />
                    <h2>{t('projects.section.all' as Parameters<typeof t>[0])}</h2>
                  </SectionHeader>
                </motion.div>

                <ProjectsGrid>
                  {regularProjects.map((project, index) => renderCard(project, index))}
                </ProjectsGrid>
              </SectionSpacer>
            )}
          </>
        ) : (
          <ProjectsGrid>
            {visibleProjects.map((project, index) => renderCard(project, index))}
          </ProjectsGrid>
        )}
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

export default ProjectsPage;
