import React from 'react'

function PresentDate() {

    // Adding JS in JSX
    
    const date = new Date()
    const hour = date.getHours();
    let timeOfDay;
    if(hour <= 12) {
        timeOfDay = 'Good Morning'
    } else if(hour > 12 && hour < 17) {
        timeOfDay = 'Good Afternoon'
    } else {
        timeOfDay = 'Good Night'
    }
    return (
        <p>{`${timeOfDay} ${date.getHours()}:${date.getMinutes()}`}</p>
    )
}

export default PresentDate