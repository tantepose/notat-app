import React from "react"

const Note = (props) => 
    <div 
        className="list-item"
        onClick={()=>window.location.pathname=props.name}
    >
        <p className="list-title"><b>/{props.name}</b></p>
        <p className="list-date"><span role='img' aria-label='writing'>✍</span> {props.dateCreated}</p>
        <p className="list-date"><i>"{props.text.substr(0, 40)}..."</i></p>
    </div>

export default Note