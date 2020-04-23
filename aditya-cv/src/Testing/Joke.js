import React from 'react'

var Joke = (props) => {
    return (
        <div>
            <h2>{props.question}</h2>
            <h1>{props.punchLine}</h1>
        </div>
    )
}

export default Joke