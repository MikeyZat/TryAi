import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import HomeContent from '../components/HomeContent/HomeContent';
import ProjectsContent from '../components/ProjectsContent/ProjectsContent';

export const useRoutes = (): RouteType[] => {
  return routes;
};

export const routes: RouteType[] = [
  {
    path: '/',
    component: <HomeContent />,
    exact: true,
    icon: <HomeOutlined />,
    text: 'Home',
  },
  {
    path: '/projects',
    component: <ProjectsContent />,
    exact: true,
    text: 'projects',
    routes: [
      {
        path: '/projects/xD',
        component: <div>xD</div>,
        text: 'xD',
      },
      {
        path: '/projects/y',
        component: <div>y</div>,
        text: 'y',
      },
    ],
  },
];

export type RouteType = {
  path: string;
  component: React.ReactNode;
  text: string;
  exact?: boolean;
  icon?: React.ReactNode;
  routes?: RouteType[];
};
