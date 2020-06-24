import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from '../utils/routes';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const Pages = () => (
  <div className="pages">
    <Switch>
      <Route exact path={routes.home}>
        <HomePage />
      </Route>
      <Route exact path={routes.login}>
        <LoginPage />
      </Route>
      <Route exact path={routes.register}>
        <RegisterPage />
      </Route>
    </Switch>
  </div>
);

export default Pages;
