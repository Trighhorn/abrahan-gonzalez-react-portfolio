import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PortfolioContainer from './portfolio/portfolio-container'
import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home"
import About from "./pages/about"
import Blog from "./pages/blog"
import Contact from "./pages/contact"

export default class App extends Component {
  render() {
    return (
      <div className='app'>

      <router>
        <div>
          <NavigationContainer />

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/about-me" component={About}></Route>
            <Route path="/contact-me" component={Contact}></Route>
          </Switch>
        </div>
      </router>

        <h1>Abrahan Gonzalez Portfolio</h1>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <PortfolioContainer />
      </div>
    );
  }
}
