import React, { useContext } from 'react';
import { Breadcrumb } from 'antd';
import AppContext from '../../AppContext';
import Link from '../Common/Link/Link';
import './pageBreadcrumb.less';

const PageBreadcrumb = () => {
  const { breadcrumbContext } = useContext(AppContext);
  return (
    <Breadcrumb className="breadcrumb">
      {breadcrumbContext.map((item, i) => (
        <Breadcrumb.Item key={`${item.text}-${i}`}>
          {item.url ? (<Link url={item.url} isInternal>{item.text}</Link>) : item.text}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
