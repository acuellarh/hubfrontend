import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../views/Home';
import SignIn from "../views/registration/SignIn";
import Login from "../views/registration/Login";
import HomeShops from "../views/shop/HomeShops";
import NewShop from "../views/shop/NewShop";
import Blog from "../views/Blog";
import About from "../views/About";


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign_in" component={SignIn} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/about" component={About} />
      <Route exact path="/home_shops" component={HomeShops} />
      <Route exact path="/new_shop" component={NewShop} />
    </Switch>
  </BrowserRouter>
);

export default App;
