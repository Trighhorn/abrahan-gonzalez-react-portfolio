import React, { Component } from 'react'


export default class NavigationContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button>Home</button>
        <button>Blog</button>
        <button>About</button>
        <button>Contact</button>
        {true ? <button>Add Blog</button> : null}
      </div>
    )
  }
}