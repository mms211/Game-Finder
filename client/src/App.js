import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Home from "./components/pages/Home/Home";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import NoMatch from "./components/pages/NoMatch";
import Profile from "./components/pages/Profile/Profile";
import Create from "./components/pages/CreatePost";
import Filter from "./components/pages/FilterPosts/FilterPosts";
import Authentication from "./components/pages/Authentication/Authentication";
import Permalink from "./components/pages/Permalink";
import UserContext from "./utils/UserContext";

const App = () => {
  const [userState, setUserState] = useState("ready");
  const [user, setUser] = useState({
    id: "",
    email: "",
  });

  useEffect(() => {
    setUserState("loading...");
    API.getCurrentUser().then((result) => {
      const { id, email } = result.data.userData;
      setUserState("resolved");
      setUser({ id, email });
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Router>
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
            <Profile user={user}/>
          </PrivateRoute>
          <PrivateRoute exact path="/create">
            <Create />
          </PrivateRoute>
          <PrivateRoute exact path="/filter">
            <Filter />
          </PrivateRoute>
          <PrivateRoute path="/postview/:id" component={Permalink} />
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute>
            <NoMatch />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
