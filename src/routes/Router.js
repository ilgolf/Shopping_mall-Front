import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Auth from '../components/Auth';

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
