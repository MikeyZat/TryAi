import React from 'react';
import { HomeOutlined, BarsOutlined, FileImageOutlined, FieldBinaryOutlined, SolutionOutlined } from '@ant-design/icons';
import HomeContent from '../components/HomeContent/HomeContent';
import CategoriesContent from '../components/CategoriesContent/CategoriesContent';
import DigitRecognitionContent from '../components/DigitRecognition/DigitsContent';
import ImgRecognitionContent from '../components/ImgRecognition/ImgRecognitionContent';
import NotebooksContent from '../components/NotebooksContent/NotebooksContent';
import { useTranslation } from 'react-i18next';

export const useRoutes = (): RouteType[] => {
  const { t } = useTranslation('common');
  return getRoutes(t);
};

export const getRoutes = (t: (id: string) => string): RouteType[] => [
  {
    path: '/',
    exact: true,
    text: t('components.HomeContent.sectionTitle'),
    icon: <HomeOutlined />,
    component: <HomeContent />,
  },
  {
    path: '/categories',
    exact: true,
    text: t('components.CategoriesContent.sectionTitle'),
    icon: <BarsOutlined />,
    component: <CategoriesContent />,
    routes: [
      {
        path: '/categories/digit_recognition',
        text: t('components.DigitsRecognition.sectionTitle'),
        icon: <FieldBinaryOutlined />,
        component: <DigitRecognitionContent />,
      },
      {
        path: '/categories/image_recognition',
        text: t('components.ImageRecognition.sectionTitle'),
        icon: <FileImageOutlined />,
        component: <ImgRecognitionContent />,
      },
    ],
  },
  {
    path: '/notebooks',
    exact: true,
    text: t('components.NotebooksContent.sectionTitle'),
    icon: <SolutionOutlined />,
    component: <NotebooksContent />,
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
