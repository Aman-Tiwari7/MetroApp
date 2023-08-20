import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <div className="logo"></div>
        <span className="title">Delhi Metro Guide</span>
      </div>
      <div className="right-nav">
        <span>Dark Theme</span>
        <input type="checkbox" id="switch" className="checkbox" />
        <label htmlFor="switch" className="toggle"></label>
        <ul className="nav-links">
          <li><a href="">Get Route</a></li>
          <li><a href="">Nearest Metro</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
