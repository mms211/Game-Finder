import React from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import Container from "react-bootstrap/Container";

const NoMatch = () => {
  return (
    <Container>
      <Header />
      <NavBar />
      <h3> Sorry, can't find that page</h3>
    </Container>
  );
};

export default NoMatch;
