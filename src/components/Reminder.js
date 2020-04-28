import React from 'react'
import moment from 'moment'

function ReminderComponent(props) {
  const getDays = () => {
    let daysOfMonth = moment().daysInMonth()
    let daySelector = []
    for (let i = 1; i <= daysOfMonth; i++) {
      daySelector.push(i)
    }
    return daySelector
  }

  return (
    <div className="form">
      <form className="pure-form pure-form-stacked" onSubmit={props.handleSubmit}>
        <h3>Add reminder</h3>
        <label>Title:</label>
        <input
          required
          type="text"
          maxLength="20"
          name="title"
          value={props.data.reminder.title}
          placeholder="Title"
          onChange={props.handleChange}
        />
        <label>Description:</label>
        <input
          type="text"
          maxLength="30"
          name="description"
          value={props.data.reminder.description}
          placeholder="Description"
          onChange={props.handleChange}
        />
        <label>City:</label>
        <input 
          type="text"
          maxLength="15"
          name="city"
          value={props.data.reminder.city}
          placeholder="City"
          onChange={props.handleChange}
        />
        <label>Choose a day:</label>
        <select
          value={props.data.reminder.day} 
          onChange={props.handleChange} 
          name="day"
        >
          <option>-</option>
          {getDays().map(day => {
            return (
              <option key={day} value={day}>{day}</option>
              )
            })
          }
        </select>
        <label>Choose a time:</label>
        <input
          type="time"
          name="time"
          value={props.data.reminder.time}
          onChange={props.handleChange} 
        />  
        <label>Choose a color:</label>
        <select 
          value={props.data.reminder.color} 
          onChange={props.handleChange} 
          name="color"
        >
          <option>-</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>
        <button className="pure-button pure-button-primary">Confirm</button>
      </form>
    </div>
  )
}

export default ReminderComponent
