import React from 'react';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';
import './header.less';

const MainHeader = () => {
  const { t } = useTranslation('common');
  return (
    <Layout.Header>
      <div className="logo">{t('components.common.appTitle')}</div>
    </Layout.Header>
  );
};

export default MainHeader;
