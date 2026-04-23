'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  CardContent,
  CardDescription,
  CardImage,
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

export interface ProjectItem {
  title: string;
  description: string;
  image?: string;
  tags: string[];
}

interface ProjectsPageProps {
  titleKey: 'projects.title.personal' | 'projects.title.company' | 'projects.title.university';
  subtitleKey: 'projects.subtitle.personal' | 'projects.subtitle.company' | 'projects.subtitle.university';
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

const ProjectsPage = ({ titleKey, subtitleKey, projects }: ProjectsPageProps) => {
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
                  {project.image && (
                    <CardImage>
                      <img src={project.image} alt={project.title} />
                    </CardImage>
                  )}
                  <CardContent>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
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
