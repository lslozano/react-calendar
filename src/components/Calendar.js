import React, { Component } from 'react'
import WeekDays from './WeekDays'
import Date from './Date'
import ReminderComponent from './Reminder'
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
    this.state.reminders.push(this.state.reminder)
    alert('A new reminder has been created!')
    event.preventDefault()
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
          <Date />
        </table>
        <ReminderComponent 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
      </main>
    )
  }
}

export default Calendar