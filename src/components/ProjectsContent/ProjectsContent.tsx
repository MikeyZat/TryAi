import React from 'react';
import { useBreadcrumb } from '../PageBreadcrumb/useBreadcrumb';

const ProjectsContent = () => {
  useBreadcrumb([{ text: 'Projects' }]);
  return <div>Explore projects</div>;
};

export default ProjectsContent;
