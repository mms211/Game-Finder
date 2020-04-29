import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Btn from "../Button";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./style.css";

const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/authenticate", login)
      .then((response) => {
        console.log(response);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container fluid className="loginContainer">
        <Card body className="loginCard">
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
        </Card>
      </Container>
      <Navbar sticky="bottom" className="footer">
        <Btn title={"Want to create an account?"} href="/signup" />
      </Navbar>
    </>
  );
};

export default Login;
