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
                <b>🎣 how to catch a fresh fish:</b> <br/>
                #1. go to noble.fish<br/>
                #2. type
            </p>

            <p>
                <b>💘 how to share a fish:</b> <br/>
                #1. copy the URL<br/>
                #2. share the URL
            </p>

            <p>
                <b>🍳 how to change a fish:</b> <br/>
                #1. go to the URL<br/>
                #2. type
            </p>

            <button
                onClick={() => window.location.pathname="/"}>
                CATCH A FISH
            </button>

        </div>
    </div>

export default About