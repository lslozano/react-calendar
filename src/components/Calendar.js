import React from 'react'
import WeekDays from './WeekDays'
import Date from './Date'
import moment from 'moment'

function Calendar() {
  const month = moment().format("MMMM")

  return (
    <>
      <h2>{month}</h2>
      <table>
        <thead>
          <WeekDays />
        </thead>
        <Date />
      </table>
    </>
  )
}

export default Calendar