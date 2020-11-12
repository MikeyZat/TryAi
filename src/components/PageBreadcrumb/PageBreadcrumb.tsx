import React, { useContext } from 'react';
import { Breadcrumb } from 'antd';
import AppContext from '../../AppContext';

const PageBreadcrumb = () => {
  const { breadcrumbContext } = useContext(AppContext);
  return (
    <Breadcrumb>
      {breadcrumbContext.map((item, i) => (
        <Breadcrumb.Item key={`${item.text}-${i}`}>{item.text}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
