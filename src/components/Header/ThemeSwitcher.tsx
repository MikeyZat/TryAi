import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, CheckOutlined } from '@ant-design/icons';

const currentTheme = 'light'; // TO DO: change to current theme

const ThemeSwitcher = () => {
  const { t } = useTranslation('common');

  const themes = ['light'];

  const getIcon = (theme: string) => (theme === currentTheme ? <CheckOutlined /> : null);
  const menu = (
    <Menu theme="dark">
      {themes.map((theme) => (
        <Menu.Item key={theme} onClick={() => {}} icon={getIcon(theme)}>
          {t(`components.Header.ThemeSwitcher.${theme}`)}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Button type="text" className="theme-switcher">
        {t('components.Header.ThemeSwitcher.chooseTheme')} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default ThemeSwitcher;
