import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import NoMatch from "./components/pages/NoMatch";
import Profile from "./components/pages/Profile";
import Create from "./components/pages/CreatePost";
import Filter from "./components/pages/FilterPosts";
<<<<<<< HEAD
import Authentication from "./components/pages/Authentication/Authentication";
=======
import Authentication from "./components/pages/Authentication";
import PrivateRoute from "./components/PrivateRoute";

//dummy login page
import BundtCake from "./components/BundtCake";
>>>>>>> bmb_authenticate

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/auth">
            <Authentication />
          </Route>
          <Route exact path="/login">
            <BundtCake />
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