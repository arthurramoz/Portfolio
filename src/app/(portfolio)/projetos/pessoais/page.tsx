'use client';

import ProjectsPage from '@/components/Pages/Projects';
import { PERSONAL_PROJECTS } from '@/config/projects';

const PersonalProjectsPage = () => {
  return (
    <ProjectsPage
      titleKey="projects.title.personal"
      subtitleKey="projects.subtitle.personal"
      projects={PERSONAL_PROJECTS}
    />
  );
};

export default PersonalProjectsPage;
