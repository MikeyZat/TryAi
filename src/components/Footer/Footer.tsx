import React from 'react';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

const MainHeader = () => {
  const { t } = useTranslation('common');
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      {t('components.Footer.title', { creators: 'Mikołaj Zatorski & Filip Twardy' })}
    </Layout.Footer>
  );
};

export default MainHeader;
