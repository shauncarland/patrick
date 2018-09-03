import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/home';
import About from './components/about';

import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
    <div>
      <BrowserRouter>
        <div>
          <div className="App">
          <Navbar/>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>

      </div>
    );
  }
}

export default App;
