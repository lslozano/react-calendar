import React from 'react'
import moment from 'moment'

function Date(props) {
  // Get start date of actual month.
  const monthStartDate = () => {
    let firstDate = moment().startOf('month').format('d')
    return firstDate
  }

  // Get end date of actual month.
  const endOfMonth = () => {
    let lastDate = moment().endOf('month').format('d')
    return parseInt(lastDate)
  }

  // Get last dates of previous month.
  // Use of exact date for each date as a unique key.
  const prevMonthDays = () => {
    let prevMonthLastDays = []
    let prevMonthDaysSquares = []
    const color = {
      color: 'gray'
    }

    for (let i = 0; i < monthStartDate(); i++) {
      prevMonthLastDays.push(moment().startOf('month').subtract(i + 1, 'day').format('D'))
      prevMonthLastDays.sort()
    }

    for (let i = 0; i < monthStartDate(); i++) {
      prevMonthDaysSquares.push(
        <td 
          style={color} 
          className="prevMonthDays" 
          key={moment().startOf('month').subtract(i, 'day')}
        >
          <div className={"scroll"}>
            {prevMonthLastDays[i]}
          </div>
        </td>
      )
    }

    return prevMonthDaysSquares
  }

  // Get first days of next month.
  // Use of exact date as a unique key for each day.
  // Use of switch statement to determine how many days we still need
  // to render for the calendar view to be completed.
  const nextMonthDays = () => {
    let nextMonthFirstDays = []  
    let nextMonthDaysSquares = []
    const color = {
      color: 'gray'
    }

    switch(endOfMonth()) {
      case 0:
        nextMonthFirstDays = [1, 2, 3, 4, 5, 6]
        break;
      case 1:
        nextMonthFirstDays = [1, 2, 3, 4, 5]
        break;
      case 2:
        nextMonthFirstDays = [1, 2, 3, 4]
        break;
      case 3:
        nextMonthFirstDays = [1, 2, 3]
        break;
      case 4:
        nextMonthFirstDays = [1, 2]
        break;
      case 5:
        nextMonthFirstDays = [1]
        break;
      default:
        nextMonthFirstDays = []
        break;
    }

    for (let i = 0; i < nextMonthFirstDays.length; i++) {
      nextMonthDaysSquares.push(
        <td 
          style={color} 
          className="nextMonthDays" 
          key={moment().endOf('month').add(i + 1, 'day')}
        >
          <div className="scroll">
            {nextMonthFirstDays[i]}
          </div>
        </td>
      )
    }

    return nextMonthDaysSquares
  }

  const daysOfMonth = () => {
    let daysOfMonth = moment().daysInMonth()
    return daysOfMonth
  }

  // After getting the days in the month, push them as td elements in array
  // days.
  const days = () => {
    let days = []
    let dates = {}
    let dayCell = []

    // Placeholder reminders
    const reminders = [
      {
      title: "React proyect",
      description: "Work on the new app",
      city: "Mexico",
      day: "1",
      time: "12:50",
      color: "red"
      },
      {
        title: "Buy food",
        description: "Milk, egg, cereal",
        city: "Mexico",
        day: "5",
        time: "10:00",
        color: "blue"
      },
      {
        title: "Exercise",
        description: "Workout rutine",
        city: "Mexico",
        day: "15",
        time: "09:00",
        color: "red"
      },
      {
        title: "Pay gas",
        description: "Need to pay gas asap",
        city: "Mexico",
        day: "20",
        time: "10:00",
        color: "red"
      },
      {
        title: "Chill",
        description: "Watch some movies",
        city: "Mexico",
        day: "25",
        time: "20:00",
        color: "blue"
      }      
    ]

    for (let day = 1; day <= daysOfMonth(); day++) {
      days.push(day)
    }

    days.map(day => {        
      if (!dates[day]) {
        dates[day] = []
      }
      return dates
    })

    reminders.map(reminder => {
      for (const day in dates) {
        if (reminder.day === day) {
          dates[day].push(reminder.title)
        }
      }
      return dates
    })
    
    for (const key in dates) {
      if (dates[key].length >= 1) {
        dayCell.push(
          <td key={key}>
            <div className="scroll">
              {key}
              <p>{dates[key]}</p>
              <p>Reminder for scroll</p>
              <p>Reminder for scroll</p>
            </div>
          </td>
        )
      } else (
        dayCell.push(
          <td key={key}>
            <div className="scroll">
              {key}
            </div>
          </td>
        )
      )}
    
    return dayCell
  }

  // Create the rows and fill them with each date.
  // Constant blocks that holds all the dates, including: previous month, actual and
  // next month.
  // Iterate over blocks array, if index is not 0, remain in the corresponding week.
  // When reaching next week, pass all the week to the rows array.
  // Start over by emptying the cells and pushing rows to the new container.
  const rows = () => {
    const blocks = [...prevMonthDays(),...days(),...nextMonthDays()]
    let rows = []
    let cells = [] 
    blocks.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row)
      } else {
        rows.push(cells)
        cells = []
        cells.push(row)
      }
      
      // When the loop has ended, add the remaining date.
      if (i === blocks.length - 1) {
        rows.push(cells)
      }
    })

    return rows
  }

  // Create the tr elements by mapping over rows.
  const dates = rows().map((date, i) => {

    const pointer = {
      cursor: 'pointer' 
    }
  
    if (date.length >= 1) {
      return (
        <tr style={pointer} key={i}>{date}</tr>
      )
    } 
    return null
  })

  // At last return the tbody with the dates.
  return <tbody>{dates}</tbody>
}

export default Date