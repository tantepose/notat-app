import React from 'react';
import './index.css';

import nouns from './components/nouns'
import adjectives from './components/adjectives'
import firebase from "./components/Firestore"

class App extends React.Component {

  // set up state
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
    console.log("path fra props: " + this.props.notePath)
    document.getElementById("note").focus();

    if (this.props.currentPath === undefined) { // on root? can't have that
      this.setRandomPath()
    }

    // run getNote as callback to ensure state is properly set
    this.setState({
      currentPath: this.props.currentPath
    }, () => {
      this.checkNote()
    })
  }
  
  // check if note exists, get it if it does
  checkNote = () => {
    console.log("Searching for... " + this.state.currentPath)

    const db = firebase.firestore()
    var docRef = db.collection("notes").doc(this.state.currentPath)

    docRef.get().then( (doc) => {
      if (doc.exists) {
          console.log("Document found! 🥳")
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

  // set a random path
  setRandomPath = () => {
    const randomPath = 
      adjectives[Math.floor(Math.random() * adjectives.length)] + "-" +
      nouns[Math.floor(Math.random() * nouns.length)]
    
    window.location.pathname = randomPath
    this.props.currentPath = randomPath
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
          console.log("Time's up! ⏰")
          this.setState({
            timeLeft: 1000,
            timerOn: false 
          })
          clearInterval(myTimer)
          this.setState({})
          this.saveNote()
        } else { // time not up? proceed countdown
          this.setState({timeLeft: this.state.timeLeft - 100 })
        }
      }, 100)
    }
  }

  // creating or updating note in database
  saveNote = () => {
    console.log("Saving note " + this.state.currentPath + ". 💾")

    const data = {
      text: this.state.note,
      dateCreated: new firebase.firestore.Timestamp.now()
    }

    const db = firebase.firestore()
    db.collection("notes").doc(this.state.currentPath).set(data)
  };


  render() {
    return (
      <div className="container">
        <textarea
            id="note"
            type="text"
            name="note"
            placeholder=""
            onChange={this.updateInput}
            value={this.state.note}
        />

    <p id="info">
      {this.state.timerOn ? "⏳ " : "✔ "}
      {this.state.currentPath}
      </p>

      </div>
    );
  }
}

export default App;