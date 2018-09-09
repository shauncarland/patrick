import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home container">
        <div className="row">
          <h1 className="col-lg-12">
            Shaun Carland
          </h1>
        </div>

        <div className="row">
          <h2 className="col-xs-12 col-lg-6">
            <a href="https://drive.google.com/file/d/12rd9gFxdqpIeV09f2Kxlm69AAa7RIGWG/view?usp=sharing">resume</a>
          </h2>

          <h2 className="col-xs-12 col-lg-6">
            <a href="mailto:shauncarland@gmail.com">contact</a>
          </h2>
        </div>
      </div>
    )
  }
}

export default Home;
