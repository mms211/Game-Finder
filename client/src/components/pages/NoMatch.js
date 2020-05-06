import React from "react";
import NavBar from "../NavBar";
import Header from "../Header";

const NoMatch = () => {
  return (
    <>
      <Header />
      <NavBar />
      <h3> Sorry, can't find that page</h3>
    </>
  );
};

export default NoMatch;
