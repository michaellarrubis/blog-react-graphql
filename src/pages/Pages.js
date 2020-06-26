import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from '../utils/routes';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import Article from './Article';
import ArticleForm from './ArticleForm';

const Pages = () => (
    <Switch>
        <Route exact path={routes.home} component={Home}/>
        <Route exact path={routes.login} component={Login}/>
        <Route exact path={routes.register} component={Register}/>
        <Route exact path={routes.article} component={Article}/>
        <Route exact path={routes.articleCreate} component={ArticleForm}/>
        <Route exact path={routes.articleEdit} component={ArticleForm}/>
    </Switch>
);

export default Pages;
