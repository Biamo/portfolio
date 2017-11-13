import React from 'react';
import PropTypes from 'prop-types';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'

import { BrowserRouter as Router, Route } from 'react-router-dom'


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}
