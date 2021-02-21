import React from 'react';
import { useTranslation } from 'react-i18next';
import MarkdownRenderer from '../Common/MarkdownRenderer/MarkdownRenderer';
import { useBreadcrumb } from '../PageBreadcrumb/useBreadcrumb';
import englishTutorial from '../../tutorials/en/quickStart';

type Tutorials = {
  [key: string]: string;
};

const tutorials: Tutorials = {
  en: englishTutorial,
  pl: '',
};

const HomeContent = () => {
  const { t, i18n } = useTranslation('common');
  useBreadcrumb([{ text: t('components.HomeContent.sectionTitle') }]);

  const markdown = tutorials[i18n.language] || '';

  return (
    <div>
      <MarkdownRenderer source={markdown} />
    </div>
  );
};

export default HomeContent;
