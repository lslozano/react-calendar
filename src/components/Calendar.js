import React, { Component } from 'react'
import WeekDays from './WeekDays'
import Date from './Date'
import ReminderForm from './ReminderForm'
import moment from 'moment'
import '../index.css'

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      reminder: {
        title: "",
        description: "",
        city: "",
        day: "",
        time: "",
        color: ""
      },
      reminders: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearFields = this.clearFields.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState(prevState => {
      const reminder = {...prevState.reminder}
      reminder[name] = value
      return { reminder }
    })
  }
  
  handleSubmit(event) {
    alert('A new reminder has been created!')
    this.setState({
      reminders: [this.state.reminder]

    })
    event.preventDefault()
  }

  componentDidUpdate(prevState) {
    if (prevState.reminders === this.state.reminders) {
      this.setState({
        reminders: this.state.reminder
      })
    }
  }


  clearFields() {
    this.setState({
      reminder: {
        title: "",
        description: "",
        city: "",
        day: "",
        time: "",
        color: ""
      }
    })
  }

  render() {
    const month = moment().format("MMMM")

    return (
      <main>
        <h2>{month}</h2>
        <table className="calendar">
          <thead>
            <WeekDays />
          </thead>
          <Date 
            data={this.state.reminders}
          />
        </table>
        <ReminderForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          clearFields={this.clearFields}
          data={this.state}
        />
      </main>
    )
  }
}

export default Calendar