import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import NoMatch from "./components/pages/NoMatch";
import Profile from "./components/pages/Profile";
import Create from "./components/pages/CreatePost";
import Filter from "./components/pages/FilterPosts";
import Authentication from "./components/pages/Authentication";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route exact path={["/login"]}>
            <Authentication />
          </Route>
          <Route exact path={["/profile"]}>
            <Profile />
          </Route>
          <Route exact path={["/create"]}>
            <Create />
          </Route>
          <Route exact path={["/filter"]}>
            <Filter />
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