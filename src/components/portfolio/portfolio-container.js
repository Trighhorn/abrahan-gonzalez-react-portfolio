import React, { Component } from "react";


import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
  constructor() {
    super()
    this.state = {
      pageTitle: "Welcome to my Portfolio",
      isLoading: false,
      data: [
        {title: "Quip", catrgory: "eCommerce"}, 
        {title: "Eventbrite", catrgory: "Scheduling"},
        {title: "placeholder 3", catrgory: "Enterprise"},
        {title: "placeholder 4", catrgory: "eCommerce"}
      ]
    }
    this.handleFilter = this.handleFilter.bind(this)

  }


  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.catrgory === filter
      })
    })
  }

  portfolioItems () {
    return this.state.data.map(item => <PortfolioItem title={item.title} url='placeholder url' />)
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div>

        <h2>
          {this.state.pageTitle}
        </h2>
        <h2>
          Portfolio Items go here...Updated
        </h2>

        <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
        <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
        <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>



        {this.portfolioItems()}
      </div>
    )
  }
}