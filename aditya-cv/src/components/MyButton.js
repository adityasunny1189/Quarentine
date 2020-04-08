import React from 'react'
import Button from '@material-ui/core/Button'

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
            <Button style = { butStyle } type = "secondary">Add items</Button>
        </div>
    )
}

export default MyButton