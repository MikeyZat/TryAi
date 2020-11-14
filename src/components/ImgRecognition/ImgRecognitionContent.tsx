import React from 'react';
import { useBreadcrumb } from '../PageBreadcrumb/useBreadcrumb';
import { useTranslation } from 'react-i18next';

const ImgRecognitionContent = () => {
  const { t } = useTranslation('common');
  useBreadcrumb([{ text: t('components.ImageRecognition.sectionTitle') }], true);
  return <div>{t('components.common.toDo')}</div>;
};

export default ImgRecognitionContent;
