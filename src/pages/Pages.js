import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from '../utils/routes';

import HomePage from './HomePage';
import NewsArticlePage from './NewsArticlePage';

const Pages = () => (
    <Switch>
        <Route exact path={routes.home}>
            <HomePage />
        </Route>
        <Route exact path={routes.newsArticle}>
            <NewsArticlePage />
        </Route>
    </Switch>
);

export default Pages;
