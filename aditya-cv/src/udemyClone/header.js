import React from 'react'
import './styles.css'

const Header = () => {
    const styles = {
        textAlign: "center",
        fontFamily: "san-sarif",
        width: 500,
        marginBottom: 20,
        fontSize: 23,
        margin: "auto",
    }

    const styleh1 = {
        margin: 0,
        color: "rgb(240, 197, 9)"
    }

    return (
        <div className = "headerStyle" style = {styles}>
            <h1 style = {styleh1}>JavaScript Courses</h1>
        </div>
    )
}

export default Header