import * as React from 'react';
import Table from './components/Table'

class App extends React.Component {

  state = {
    sports:
    [
      {
        "Sport": "Basketball",
        "Day": "Tuesday",
        "Time": "8:00pm",
        "Location": "CAC"
      },
      {
        "Sport": "Basketball",
        "Day": "Tuesday",
        "Time": "6:00pm",
        "Location": "CAC"
      },
      {
        "Sport": "Basketball",
        "Day": "Tuesday",
        "Time": "7:00pm",
        "Location": "Old Gym"
      },
      {
        "Sport": "Soccer",
        "Day": "Thursday",
        "Time": "6:00pm",
        "Location": "Old Gym Field"
      },
      {
        "Sport": "Vollyball",
        "Day": "Tuesday",
        "Time": "8:00pm",
        "Location": "CAC"
      },
      {
        "Sport": "Vollyball",
        "Day": "Tuesday",
        "Time": "6:00pm",
        "Location": "CAC"
      },
      {
        "Sport": "Vollyball",
        "Day": "Tuesday",
        "Time": "7:00pm",
        "Location": "Old Gym"
      },
      {
        "Sport": "Vollyball",
        "Day": "Tuesday",
        "Time": "6:00pm",
        "Location": "Old Gym"
      },
      {
        "Sport": "Ping Pong",
        "Day": "Monday",
        "Time": "8:00pm",
        "Location": "Old Gym"
      },
      {
        "Sport": "Football",
        "Day": "Wednesday",
        "Time": "6:00pm",
        "Location": "Old Gym Field"
      },
      {
        "Sport": "Football",
        "Day": "Wednesday",
        "Time": "7:00pm",
        "Location": "Old Gym Field"
      },
      {
        "Sport": "Basketball",
        "Day": "Tuesday",
        "Time": "6:00pm",
        "Location": "Old Gym"
      },
      {
        "Sport": "Football",
        "Day": "Wednesday",
        "Time": "8:00pm",
        "Location": "Old Gym Field"
      },
      {
        "Sport": "Football",
        "Day": "Wednesday",
        "Time": "6:00pm",
        "Location": "Old Gym Field"
      },
      {
        "Sport": "Soccer",
        "Day": "Thursday",
        "Time": "7:00pm",
        "Location": "Old Gym Field"
      },
      {
        "Sport": "Soccer",
        "Day": "Thursday",
        "Time": "6:00pm",
        "Location": "Old Gym Field"
      },
      {
        "Sport": "Soccer",
        "Day": "Thursday",
        "Time": "8:00pm",
        "Location": "Old Gym Field"
      },
      {
        "Sport": "Soccer",
        "Day": "Thursday",
        "Time": "6:00pm",
        "Location": "Old Gym Field"
      },
      {
        "Sport": "Dodgeball",
        "Day": "Friday",
        "Time": "7:00pm",
        "Location": "Old Gym"
      },
      {
        "Sport": "Wiffle Ball",
        "Day": "Friday",
        "Time": "6:00pm",
        "Location": "Old Gym"
      }
    ],
  };

  public render() {
    const { sports } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Typscript Example</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h3>Table</h3>
            <Table sportsData={sports} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
