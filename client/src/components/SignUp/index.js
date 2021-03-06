import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Header from "../Header";
import "./style.css";

function SignUp(props) {
  return (
    <>
      <Header />
      <Container fluid className="signUpContainer">
        <Card body className="signUpCard">
          <h2 className="header text-center"> Sign Up</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                autoComplete="email"
                onChange={props.handleInputChange}
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
                onChange={props.handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="dark" type="submit" onClick={props.onSubmit}>
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default SignUp;
