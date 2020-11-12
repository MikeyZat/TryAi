import React from 'react';
import { useBreadcrumb } from '../PageBreadcrumb/useBreadcrumb';

const HomeContent = () => {
  useBreadcrumb([{ text: 'Home' }]);
  return <div>Home</div>;
};

export default HomeContent;
