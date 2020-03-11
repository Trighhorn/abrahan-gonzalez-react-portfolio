import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Welcome to my Portfolio",
      isLoading: false,
      data: []
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://abrahangonzalez.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data.portfolio_items
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          {/* TODO MAKE THIS WORK FOR SELECTING FILTERS */}
           {/* <form>
            <select
              id=""
              // multiple="multiple"
              name="category"
              value={optionsState}
              // value={[this.state.category]}
              onChange={this.handleChange}
              className="select-element"
            >
              <option value="No filter" onSelect={this.handleFilter('CLEAR_FILTERS)}>All</option>
              <option value="Python" onSelect={this.handleFilter('Python')}>Python</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Vue">Vue</option>
              <option value="C++">C++</option>
              <option value="C#">C#</option>
              <option value="F#">F#</option>
              <option value="PHP">PHP</option>
              <option value="Laravel">Laravel</option>
              <option value="GO">GO</option>
              <option value="MongoDB">MongoDB</option>
              <option value="SQL">SQL</option>
              <option value="Redis">Redis</option>
              <option value="Ruby">Ruby</option>
              <option value="Typescript">Typescript</option>
              <option value="Express">Express</option>

              <option value="eCommerce">eCommerce</option>
              <option value="Scheduling">Scheduling</option>
              <option value="Enterprise">Enterprise</option>
            </select> 
          </form> */}
          <button
            className="btn"
            onClick={() => this.handleFilter("Python")}
          >
            Python
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Javascript")}
          >
            Javascript
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("HTML")}
          >
            HTML
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            All
          </button>
        </div>
          <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
      </div>
    );
  }
}
