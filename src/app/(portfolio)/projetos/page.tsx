'use client';

import AllProjectsPage from '@/components/Pages/Projects';
import { ALL_PROJECTS } from '@/config/projects';

const ProjectsPage = () => {
  return <AllProjectsPage projects={ALL_PROJECTS} productionCount={5} />;
};

export default ProjectsPage;
