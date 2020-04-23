import React from 'react'

// function ImgTile(props) {
//     const styles = {
//         width: "50%",
//         height: 300,
//         margin:"auto",
//         textAlign: "center",
//         border: "5px solid gold",
//         backgroundColor: "teal",
//         borderRadius: "20%",
//         paddingTop: 10,
//         marginBottom: 10
//     }

//     const stylesCss = {
//         height: 100,
//         width: 100,
//         borderRadius: "50%",
//         border: "2px solid black",
//         margin: 0
//     }
//     return (
//             <div style={styles}>
//                 <img style={stylesCss} src={props.imgURL} alt="pic"/>
//                 <h1>Name: {props.name}</h1>
//                 <p>Email: {props.email}</p>
//             </div>
//     )
// }

var ImgTile = (props) => {
    const styles = {
                width: "50%",
                height: 300,
                margin:"auto",
                textAlign: "center",
                border: "5px solid gold",
                backgroundColor: "teal",
                borderRadius: "20%",
                paddingTop: 10,
                marginBottom: 10
            }
        
            const stylesCss = {
                height: 100,
                width: 100,
                borderRadius: "50%",
                border: "2px solid black",
                margin: 0
            }
            return (
                    <div style={styles}>
                        <img style={stylesCss} src={props.imgURL} alt="pic"/>
                        <h1>Name: {props.name}</h1>
                        <p>Email: {props.email}</p>
                    </div>
            )
}

export default ImgTile
