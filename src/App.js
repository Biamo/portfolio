import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header'
import asyncComponent from './components/asyncComponent';
import './App.scss'

const About = asyncComponent(() => import('./components/About/About')
  .then(module => module.default), { name: 'About' });
const Contact = asyncComponent(() => import('./components/Contact/Contact')
  .then(module => module.default), { name: 'Contact' });
const Home = asyncComponent(() => import('./components/Home/Home')
  .then(module => module.default), { name: 'Home' });

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
    <div className="app">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
    );
  }
}
