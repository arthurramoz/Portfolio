'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { useLanguage, type DictionaryKeys } from '@/contexts/LanguageContext';
import type { ProjectItem, ProjectType } from '@/config/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import {
  PageWrapper,
  PageTitleWrapper,
  PageHeading,
  PageDescription,
} from '@/components/Pages/global';
import {
  EmptyState,
  FilterBar,
  FilterButton,
  HireButton,
  ProjectsGrid,
  Section,
  SectionLabel,
  Stat,
  Stats,
  StatsRow,
} from './styles';

export type { ProjectItem };

interface AllProjectsPageProps {
  projects: ProjectItem[];
  productionCount?: number;
}

type FilterType = 'all' | ProjectType;

const FILTER_KEYS: FilterType[] = [
  'all',
  'ecommerce',
  'saas',
  'dashboard',
  'landing',
  'other',
];

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]/g, '');

const AllProjectsPage = ({ projects, productionCount = 5 }: AllProjectsPageProps) => {
  const { t } = useLanguage();
  const tr = (key: string) => t(key as DictionaryKeys);
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const visibleProjects = useMemo(
    () => projects.filter(project => !project.hidden),
    [projects],
  );

  // Abre o projeto vindo de /projetos?project=nome (links da home e externos)
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('project');
    if (!param) return;

    const wanted = normalize(param);
    const match = visibleProjects.find(project => {
      const title = normalize(project.title);
      return title.includes(wanted) || wanted.includes(title);
    });
    if (match) setSelectedProject(match);
  }, [visibleProjects]);

  const counts = useMemo(() => {
    const map = new Map<FilterType, number>([['all', visibleProjects.length]]);
    visibleProjects.forEach(project => {
      map.set(project.projectType, (map.get(project.projectType) ?? 0) + 1);
    });
    return map;
  }, [visibleProjects]);

  const yearsActive = useMemo(() => {
    if (visibleProjects.length === 0) return 3;
    const years = visibleProjects.map(project => project.year);
    return Math.max(...years) - Math.min(...years) + 1;
  }, [visibleProjects]);

  const filtered = useMemo(
    () =>
      activeFilter === 'all'
        ? visibleProjects
        : visibleProjects.filter(project => project.projectType === activeFilter),
    [visibleProjects, activeFilter],
  );

  // Projetos com capa primeiro, depois os que tem print, mantendo a ordem por data
  const mediaRank = (project: ProjectItem) =>
    project.cover ? 0 : project.images?.length ? 1 : 2;
  const byMedia = (a: ProjectItem, b: ProjectItem) => mediaRank(a) - mediaRank(b);

  const featured = filtered.filter(project => project.featured).sort(byMedia);
  const others = filtered.filter(project => !project.featured).sort(byMedia);

  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <PageWrapper>
      <PageTitleWrapper>
        <PageHeading>{tr('projects.title.all')}</PageHeading>
        <PageDescription>{tr('projects.subtitle.all')}</PageDescription>
      </PageTitleWrapper>

      <StatsRow>
        <Stats>
          <Stat>
            <dt>{tr('projects.impact.total')}</dt>
            <dd>{visibleProjects.length}+</dd>
          </Stat>
          <Stat>
            <dt>{tr('projects.impact.prod')}</dt>
            <dd>{productionCount}</dd>
          </Stat>
          <Stat>
            <dt>{tr('projects.impact.years')}</dt>
            <dd>{yearsActive}+</dd>
          </Stat>
        </Stats>

        <HireButton type="button" onClick={() => router.push('/contato')}>
          <FiMail size={15} aria-hidden="true" />
          {tr('projects.impact.cta')}
        </HireButton>
      </StatsRow>

      <FilterBar role="tablist">
        {FILTER_KEYS.filter(key => (counts.get(key) ?? 0) > 0).map(key => (
          <FilterButton
            key={key}
            type="button"
            role="tab"
            aria-selected={activeFilter === key}
            $active={activeFilter === key}
            onClick={() => setActiveFilter(key)}
          >
            {tr(`projects.filter.${key}`)}
            <span>{counts.get(key)}</span>
          </FilterButton>
        ))}
      </FilterBar>

      {filtered.length === 0 && <EmptyState>{tr('projects.empty')}</EmptyState>}

      {featured.length > 0 && (
        <Section>
          <SectionLabel>{tr('projects.section.featured')}</SectionLabel>
          <ProjectsGrid>
            {featured.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpen={setSelectedProject}
                featured
                priority={index < 3}
              />
            ))}
          </ProjectsGrid>
        </Section>
      )}

      {others.length > 0 && (
        <Section>
          <SectionLabel>{tr('projects.section.more')}</SectionLabel>
          <ProjectsGrid>
            {others.map(project => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </ProjectsGrid>
        </Section>
      )}

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </PageWrapper>
  );
};

export default AllProjectsPage;
