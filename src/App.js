import React from 'react';
import './index.css';

import nouns from './components/nouns'
import adjectives from './components/adjectives'
import firebase from "./components/Firestore"

class App extends React.Component {

  // setup state
  constructor() {
    super()

    this.state = {
     note: "",
     path: "",
     timerOn: false,
     timeLeft: 1000
    } 

  }

  // initiating app
  componentDidMount () {
    // check path to deal with the correct note
    if (window.location.pathname === "/") {
      this.setRandomPath()
    }

    const path = window.location.pathname.substr(1) // remove the slash
    console.log("now on path " + path + " 💡")

    // av en eller annen idiotgrunn vil ikke state settes, så dette blir bare rot
    this.setState({
      path: path
    })
    console.log("State now: " + this.state.path)

    const db = firebase.firestore()
    console.log("Searching for... " + path)
    var docRef = db.collection("notes").doc(path)

    docRef.get().then( (doc) => {
      if (doc.exists) {
          console.log("Document found! 🥳", doc.data())
          this.setState({
            note: doc.data().text
          })
      } else {
          console.log("No such document. 😐");
      }
    }).catch(function(error) {
        console.log("Error getting document. 😢", error);
    });
    
  }
  
  setRandomPath = () => {
    const randomPath = 
      adjectives[Math.floor(Math.random() * adjectives.length)] +
      "-" +
      nouns[Math.floor(Math.random() * nouns.length)]
    
      window.location.pathname = randomPath
  }

  //  getRandomWord = (array) => {
  //   const index = 
  //   return array[index]
  //   Math.floor(Math.random() * array.length)
  // }

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
            value={this.state.note}
        />

    <p id="info">{this.state.path}</p>

      </div>
    );
  }
}

export default App;