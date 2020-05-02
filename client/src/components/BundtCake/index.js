import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import UserContext from "../../utils/UserContext"
import { useHistory } from 'react-router-dom';


const BundtCake = (props) => {
  const history = useHistory();
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    // console.log(login);
    const { value, name } = event.target;
    setLogin({ ...login, [name]: value });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(login.password);
    axios.post('/api/authenticate', login)
      .then(() => {
        // console.log(res);
        props.setUser({ email: login.email });
        history.push('/profile');
      })
      .catch(err => console.log(err));
  }

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          autoComplete="email"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="password"
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Button variant="dark" type="submit" onClick={handleFormSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default BundtCake;
