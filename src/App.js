import React from 'react';
import firebase from "./components/Firestore"
import { navigate } from "@reach/router"

import './index.css';

import nouns from './components/nouns'
import adjectives from './components/adjectives'

class App extends React.Component {

  // set up state
  constructor() {
    super()

    this.state = {
     note: {},
     newNote: true,
     path: "",
     timerOn: false,
     timeLeft: 1000
    }
  }

  // initiating app
  componentDidMount () {
    console.log("💡 Now on path /" + this.props.currentPath)
    document.getElementById("note").focus();

    if (this.props.currentPath === undefined) { // on root? can't have that
      this.setRandomPath()
    }

    this.setState({
      currentPath: this.props.currentPath
    }, () => {
      this.getNote() // run getNote as callback to ensure state is properly set
    })
  }
  
  // check if note exists, get it if it does
  getNote = () => {
    console.log("🔍 Searching for... " + this.state.currentPath)

    const db = firebase.firestore()
    var docRef = db.collection("notes").doc(this.state.currentPath)

    docRef.get().then( (doc) => {
      if (doc.exists) {
          console.log("🥳 Document found!")
          this.setState({
            note: doc.data(),
            newNote: false
          })
      } else {
          console.log("😐 No such document.");
      }
    }).catch(function(error) {
        console.log("😢 Error getting document.", error);
    });
  }

  // set a random path
  setRandomPath = () => {
    console.log("🎲 Setting random path.")

    const randomPath = 
      adjectives[Math.floor(Math.random() * adjectives.length)] + "." +
      nouns[Math.floor(Math.random() * nouns.length)]
    
    window.location.pathname = randomPath
    this.props.currentPath = randomPath
  }

  // note updated
  updateInput = e => {
    //update state with updated text
    this.setState({ 
      note: {text: e.target.value} 
    })

    // countdown logic, save note after X seconds without activity
    this.setState({timeLeft: 1000 })

    if (!this.state.timerOn) { // timer allready running?
      console.log("⏳ Timer starting...")
      this.setState({timerOn: true})

      var myTimer = setInterval(() => {
        if (this.state.timeLeft <= 0) { // X milliseconds without activity? reset timer, save note
          console.log("⏰ Time's up!")
          this.saveNote()
          clearInterval(myTimer)
          this.setState({
            timeLeft: 1000,
            timerOn: false 
          })
        } else { // time not up? proceed countdown
          this.setState({timeLeft: this.state.timeLeft - 100 })
        }
      }, 100)
    }
  }

  // creating or updating note in database
  saveNote = () => {
    let data;
    const db = firebase.firestore()
    const timeNow = new firebase.firestore.Timestamp.now()

    // note allready created, update old one
    if (!this.state.newNote) { 
      console.log("💾 Updating note: " + this.state.currentPath)

      data = {
        text: this.state.note.text,
        dateUpdated: timeNow
      }
      
      db.collection("notes").doc(this.state.currentPath).update(data)
    } 
    
    // note not allready created, make a new one
    else { 
      console.log("💾 Creating note: " + this.state.currentPath)

      data = {
        text: this.state.note.text,
        dateUpdated: timeNow,
        dateCreated: timeNow
      }

      db.collection("notes").doc(this.state.currentPath).set(data)
      this.setState({newNote: false}) // no longer a new note
    }
  };

  // clicks on note name
  infoClick = () => {
    console.log("klikk!")
    navigate(`/${this.state.currentPath}/about`, { state: { note: this.state.note } })
  }

  render() {
    return (
      <div className="container">
        <textarea
            id="note"
            type="text"
            name="note"
            placeholder=""
            onChange={this.updateInput}
            value={this.state.note.text}
        />

      <p 
        id="info"
        onClick={this.infoClick}>
          {this.state.timerOn ? "⏳" : "🐠"}
          {"/"+this.state.currentPath}

      </p>

      </div>
    );
  }
}

export default App;