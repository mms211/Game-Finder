import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Header from "../Header";
import "./style.css";

function NavBar() {
  return (
    <>
      <Header />
      <Navbar className="justify-content-center navbar" activeKey="/home">
        <Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link href="/" className="navFont">Home</Nav.Link>
            <Nav.Link href="/profile" className="navFont">Profile</Nav.Link>
            <Nav.Link href="/create" className="navFont">Create a Post</Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
