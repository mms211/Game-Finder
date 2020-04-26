import React from "react";
import Navbar from "react-bootstrap/Navbar";
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


      {/* <Navbar expand="lg" className='navbar d-flex justify-content-center'>
        <Navbar.Brand href="/" className="navFont logo">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/profile" className="navFont">Profile</Nav.Link>
            <Nav.Link href="/create" className="navFont">Create A Post</Nav.Link>
            <Nav.Link href="/filter" className="navFont">Filter Posts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </>
  );
}

export default NavBar;
