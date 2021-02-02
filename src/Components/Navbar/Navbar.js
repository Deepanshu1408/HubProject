import React from "react";
import "../Navbar/Navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="mainNavbar">
      <img
        src="https://thehub.io/_nuxt/aaf6a69b0d671601fe5044c0a4d90ffd.svg"
        className="logo"
        alt=""
      />
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
