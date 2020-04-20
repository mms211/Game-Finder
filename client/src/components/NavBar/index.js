import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-nav">
      <Link to="/" className=" navbar-brand text-uppercase">
        Game Finder
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/profile" className="nav-item nav-link">
            Profile
          </Link>
          <Link to="/create" className="nav-item nav-link">
            Create A Post
          </Link>
          <Link to="/filter" className="nav-item nav-link">
            Filter Posts
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;