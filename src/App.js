import React, {Component} from 'react';
import Calendar from './components/Calendar';
import Reminder from './components/Reminder';

class App extends Component {
  render() {
    return (
      <>
        <h1>Jobsity Calendar</h1>
        <Calendar />
        <Reminder />
      </>
    )
  }
}

export default App

