import React, { Component } from 'react'

class Reminder extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: "",
      city: "",
      color: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value 
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            maxLength="20"
            name="title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            maxLength="30"
            name="description"
            value={this.state.description}
            placeholder="Description"
            onChange={this.handleChange}
          />
          <input 
            type="text"
            maxLength="15"
            name="city"
            value={this.state.city}
            placeholder="City"
            onChange={this.handleChange}
          />
          <label>Choose a color:</label>
          <select 
            value={this.state.color} 
            onChange={this.handleChange} 
            name="color"
          >
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
          </select>
          <button>Add reminder</button>
        </form>
        <div>
          <p>Title:</p>
          <h1 style={this.state}>{this.state.title}</h1>
          <p>Description:</p>
          <p>{this.state.description}</p>
          <p>City:</p>
          <p>{this.state.city}</p>
        </div>
      </>
    )
  }
}

export default Reminder
