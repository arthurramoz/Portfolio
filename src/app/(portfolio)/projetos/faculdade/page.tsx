'use client';

import ProjectsPage from '@/components/Pages/Projects';
import { UNIVERSITY_PROJECTS } from '@/config/projects';

const UniversityProjectsPage = () => {
  return (
    <ProjectsPage
      titleKey="projects.title.university"
      subtitleKey="projects.subtitle.university"
      projects={UNIVERSITY_PROJECTS}
    />
  );
};

export default UniversityProjectsPage;
