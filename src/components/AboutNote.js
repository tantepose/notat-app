import React from "react"

let AboutNote = (props) => 
    <div className="container">
        <div className="content">
            <p>🐠</p>
            <p>{"noble.fish/" + props.currentPath}</p>
            <p>{"👶 " + props.location.state.note.dateCreated}</p>
            <p>{"✨ " + props.location.state.note.dateUpdated}</p>
        </div>
    </div>

export default AboutNote