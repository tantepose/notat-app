import React from "react"

let AboutNote = (props) => 
    <div className="container">
        <div className="content">       
            <h1 onClick={()=>navigator.clipboard.writeText("noble.fish/"+props.currentPath)}>
                 {"noble.fish/"}<wbr/>{props.currentPath}
            </h1>

            <p>
                {props.location.state.note.dateCreated ? 
                    "<span role='img' aria-label='baby'>👶</span> created at " + new Date(props.location.state.note.dateCreated.seconds * 1000).toLocaleDateString("en-GB")    
                : 
                    "<span role='img' aria-label='baby'>👶</span> not yet created"
                }

                <br/>
                
                {props.location.state.note.dateUpdated ? 
                    "<span role='img' aria-label='writing'>✍</span> updated at " + new Date(props.location.state.note.dateUpdated.seconds * 1000).toLocaleDateString("en-GB")    
                : 
                    "<span role='img' aria-label='writing'>✍</span> not yet updated"
                }
            </p>

            <button 
                onClick={()=>window.history.back()}
            >
                BACK
            </button>

            <button 
                onClick={()=>window.location.pathname="/"}
            >
                MAKE NEW FISH
            </button>

            <button 
                onClick={()=>window.location.pathname="/about"}
            >
                ABOUT
            </button>

            <p >
                
            </p>
        </div>
    </div>

export default AboutNote