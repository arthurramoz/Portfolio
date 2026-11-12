'use client';

import { useRouter } from 'next/navigation';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage, type DictionaryKeys } from '@/contexts/LanguageContext';
import { HOME_FEATURED_PROJECTS, type ProjectItem } from '@/config/projects';
import ProjectCard from '@/components/Pages/Projects/ProjectCard';
import { ProjectsGrid } from '@/components/Pages/Projects/styles';
import { AllLink, Header, MobileAllLink, Section, Tag, Title } from './styles';

const Featured = () => {
  const { t } = useLanguage();
  const tr = (key: string) => t(key as DictionaryKeys);
  const router = useRouter();

  const openProject = (project: ProjectItem) => {
    router.push(`/projetos?project=${encodeURIComponent(project.title)}`);
  };

  return (
    <Section id="projects">
      <Header>
        <div>
          <Tag>{tr('home.featured.tag')}</Tag>
          <Title>{tr('home.featured.title')}</Title>
        </div>
        <AllLink href="/projetos">
          {tr('home.featured.cta')}
          <FiArrowRight size={15} aria-hidden="true" />
        </AllLink>
      </Header>

      <ProjectsGrid>
        {HOME_FEATURED_PROJECTS.map(project => (
          <ProjectCard key={project.title} project={project} onOpen={openProject} />
        ))}
      </ProjectsGrid>

      <MobileAllLink href="/projetos">
        {tr('home.featured.cta')}
        <FiArrowRight size={15} aria-hidden="true" />
      </MobileAllLink>
    </Section>
  );
};

export default Featured;
