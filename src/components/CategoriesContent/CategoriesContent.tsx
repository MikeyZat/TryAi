import React, { useState } from 'react';
import { PageHeader, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { useBreadcrumb } from '../PageBreadcrumb/useBreadcrumb';
import CardsGrid from '../Common/CardsGrid/CardsGrid';
import { CardInfo } from '../Common/CardsGrid/CardsTypes';
import { useCategories } from '../../constData/categories';

const { Search } = Input;

const CategoriesContent = () => {
  const { t } = useTranslation('common');
  useBreadcrumb([{ text: t('components.CategoriesContent.sectionTitle') }]);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const categories = useCategories();
  const [filteredCategories, setFilteredCategories] = useState<CardInfo[]>(categories);

  const onSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    setFilteredCategories(categories.filter((category) => category.title.toLowerCase().includes(newQuery.toLowerCase())));
  };

  return (
  <div>
    <PageHeader
      className="custom-page-header"
      title={t('components.CategoriesContent.contentTitle')}
      subTitle={t('components.CategoriesContent.contentSubtitle')}
      extra={[
        <Search
          value={searchQuery}
          placeholder={t('components.CategoriesContent.searchPlaceholder')}
          onSearch={onSearch}
          onChange={(e) => onSearch(e.target.value)}
          enterButton
          allowClear
        />
      ]}
      backIcon={false}
    />
    <CardsGrid cardsInfo={filteredCategories} onlyInternalLinks />
  </div>
  );
};

export default CategoriesContent;
