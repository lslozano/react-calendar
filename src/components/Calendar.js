import React from 'react'
import WeekDays from './WeekDays'
import Date from './Date'
import moment from 'moment'
import '../index.css'

function Calendar() {
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
    </main>
  )
}

export default Calendar