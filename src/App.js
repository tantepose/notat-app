import React from 'react';
import './App.css';

import firebase from "./components/Firestore";


class App extends React.Component {

  constructor() {
    super();

    this.state = {
     note: "",
     path: "nice-kjerre"
    } 
  }
  
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  saveNote = () => {
    console.log("saving note... 💾")

    const db = firebase.firestore();

    const data = {
      text: this.state.note,
      path: this.state.path,
      dateCreated: new firebase.firestore.Timestamp.now()
    }

    db.collection("notes").doc(this.state.path).set(data);

    // const userRef = db.collection("notes").add({
    //   text: this.state.note,
    //   path: this.state.path,
    //   dateCreated: new firebase.firestore.Timestamp.now()
    // });  
  };

  render() {
    return (
      <div>
        <textarea
            type="text"
            name="note"
            placeholder=""
            onChange={this.updateInput}
           
        />

      <button
        onClick={this.saveNote}
      >
        save note
      </button>

      </div>
    );
  }
}

export default App;