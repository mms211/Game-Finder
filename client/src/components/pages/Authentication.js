import React, { useState } from "react";
import axios from 'axios';
import Login from "../Login";
import Btn from "../Button";

function Authentication() {
  const [authObject, setAuthObject] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { value, name } = event.target;
    setAuthObject({ ...authObject, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    // console.log("email:", authObject.email, "password:", authObject.password);
    axios.post('/api/users/add', authObject)
      .then(result => console.log(result));
  }

  return (
    <>
      <Login onSubmit={onSubmit} handleInputChange={handleInputChange} />
      <Btn title={"Already have an account?"} onClick={() => console.log("switch to login")} />
    </>
  );
}
export default Authentication;
