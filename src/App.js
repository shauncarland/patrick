import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/home';
import About from './components/about';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
