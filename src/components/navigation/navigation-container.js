import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class NavigationContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='nav-wrapper'>
        <div className="left-side">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about-me">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact-me">Contact</NavLink>
          {true ? <NavLink to="/add-blog">Add Blog</NavLink> : null}
        </div>
        <div className="right-side">
          ABRAHAN GONZALEZ
        </div>
      </div>
    )
  }
}