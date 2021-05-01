import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage, SearchPage } from "./views/index";
import * as ROUTES from "./routes/routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LANDING_PAGE}>
          <LandingPage />
        </Route>
        <Route path={ROUTES.SEARCH_PAGE}>
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
