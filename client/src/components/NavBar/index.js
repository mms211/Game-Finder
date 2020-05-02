import React from "react";
import Nav from "react-bootstrap/Nav";
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./style.css";

function NavBar() {
  return (
    <>
      <Jumbotron fluid className="jumbo">
        <h1>Game Finder</h1>
      </Jumbotron>
      <Nav className="justify-content-center navbar" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/" className="navFont">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/profile" className="navFont">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/create" className="navFont">Create a Post</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/filter" className="navFont">Filter Posts</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavBar;
