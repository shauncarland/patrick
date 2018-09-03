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
      <Navbar/>
      <BrowserRouter>
        <div>
          <div className="App">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>

      </div>
    );
  }
}

export default App;
