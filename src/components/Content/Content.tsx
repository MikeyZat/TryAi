import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import HomeContent from '../HomeContent/HomeContent';
import { useRoutes } from '../../routes/routes';

const Content = () => {
  const routes = useRoutes();
  const flatten = (acc: any[], current: any) => {
    if (Array.isArray(current.routes)) {
      return [...acc, current, ...current.routes];
    }
    return [...acc, current];
  };
  const flattenedRoutes = routes.reduce(flatten, []);
  return (
    <Layout.Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <Switch>
        {flattenedRoutes.map((route) => (
          <Route key={route.path} exact={route.exact} path={route.path}>
            {route.component}
          </Route>
        ))}
        <Route exact path="/">
          <HomeContent />
        </Route>
      </Switch>
    </Layout.Content>
  );
};

export default Content;
