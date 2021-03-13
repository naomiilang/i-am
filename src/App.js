import React from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import {
  HashRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router basename = '/'>
      <div>
      <Nav/>
          <Route exact path={["/", "/about"]} component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
      </div>
    </Router>


  );
}

export default App;
