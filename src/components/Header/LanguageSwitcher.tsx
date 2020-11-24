import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, CheckOutlined } from '@ant-design/icons';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation('common');

  const languages = ['en', 'pl'];

  const getIcon = (lng: string) => (lng === i18n.language ? <CheckOutlined /> : null);
  const handleLngChange = (lng: string) => {
    localStorage.setItem('lng', lng);
    i18n.changeLanguage(lng);
  };
  const menu = (
    <Menu theme="dark">
      {languages.map((lng) => (
        <Menu.Item key={lng} onClick={() => handleLngChange(lng)} icon={getIcon(lng)}>
          {t(`components.common.${lng}`)}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Button type="link">
        {t('components.Header.LanguageSwitcher.chooseLanguage')} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default LanguageSwitcher;
