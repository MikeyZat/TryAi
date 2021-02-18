import React, { useState } from 'react';
import { PageHeader, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { useBreadcrumb } from '../PageBreadcrumb/useBreadcrumb';
import NotebooksGrid from './NotebooksGrid';
import { NotebookDetails } from './notebookTypes';
import allNotebooks from '../../notebooksInfo/notebooks';
import './notebooks.less';

const { Search } = Input;

const NotebooksContent = () => {
  const { t } = useTranslation('common');
  useBreadcrumb([{ text: t('components.NotebooksContent.sectionTitle') }]);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [notebooks, setNotebooks] = useState<NotebookDetails[]>(allNotebooks);

  const onSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    setNotebooks(allNotebooks.filter((notebook) => notebook.title.toLowerCase().includes(newQuery.toLowerCase())));
  };

  return (
  <div>
    <PageHeader
      className="custom-page-header"
      title={t('components.NotebooksContent.contentTitle')}
      subTitle={t('components.NotebooksContent.contentSubtitle')}
      extra={[
        <Search
          value={searchQuery}
          placeholder={t('components.NotebooksContent.searchPlaceholder')}
          onSearch={onSearch}
          onChange={(e) => onSearch(e.target.value)}
          enterButton
          allowClear
        />
      ]}
      backIcon={false}
    />
    <NotebooksGrid notebooks={notebooks} />
  </div>
  );
};

export default NotebooksContent;
