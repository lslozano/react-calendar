import React from 'react'
import moment from 'moment'

const WeekDays = () => {
  return (
    <tr>
      {moment.weekdays().map((day, i) => {
        return (        
            <th key={i}>{day}</th>
            )
          }
        )
      }
    </tr>
  )
}

export default WeekDays