import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Login from "../../Login";
import Btn from "../../Button";
import Navbar from "react-bootstrap/Navbar";
import "./Authentication.css";

const Authentication = () => {
  const [authObject, setAuthObject] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setAuthObject({ ...authObject, [name]: value });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/users/add', authObject)
      .then((result) => {
        console.log(result);
        axios.post('/api/authenticate', authObject);
        history.push("/");
      });
  }

  return (
    <>
      <Login onSubmit={onSubmit} handleInputChange={handleInputChange} />
      <Navbar sticky="bottom" className="footer">
        <Btn title={"Already have an account?"} href="/login" />
      </Navbar>
    </>
  );
}
export default Authentication;
