import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home } from './Home';
import {About } from './About';
import {Work } from './Work';
import {Projects } from './Projects';
import {Contact } from './Contact';
import {NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import {NavigationBar} from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Layout>
        <Home/>
        <About/>
        <Work/>
        <Projects/>
        <Contact/>
      </Layout>
    </React.Fragment>
  );
}

export default App;

//Using Layout as a wrapper here means that each JSX tag (route) will be a child in the Layout Container