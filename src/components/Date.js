import React from 'react'
import moment from 'moment'

const Date = () => {
  const monthStartDate = () => {
    let firstDate = moment().startOf('month').format('d')
    return firstDate
  }

  const endOfMonth = () => {
    let lastDate = moment().endOf('month').format('d')
    return parseInt(lastDate)
  }

  const prevMonthDays = () => {
    let prevMonthLastDays = []
    let prevMonthDaysSquares = []

    for (let i = 0; i < monthStartDate(); i++) {
      prevMonthLastDays.push(moment().startOf('month').subtract(i + 1, 'day').format('D'))
      prevMonthLastDays.sort()
    }

    for (let i = 0; i < monthStartDate(); i++) {
      prevMonthDaysSquares.push(
        <td key={moment().startOf('month').subtract(i, 'day')}>{prevMonthLastDays[i]}</td>
      )
    }

    return prevMonthDaysSquares
  }

  const nextMonthDays = () => {
    let nextMonthFirstDays = []  
    let nextMonthDaysSquares = []

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
      case 6:
        nextMonthFirstDays = []
        break;
      default:
        nextMonthFirstDays = []
        break;
    }

    for (let i = 0; i < nextMonthFirstDays.length; i++) {
      nextMonthDaysSquares.push(
        <td key={moment().endOf('month').add(i + 1, 'day')}>{nextMonthFirstDays[i]}</td>
      )
    }

    return nextMonthDaysSquares
  }

  const daysOfMonth = () => {
    let daysOfMonth = moment().daysInMonth()
    return daysOfMonth
  }

  const days = () => {
    let days = []

    for (let day = 1; day <= daysOfMonth(); day++) {
      days.push(
        <td key={day}>
          {day}
        </td>
      )
    }
    return days
  }

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
  
      if (i === blocks.length - 1) {
        rows.push(cells)
      }
    })

    return rows
  }


  const dates = rows().map((date, i) => {
    return (
      <tr key={i}>{date}</tr>
    )
  })

  return <tbody>{dates}</tbody>
}

export default Date