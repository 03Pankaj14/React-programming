import React, { Component } from "react";
//import logo from './logo.svg'
//import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Items {this.props.totalCounters}
        </span>
      </nav>
    );
  }
}
export default Navbar;
