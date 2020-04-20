import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import NoMatch from "./components/pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;