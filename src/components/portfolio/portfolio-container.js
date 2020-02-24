import React, { Component } from "react";


import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
  constructor() {
    super()
    this.state = {
      pageTitle: "Welcome to my Portfolio",
      data: [
        {title: "Quip"}, 
        {title: "Eventbrite"},
        {title: "placeholder 3"},
        {title: "placeholder 4"}
      ]
    }

    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
  }

  portfolioItems () {
    return this.state.data.map(item => <PortfolioItem title={item.title} url='placeholder url' />)
  }

  handlePageTitleUpdate () {
    this.setState({
      pageTitle: "AHHHHHHHHHHHHHHHHHHHH Im trapped in a webbage"
    })
  }
  render() {
    return (
      <div>

        <h2>
          {this.state.pageTitle}
        </h2>
        <h2>
          Portfolio Items go here...Updated
        </h2>
        {this.portfolioItems()}

        <hr/>
        <button onClick={this.handlePageTitleUpdate}>Change title</button>
      </div>
    )
  }
}