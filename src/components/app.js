import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PortfolioDetail from './portfolio/portfolio-detail'
import Auth from './pages/auth'
import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home"
import About from "./pages/about"
import Blog from "./pages/blog"
import Contact from "./pages/contact"
import NoMatch from "./pages/no-match"

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN'
    }
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this)
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: 'LOGGED_IN'
    })
  }
  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN'
    })
  }
  


  render() {
    return (
      <div className='container'>

      <Router>
        <div>
          <NavigationContainer loggedInStatus={this.state.loggedInStatus} />
          <h2>{this.state.loggedInStatus}</h2>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route 
              path="/auth" 
              render={props => (
                <Auth
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                />
              )
              }
            />
            <Route path="/blog" component={Blog} />
            <Route path="/about-me" component={About} />
            <Route path="/contact-me" component={Contact} />
            <Route exact path="/portfolio/:slug" component={PortfolioDetail}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
        
      </div>
    );
  }
}
