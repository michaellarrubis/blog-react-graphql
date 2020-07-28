import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./utils/routes";

import Home from "./pages/Home";
import Post from "./pages/Post";
import PostForm from "./pages/PostForm";
import NotFound from "./pages/404";

const Navigation = () => (
  <Switch>
    <Route exact path={routes.home} component={Home} />
    <Route exact path={routes.posts} component={Post} />
    <Route exact path={routes.postCreate} component={PostForm} />
    <Route exact path={routes.postEdit} component={PostForm} />
    <Route exact path="*" component={NotFound} />
    <Route exact path={routes.pageNotFound} component={NotFound} />
  </Switch>
);

export default Navigation;
