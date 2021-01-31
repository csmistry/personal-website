import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home } from './components/Home';
import {About } from './components/About';
import {Work } from './components/Work';
import {Projects } from './components/Projects';
import {Contact } from './components/Contact';
import {NoMatch } from './components/NoMatch';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/work" component={Work}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Route component={NoMatch}/> 
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
