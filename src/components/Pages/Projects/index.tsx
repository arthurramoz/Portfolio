'use client';

import { motion } from 'motion/react';
import { FiExternalLink, FiLinkedin } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ProjectItem } from '@/config/projects';
import ImageCarousel from './ImageCarousel';
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
  ProjectCard,
  ProjectsGrid,
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

        <ProjectsGrid>
          {projects.length === 0 ? (
            <motion.div variants={itemVariants}>
              <EmptyState>{t('projects.empty')}</EmptyState>
            </motion.div>
          ) : (
            projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard>
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
                        >
                          <FiExternalLink size={16} />
                        </a>
                      )}
                      <a
                        href="https://www.linkedin.com/in/arthur-moreira-ramos/details/projects/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiLinkedin size={16} />
                      </a>
                    </CardTitle>
                    <CardDescription>
                      {t(project.descriptionKey as Parameters<typeof t>[0])}
                    </CardDescription>
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
            ))
          )}
        </ProjectsGrid>
      </motion.div>
    </PageWrapper>
  );
};

export default ProjectsPage;
