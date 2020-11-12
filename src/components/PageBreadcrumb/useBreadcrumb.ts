import { useContext, useEffect } from 'react';
import AppContext, { BreacrumbItemType } from '../../AppContext';

export const useBreadcrumb = (breadcrumbContext: BreacrumbItemType[]) => {
  const { setBreadcrumb } = useContext(AppContext);

  useEffect(() => {
    setBreadcrumb(breadcrumbContext);
    return () => {
      setBreadcrumb([]);
    };
  }, []);
};
