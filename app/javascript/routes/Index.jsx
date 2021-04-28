import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Homepage";
import Articles from "../components/Articles";
import Article from "../components/Article";
import NewArticle from "../components/NewArticle";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/articles" exact component={Articles} />
      <Route path="/articles/new" exact component={NewArticle} />
      <Route path="/article/:id" exact component={Article} />
    </Switch>
  </Router>
);
