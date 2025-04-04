import React from "react";
import {  NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <h1>Profile</h1>
        <div className="navbar">
          <NavLink
            to="/" activeClassName="active" >
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
          <NavLink to="/services" activeClassName="active">
            Services
          </NavLink>
          <NavLink to="/notfound" activeClassName="active">NotFound</NavLink>
          <NavLink to="/protected" activeClassName="active">ProtectedPage</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
