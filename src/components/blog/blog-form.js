import React, { Component } from "react";
import axios from "axios";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      blog_status: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);

    return formData;
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    axios
      .post(
        "https://abrahangonzalez.devcamp.space/portfolio/portfolio_blogs",
        this.buildForm(),
        { withCredentials: true }
      )
      .then(response => {
        this.props.handleSuccessfullFormSubmission(
          response.data.portfolio_blog
        );

        this.setState({
          title: "",
          blog_status: ""
        });
      })
      .catch(error => {
        console.log("blog handleSubmit error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
        <div className="two-column">
          <input 
            type="text"
            onChange={this.handleChange}
            name="title"
            placeholder="Blog Title"
            value={this.state.title}
          />

         <input
            type="text"
            onChange={this.handleChange}
            name="blog_status"
            placeholder="Blog status"
            value={this.state.blog_status}
          />
          {/* <select
            name="blog_status"
            value={this.state.blog_status}
            onChange={this.handleChange}
            className="select-element"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select> */}
        </div>
          <input className="submit-btn" type="submit" value="Save" onSubmit={this.handleSubmit} />
      </form>
    );
  }
}
