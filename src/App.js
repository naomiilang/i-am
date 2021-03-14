import React from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {
  HashRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router basename = '/'>
      <Nav/>
      <br/>
          <Route exact path={["/", "/about"]} component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
      <Footer/>
    </Router>


  );
}

export default App;
