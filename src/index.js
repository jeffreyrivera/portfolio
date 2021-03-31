import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AlgoApp from './components/AlgoApp';
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Notfound from "./notfound";
import Header from "./components/Header";
import Footer from "./components/Footer";


const routing = (
    <Router>
        <Header />
        <Main />
        <Projects />
        <Switch>
          <Route exact path="/" component={AlgoApp} />
        </Switch>
        <Contact />
    </Router>
  );

ReactDOM.render(routing, document.querySelector('#root'));



