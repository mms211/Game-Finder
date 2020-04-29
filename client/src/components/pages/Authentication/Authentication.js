import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Login from "../../Login";
import Btn from "../../Button";
import Navbar from "react-bootstrap/Navbar";
import "./Authentication.css";

import UserContext from '../../../utils/UserContext';

const Authentication = () => {
  const [authObject, setAuthObject] = useState({
    email: "",
    password: "",
  });
  /* 
    Add state to the application so jsx doesn't break while
    trying to render things that aren't defined yet.
  */
  const [authState, setAuthState] = useState("ready");
  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setAuthObject({ ...authObject, [name]: value });
    // console.log(authObject);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setAuthObject("loading...");
    axios.post('/api/users/add', authObject)
      .then((result) => {
        console.log(result);
        axios.post('/api/authenticate', authObject);
        setAuthState("resolved");
        history.push("/");
      });
    // console.log(event.target);
  }

  return (
    <UserContext.Provider value={authObject}>
      <Login onSubmit={onSubmit} handleInputChange={handleInputChange} />
      <Navbar sticky="bottom" className="footer">
        <Btn title={"Already have an account?"} onClick={() => console.log("switch to login")} />
      </Navbar>
    </UserContext.Provider>
  );
}
export default Authentication;
