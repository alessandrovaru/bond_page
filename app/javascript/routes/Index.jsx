import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Homepage";
import Articles from "../components/Articles";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/articles" exact component={Articles} />
    </Switch>
  </Router>
);
