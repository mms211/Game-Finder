import React from "react";
import Btn from "../Button";
import Container from "react-bootstrap/Container";

const FilterPosts = () => {
  return (
    <Container>
      <Btn title="Looking For A Player?" href="/"/>{" "}
      <Btn title="Looking For Game?" href="/"/>
    </Container>
  );
}

export default FilterPosts;
