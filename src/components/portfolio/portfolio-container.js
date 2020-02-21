import React, { Component } from "react";


import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
  constructor() {
    super()
    console.log('container has rendered')
  }

  portfolioItems () {
    const data = ["Quip", "Eventbrite", "placeholder 3"]

    return data.map(item => {
      return <PortfolioItem />;
    })
  }
  render() {
    return (
      <div>
        <h2>
          Portfolio Items go here...Updated
        </h2>
        {this.portfolioItems()}
      </div>
    )
  }
}