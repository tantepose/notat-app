import React from "react"

let AboutNote = (props) => 
    <div className="container">
        <div className="content">       
            <h1 onClick={()=>navigator.clipboard.writeText("noble.fish/"+props.currentPath)}>
                 {"noble.fish/"}<wbr/>{props.currentPath}
            </h1>

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

            <button 
                onClick={()=>window.history.back()}
            >
                BACK
            </button>

            <button 
                onClick={()=>window.location.pathname="/about"}
            >
                HELP
            </button>

            <p >
                
            </p>
        </div>
    </div>

export default AboutNote