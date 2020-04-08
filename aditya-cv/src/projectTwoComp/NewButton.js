import React from 'react'
// import Button from '@material-ui/core/Button'
// import Fab from '@material-ui/core/Fab'
// import AddRoundedIcon from '@material-ui/icons/AddRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';



function NewButton() {
    const styles = {
        textAlign: "center"
    }
    return (
        <div style = {styles}>
            <AssignmentTurnedInRoundedIcon />
        </div>
    )
}

export default NewButton 