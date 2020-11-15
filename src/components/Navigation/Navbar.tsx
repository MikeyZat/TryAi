import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useRoutes, RouteType } from '../../routes/routes';

const { SubMenu } = Menu;

const LeftMenu = () => {
  const routes = useRoutes();
  const location = useLocation();

  const expandRoute = (route: RouteType) => {
    if (route.routes) {
      return (
        <SubMenu key={route.path} icon={route.icon || null} title={route.text}>
          {route.routes.map(expandRoute)}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={route.path} icon={route.icon || null}>
        <Link to={route.path}>{route.text}</Link>
      </Menu.Item>
    );
  };

  const expandableIds = routes.filter((route) => !!route.routes).map((route) => route.path);

  return (
    <Menu mode="inline" defaultOpenKeys={expandableIds} defaultSelectedKeys={[location.pathname]}>
      {routes.map(expandRoute)}
    </Menu>
  );
};

export default LeftMenu;
