import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from '../utils/routes';

import HomePage from './HomePage';
import ArticlePage from './ArticlePage';
import ArticleFormPage from './ArticleFormPage';

const Pages = () => (
    <Switch>
        <Route exact path={routes.home} component={HomePage}/>
        <Route exact path={routes.article} component={ArticlePage}/>
        <Route exact path={routes.articleCreate} component={ArticleFormPage}/>
        <Route exact path={routes.articleEdit} component={ArticleFormPage}/>
    </Switch>
);

export default Pages;
