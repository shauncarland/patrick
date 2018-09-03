import React, { Component } from "react";

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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="javascript:void(0);" className="icon" onClick={this.myFunction.bind(this)}>
            <i class="fa fa-bars"></i>
          </a>
      </div>
    )
  }
}

export default Navbar;
