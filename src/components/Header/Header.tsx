import React from 'react';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import './header.less';

const { Header } = Layout;

const MainHeader = () => {
  const { t } = useTranslation('common');
  return (
    <Header className="header">
      <div className="logo">{t('components.common.appTitle')}</div>
      <div className="options-container">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </Header>
  );
};

export default MainHeader;
