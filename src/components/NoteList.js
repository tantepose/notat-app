import React from 'react';
import firebase from "./Firestore"

import Note from "./Note"

class NoteList extends React.Component {

  constructor() {
    super()

    this.state = {
      notes: []
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
          <p>last updated fishes 🐟🐠🐡</p>
            {
              this.state.notes.map((note) => 
                <Note 
                  name={note.id} 
                  dateCreated={note.dateCreated}
                  dateUpdated={note.dateUpdated}
                  text={note.text}
                /> 
              )
            }
      </div>
    );
  }

}

export default NoteList;