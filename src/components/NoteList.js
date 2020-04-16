import React from 'react';
import firebase from "./Firestore"

import Note from "./Note"

class NoteList extends React.Component {

  constructor() {
    super()

    this.state = {
      notes: [{
        id: "loading...",
        dateCreated: 0,
        dateUpdated: 0,
        text: "loading..."
      }]
    }
  }


  componentDidMount () {

    const db = firebase.firestore()
    let notes = []

    console.log("🔍 searching for last 10 updated documents...")

    db.collection("notes").orderBy("dateUpdated", "desc").limit(10).get().then( (querySnapshot) => {
      querySnapshot.forEach(function(doc) {
          notes.push({
            id: doc.id, 
            dateUpdated: doc.data().dateUpdated,
            dateCreated: doc.data().dateCreated,
            text: doc.data().text
          })
      })
      this.setState({notes: notes})
    })
  }

  render() {
    return (
      <div className="container">
      <h1>✨ last updated</h1>
        <div className="list">
          
            {
              this.state.notes.map((note) => 
                <Note 
                  name={note.id} 
                  dateCreated={new Date(note.dateCreated.seconds * 1000).toLocaleDateString("en-GB")}
                  dateUpdated={new Date(note.dateUpdated.seconds * 1000).toLocaleDateString("en-GB")}
                  text={note.text}
                  key={note.id}
                /> 
              )
            }
        </div>
      </div>
    );
  }

}

export default NoteList;