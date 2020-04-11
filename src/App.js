import React from 'react';
import './index.css';

import firebase from "./components/Firestore";


class App extends React.Component {

  // setup state
  constructor() {
    super()

    this.state = {
     note: "",
     path: "nice-kjerre",
     timerOn: false,
     timeLeft: 1000
    } 

  }

  // initiating app
  componentDidMount () {
    // check path to deal with the correct note
    console.log("now on path " + window.location.pathname + " 💡")
    const path = window.location.pathname.substr(1) // remove the slash

    this.setState({
      path: path
    })
  }
  
  // note updated
  updateInput = e => {

    //update state with updated text
    this.setState({ 
      [e.target.name]: e.target.value 
    })

    // countdown logic, save note after X seconds without activity
    this.setState({timeLeft: 1000 })

    if (!this.state.timerOn) { // timer allready running?
      console.log("Timer starting... ⏳")
      this.setState({timerOn: true})
      var myTimer = setInterval(() => {
        if (this.state.timeLeft <= 0) { // X milliseconds without activity? reset timer, save note
          this.setState({timeLeft: 1000 })
          clearInterval(myTimer)
          this.setState({timerOn: false})
          console.log("Time's up! ⏰")
          this.saveNote()
        } else { // time not up? proceed countdown
          this.setState({timeLeft: this.state.timeLeft - 100 })
        }
      }, 100)
    }
  }

  // creating or updating note in database
  saveNote = () => {
    console.log("Saving note... 💾")

    const data = {
      text: this.state.note,
      dateCreated: new firebase.firestore.Timestamp.now()
    }

    const db = firebase.firestore()
    db.collection("notes").doc(this.state.path).set(data)
  };


  render() {
    return (
      <div className="container">
        <textarea
            type="text"
            name="note"
            placeholder=""
            onChange={this.updateInput}
           
        />

    <p id="info">{this.state.path}</p>

      </div>
    );
  }
}

export default App;