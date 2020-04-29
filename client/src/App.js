import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import NoMatch from "./components/pages/NoMatch";
import Profile from "./components/pages/Profile";
import Create from "./components/pages/CreatePost";
import Filter from "./components/pages/FilterPosts";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Authentication from "./components/pages/Authentication/Authentication";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/signup">
            <Authentication />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute exact path="/create">
            <Create />
          </PrivateRoute>
          <PrivateRoute exact path="/filter">
            <Filter />
          </PrivateRoute>
          <PrivateRoute>
            <NoMatch />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;