import React, { Component } from "react";


import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
  constructor() {
    super()
    console.log('container has rendered')
  }
  render() {
    return (
      <div>
        <h2>
          Portfolio Items go here...Updated
        </h2>

        <PortfolioItem />
      </div>
    )
  }
}