import React from 'react'
import moment from 'moment'
import '../index.css'

const WeekDays = () => {
  return (
    <tr>
      {moment.weekdays().map((day, i) => {
        return (        
            <th className='weekDays' key={i}>{day}</th>
            )
          }
        )
      }
    </tr>
  )
}

export default WeekDays