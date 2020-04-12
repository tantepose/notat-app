import React from "react"

let AboutNote = (props) => 
    <div className="container">
        <div className="content">       
            <p onClick={()=>navigator.clipboard.writeText(document.location)}>
                 {"noble.fish/" + props.currentPath}
            </p>

            <p>
                {props.location.state.note.dateCreated ? 
                    "👶 created at " + new Date(props.location.state.note.dateCreated.seconds * 1000).toLocaleDateString("en-GB")    
                : 
                    "👶 not yet created"
                }
            </p>
           
            <p>
                {props.location.state.note.dateUpdated ? 
                    "✍ updated at " + new Date(props.location.state.note.dateUpdated.seconds * 1000).toLocaleDateString("en-GB")    
                : 
                    "✍ not yet updated"
                }
            </p>

            <p onClick={()=>window.history.back()}>
                go back
            </p>
        </div>
    </div>

export default AboutNote