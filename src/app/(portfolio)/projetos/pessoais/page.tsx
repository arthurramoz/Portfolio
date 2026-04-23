'use client';

import ProjectsPage from '@/components/Pages/Projects';

const PersonalProjectsPage = () => {
  return (
    <ProjectsPage
      titleKey="projects.title.personal"
      subtitleKey="projects.subtitle.personal"
      projects={[]}
    />
  );
};

export default PersonalProjectsPage;
