import React from 'react'
import './styles.css'

var CourseTile = (props) => {
    return (
        <div className = "CourseTileClass">
            <img src = {props.item.img} />
            <h3>{props.item.Name}</h3>
            <p>BY: ${props.item.Teacher}</p>
            <p>Price: ${props.item.Price}</p>
        </div>
    )
}

export default CourseTile
