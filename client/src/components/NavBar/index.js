import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

function NavBar() {
  return (
    <Navbar className="top-nav" activeKey="/home" expand="lg">
      <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-auto">
          <Nav.Link href="/" className="navFont">Home</Nav.Link>
          <Nav.Link href="/profile" className="navFont">Profile</Nav.Link>
          <Nav.Link href="/create" className="navFont">Create a Post</Nav.Link>
          <Nav.Link href="/filter" className="navFont">Filter Posts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
