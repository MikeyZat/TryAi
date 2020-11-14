import React from 'react';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

const MainHeader = () => {
  const { t } = useTranslation('common');
  return (
    <Layout.Header>
      <div style={{ color: '#fff' }}>{t('components.common.appTitle')}</div>
    </Layout.Header>
  );
};

export default MainHeader;
