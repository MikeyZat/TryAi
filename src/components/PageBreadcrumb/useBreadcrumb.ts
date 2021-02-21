import { useContext, useEffect } from 'react';
import AppContext, { BreacrumbItemType } from '../../AppContext';
import { useTranslation } from 'react-i18next';

export const useBreadcrumb = (breadcrumbContext: BreacrumbItemType[], presetWithCategories?: boolean) => {
  const { setBreadcrumb } = useContext(AppContext);
  const { t } = useTranslation('common');

  const categoryItem = { text: t('components.CategoriesContent.sectionTitle'), url: '/categories' };

  useEffect(() => {
    setBreadcrumb(presetWithCategories ? [categoryItem, ...breadcrumbContext] : breadcrumbContext);
    return () => {
      setBreadcrumb([]);
    };
  }, []);
};
