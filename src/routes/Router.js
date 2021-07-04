import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Auth from './Auth';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
