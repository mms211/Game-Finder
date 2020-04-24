import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Login from "../Login";
import Btn from "../Button";

function Authentication() {
  const [authObject, setAuthObject] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  function handleInputChange(event) {
    const { value, name } = event.target;
    setAuthObject({ ...authObject, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    axios.post('/api/users/add', authObject)
      .then(() => {
        axios.post('/api/authenticate', authObject);
        history.push("/");
      });
  }

  return (
    <>
      <Login onSubmit={onSubmit} handleInputChange={handleInputChange} />
      <Btn title={"Already have an account?"} onClick={() => console.log("switch to login")} />
    </>
  );
}
export default Authentication;
