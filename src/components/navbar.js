import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  myFunction = function() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

  render() {
    return(
      <div className="topnav" id="myTopnav">
      <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
      <Link to={`${process.env.PUBLIC_URL}/about`}>Bio</Link>
      <Link to={`${process.env.PUBLIC_URL}/projects`}>Projects</Link>
      <Link to={`${process.env.PUBLIC_URL}/hire`}>Hire Me</Link>
      <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
          <a href="javascript:void(0);" className="icon" onClick={this.myFunction.bind(this)}>
            <i className="fa fa-bars"></i>
          </a>
      </div>
    )
  }
}

export default Navbar;
