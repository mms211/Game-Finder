import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./style.css";

function NavBar() {
  return (
    <>
      <Jumbotron fluid className="jumbo">
        <h1>GameFinder</h1>
      </Jumbotron>
      <Navbar className="justify-content-center navbar" activeKey="/home">
        <Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link href="/" className="navFont">Home</Nav.Link>
            <Nav.Link href="/profile" className="navFont">Profile</Nav.Link>
            <Nav.Link href="/create" className="navFont">Create a Post</Nav.Link>
            <Nav.Link href="/filter" className="navFont">Filter Posts</Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
