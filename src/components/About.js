import React from "react"

let About = () => 
    <div className="container">
        <div className="content">
            <h1>noble.fish</h1>
            <p>
                noble.fish is a simple, anonymous, and free service 
                to store and share text - called fish.
            </p>
            <p>
                noble.fish will provide a random URL, and save 
                your fish at this URL after 1 second of inactivity.
            </p>
            <p>
                <b><span role='img' aria-label='fishing rod'>🎣</span> how to create a fresh fish:</b> <br/>
                #1. go to noble.fish<br/>
                #2. type
            </p>

            <p>
                <b><span role='img' aria-label='heart'>💘</span> how to share a fish:</b> <br/>
                #1. copy the URL<br/>
                #2. share the URL
            </p>

            <p>
                <b><span role='img' aria-label='pan'>🍳</span> how to change a fish:</b> <br/>
                #1. go to the URL<br/>
                #2. type
            </p>

            <button
                onClick={() => window.location.pathname="/"}>
                MAKE NEW FISH
            </button>

            <button
                onClick={() => window.history.back()}>
                BACK
            </button>

        </div>
    </div>

export default About