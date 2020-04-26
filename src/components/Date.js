import React from 'react'
import moment from 'moment'

const Date = () => {
  const monthStartDate = () => {
    let firstDate = moment().startOf('month').format('d')
    return firstDate
  }

  const blankSquare = () => {
    let square = []

    for (let i = 0; i < monthStartDate(); i++) {
      square.push(
        <td>{''}</td>
      )
    }
    return square
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
    const blocks = [...blankSquare(),...days()]
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