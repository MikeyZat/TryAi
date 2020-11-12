import React from 'react';

type ContextProps = {
  setBreadcrumb: React.Dispatch<React.SetStateAction<BreacrumbItemType[]>>;
  breadcrumbContext: BreacrumbItemType[];
};

export type BreacrumbItemType = {
  text: string;
  url?: string;
};

const AppContext = React.createContext<ContextProps>({
  breadcrumbContext: [],
  setBreadcrumb: () => {},
});

export default AppContext;
