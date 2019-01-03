import React, { Component } from "react";
//import logo from './logo.svg'
//import "./App.css";
//stateless functional component
//use function instead of class
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand mb-0 h1">
        Items{"  "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
