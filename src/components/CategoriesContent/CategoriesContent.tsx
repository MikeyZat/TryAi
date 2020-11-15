import React from 'react';
import { useBreadcrumb } from '../PageBreadcrumb/useBreadcrumb';
import { useTranslation } from 'react-i18next';

const CategoriesContent = () => {
  const { t } = useTranslation('common');
  useBreadcrumb([], true);
  return <div>{t('components.common.toDo')}</div>;
};

export default CategoriesContent;
