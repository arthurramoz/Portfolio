'use client';

import { motion } from 'motion/react';
import { FiExternalLink, FiLinkedin } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ProjectItem } from '@/config/projects';
import ImageCarousel from './ImageCarousel';
import {
  CardContent,
  CardDescription,
  CardTitle,
  EmptyState,
  PageContainer,
  PageSubtitle,
  PageTitle,
  ProjectCard,
  ProjectsGrid,
  Tag,
  TagsRow,
  TitleWrapper,
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
    <PageContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TitleWrapper>
          <motion.div variants={itemVariants}>
            <PageSubtitle>{t(subtitleKey)}</PageSubtitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <PageTitle>{t(titleKey)}</PageTitle>
          </motion.div>
        </TitleWrapper>

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
    </PageContainer>
  );
};

export default ProjectsPage;
