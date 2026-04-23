'use client';

import ProjectsPage from '@/components/Pages/Projects';
import { COMPANY_PROJECTS } from '@/config/projects';

const CompanyProjectsPage = () => {
  return (
    <ProjectsPage
      titleKey="projects.title.company"
      subtitleKey="projects.subtitle.company"
      projects={COMPANY_PROJECTS}
    />
  );
};

export default CompanyProjectsPage;
