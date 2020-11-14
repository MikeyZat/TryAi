import React from 'react';
import { useBreadcrumb } from '../PageBreadcrumb/useBreadcrumb';
import { useTranslation } from 'react-i18next';

const HomeContent = () => {
  const { t } = useTranslation('common');
  useBreadcrumb([{ text: t('components.HomeContent.sectionTitle') }]);
  return <div>{t('components.common.toDo')}</div>;
};

export default HomeContent;
