import React, {Component} from 'react';
import './App.css';
import Calendar from './components/Calendar'

class App extends Component {
  render() {
    return (
      <>
        <h1>Jobsity Calendar</h1>
        <Calendar />
      </>
    )
  }
}

export default App

