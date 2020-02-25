import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class NavigationContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about-me">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact-me">Contact</NavLink>
        {true ? <NavLink to="/add-blog">Add Blog</NavLink> : null}
      </div>
    )
  }
}