import React from "react";
import Btn from "../../Button";
import NavBar from "../../NavBar";
import Header from "../../Header";
import Container from "react-bootstrap/Container";
import "./FilterPosts.css";

const FilterPosts = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="filterPosts">
        <Container>
          <Btn title="Looking For A Player?" href="/" /> <br />
          <Btn title="Looking For Game?" href="/" />
        </Container>
      </div>
    </>
  );
};

export default FilterPosts;
