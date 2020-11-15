import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContent from '../HomeContent/HomeContent';
import { useRoutes } from '../../routes/routes';

const ContentSwitcher = () => {
  const routes = useRoutes();
  const flatten = (acc: any[], current: any) => {
    if (Array.isArray(current.routes)) {
      return [...acc, current, ...current.routes];
    }
    return [...acc, current];
  };
  const flattenedRoutes = routes.reduce(flatten, []);
  return (
    <Switch>
      {flattenedRoutes.map((route) => (
        <Route key={route.path} exact={route.exact} path={route.path}>
          {route.component}
        </Route>
      ))}
    </Switch>
  );
};

export default ContentSwitcher;
