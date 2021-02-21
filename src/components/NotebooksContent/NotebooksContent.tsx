import React, { useState } from 'react';
import { PageHeader, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { useBreadcrumb } from '../PageBreadcrumb/useBreadcrumb';
import CardsGrid from '../Common/CardsGrid/CardsGrid';
import { CardInfo } from '../Common/CardsGrid/CardsTypes';
import { useNotebooks } from '../../constData/notebooks';
import './notebooks.less';

const { Search } = Input;

const NotebooksContent = () => {
  const { t } = useTranslation('common');
  useBreadcrumb([{ text: t('components.NotebooksContent.sectionTitle') }]);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const notebooks = useNotebooks();
  const [filteredNotebooks, setFilteredNotebooks] = useState<CardInfo[]>(notebooks);

  const onSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    setFilteredNotebooks(notebooks.filter((notebook) => notebook.title.toLowerCase().includes(newQuery.toLowerCase())));
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
    <CardsGrid cardsInfo={filteredNotebooks} />
  </div>
  );
};

export default NotebooksContent;
