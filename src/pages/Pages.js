import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from '../utils/routes';

import Home from './Home';
import Post from './Post';
import PostForm from './PostForm';
import NotFound from './404';

const Pages = () => (
    <Switch>
        <Route exact path={routes.home} component={Home}/>
        <Route exact path={routes.posts} component={Post}/>
        <Route exact path={routes.postCreate} component={PostForm}/>
        <Route exact path={routes.postEdit} component={PostForm}/>
        <Route exact path="*" component={NotFound}/>
        <Route exact path={routes.pageNotFound} component={NotFound}/>
    </Switch>
);

export default Pages;
