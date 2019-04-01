import React, { Component } from 'react';
import Header from "../src/components/Header"
import News from "../src/components/News"
import About from "../src/components/About"
import NewDetails from "../src/components/NewDetails"
import Contact from "../src/components/Contact"
import './App.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, NavLink,Swtich } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />
        <Route exact path="/Home" component={Header} />
        <Route exact path="/News" component={News} />
        <Route exact path="/NewDetails/:slug.:id.html" component={NewDetails} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
      </div>
    );
  }
}

export default App;
