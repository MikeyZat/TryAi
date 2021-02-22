import React from 'react';

export interface ContextProps {
  setBreadcrumb: React.Dispatch<React.SetStateAction<BreacrumbItemType[]>>;
  breadcrumbContext: BreacrumbItemType[];
};

export interface BreacrumbItemType {
  text: string;
  url?: string;
};

const AppContext = React.createContext<ContextProps>({
  breadcrumbContext: [],
  setBreadcrumb: () => {},
});

export default AppContext;
