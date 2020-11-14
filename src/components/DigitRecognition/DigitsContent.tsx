import React from 'react';
import { useBreadcrumb } from '../PageBreadcrumb/useBreadcrumb';
import { useTranslation } from 'react-i18next';

const DigitsContent = () => {
  const { t } = useTranslation('common');
  useBreadcrumb([{ text: t('components.DigitsRecognition.sectionTitle') }], true);
  return <div>{t('components.common.toDo')}</div>;
};

export default DigitsContent;
