import React, { Component } from 'react';

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      position: '',
      url: '',
      thumb_image: '',
      banner_image: '',
      logo: ''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  
  buildForm() {
    let formData = new FormData();

    formData.append("portfoio_item[name]", this.state.name)
    formData.append("portfoio_item[description]", this.state.description)
    formData.append("portfoio_item[url]", this.state.url)
    formData.append("portfoio_item[category]", this.state.category)
    formData.append("portfoio_item[position]", this.state.position)
    return formData
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    this.buildForm();
    event.preventDefault();
  }
  render() { 
    return (
      <div>
        <h1>PortfolioForm</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
            type='text'
            name='name'
            placeholder='Portfolio Item Name'
            value={this.state.name}
            onChange={this.handleChange}
            />

            <input
            type='text'
            name='url'
            placeholder='Portfolio Item Url'
            value={this.state.url}
            onChange={this.handleChange}
            />
          </div>
          <div>
            <input
            type='text'
            name='position'
            placeholder='Portfolio Item position'
            value={this.state.position}
            onChange={this.handleChange}
            />

            <input
            type='text'
            name='category'
            placeholder='Portfolio Item Category'
            value={this.state.category}
            onChange={this.handleChange}
            />
          </div>
          <div>
            <input
            type='text'
            name='description'
            placeholder='Portfolio Item Description'
            value={this.state.description}
            onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    )
  }
}