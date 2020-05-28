import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../views/Home';
import SignIn from "../views/registration/SignIn";


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign_in" component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default App;
