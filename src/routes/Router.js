import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Auth from './Auth';
import Cart from './Cart';
import CustomerService from './CustomerService';
import MySnack from './MySnack';
import Category from './Category';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/ms" component={MySnack} />
        <Route path="/cart" component={Cart} />
        <Route path="/service" component={CustomerService} />
        <Route path="/categories/:category" component={Category} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
