import React from 'react'

function MyButton() {

    // Adding CSS in JSX
    // CSS is added in the form of JS objects
    const butStyle = {
        marginTop: 90,
        marginBottom: 30,
        backgroundColor: "orange",
        padding: 0,
        height: 30,
        width: 100
    }
    return (
        <div>
            <button style = {butStyle}>Add todo items</button>
        </div>
    )
}

export default MyButton