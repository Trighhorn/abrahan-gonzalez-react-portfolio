import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PortfolioDetail from './portfolio/portfolio-detail'
import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home"
import About from "./pages/about"
import Blog from "./pages/blog"
import Contact from "./pages/contact"
import NoMatch from "./pages/no-match"

export default class App extends Component {
  render() {
    return (
      <div className='app'>

      <Router>
        <div>
          <h1>Abrahan Gonzalez Portfolio</h1>
          <div>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
          </div>
          <NavigationContainer />

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/about-me" component={About}></Route>
            <Route path="/contact-me" component={Contact}></Route>
            <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
              />
              <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
        
      </div>
    );
  }
}
