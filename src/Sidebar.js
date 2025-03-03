import React from "react";
import { NavLink } from "react-router-dom";

// Logo
import logo from "./assets/theindex.svg";

function Sidebar() {
  return (
    <div id="sidebar">
      <img src={logo} className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item">
          <NavLink to="/authors">AUTHORS</NavLink>
          <NavLink to="/books/">BOOKS</NavLink>
        </h4>
      </section>
    </div>
  );
}

export default Sidebar;
