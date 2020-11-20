import React, { useContext } from 'react';
import { Breadcrumb } from 'antd';
import AppContext from '../../AppContext';
import './pageBreadcrumb.less';

const PageBreadcrumb = () => {
  const { breadcrumbContext } = useContext(AppContext);
  return (
    <Breadcrumb className="breadcrumb">
      {breadcrumbContext.map((item, i) => (
        <Breadcrumb.Item key={`${item.text}-${i}`}>{item.text}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
