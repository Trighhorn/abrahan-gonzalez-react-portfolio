import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogItems: []
    }

    this.getBlogItems = this.getBlogItems.bind(this)
  }

  getBlogItems() {
    axios.get
    ("https://abrahangonzalez.devcamp.space/portfolio/portfolio_blogs", 
    { withCredentials: true }
    ).then(response => {
      this.setState({
        blogItems: response.data.portfolio_blogs
      })
    }).catch( error => {
      console.log("getBlogItems error", error)
    });
  }

  componentDidMount() {
    this.getBlogItems()
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <h1>{blogItem.title}</h1>
    })
    return (
      <div>
        <h2>Blog</h2>
        <div>
          {blogRecords}
        </div>
        <div>
          <Link to="/about-me">Read more about me!</Link>
        </div>
      </div>
    );
  }
}
