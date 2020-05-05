import React from "react"

let AboutNote = (props) => 
    <div className="container">
        <div className="content">       
            <h1 onClick={()=>navigator.clipboard.writeText("noble.fish/"+props.currentPath)}>
                 {"noble.fish/"}<wbr/>{props.currentPath}
            </h1>

            <p>
                {props.location.state.note.dateCreated ? 
                    <>
                        <span role='img' aria-label='baby-emoji'>👶</span> <span>{ " created at " + new Date(props.location.state.note.dateCreated.seconds * 1000).toLocaleDateString("en-GB")}</span>    
                    </>
                : 
                    <>
                        <span role='img' aria-label='baby-emoji'>👶</span> <span>{ " not yet created"}</span>    
                    </>
                }

                <br/>
                
                {props.location.state.note.dateUpdated ? 
                    <>
                        <span role='img' aria-label='writing-emoji'>✍</span> <span> {" updated at " + new Date(props.location.state.note.dateUpdated.seconds * 1000).toLocaleDateString("en-GB")}</span>    
                    </>
                : 
                    <>
                        <span role='img' aria-label='writing-emoji'>✍</span> <span> {" not yet updated"}</span>    
                    </>
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