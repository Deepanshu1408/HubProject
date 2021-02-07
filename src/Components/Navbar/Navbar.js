import React from "react";
import "../Navbar/Navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="mainNavbar">
      <div className="mainlogo">
        <img
          src="https://thehub.io/_nuxt/164db33c3d5c8e1fcf4d94b65b0da148.svg"
          className="logo"
          alt=""
        />
      </div>
      <div className="navbarTabs">
        <a href="#">
          <span className="tab1">Find Jobs</span>
        </a>
        <a href="#">
          <span className="tabs">Browse Startups</span>
        </a>
        <a href="#">
          <span>Seek Funding</span>
        </a>
      </div>
      <div>
        <button className="btn btn-light" id="btn">
          <span id="btntg"> Sign In </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
