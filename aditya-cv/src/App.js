// Project 1: TODO APP

// ---------------------------BREAK---------------------------------
// ****************************ONE**********************************

// import React from 'react'

// import Header from './components/Header'
// import MainContent from './components/MainContent'
// import Footer from './components/Footer'
// import PresentDate from './components/PresentDate'

// function App() {
//   return (
//     <div>
//       <PresentDate />
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   )
// }

// export default App

// ---------------------------BREAK---------------------------------
// ****************************TWO**********************************

// Project 2: Image Galary


// import React from 'react'

// import ImgTile from './projectTwoComp/ImgTile'
// import NewButton from './projectTwoComp/NewButton'
// // import Skeleton from '@material-ui/lab/Skeleton';

// function App() {
//   return (

//     // Passing Parameter in the components

//     <div>
//       <ImgTile 
//         name = "React"
//         imgURL = "https://iotvnaw69daj.i.optimole.com/6LNb4w-th3lj9kg/w:141/h:132/q:90/https://mk0codeinwp10tp0961a.kinstacdn.com/wp-content/uploads/2019/01/react-logo.png"
//         email = "React@gmail.com"
//       />

//       <ImgTile 
//         name = "Angular"
//         imgURL = "https://iotvnaw69daj.i.optimole.com/6LNb4w-ChEhJxtw/w:141/h:146/q:90/https://mk0codeinwp10tp0961a.kinstacdn.com/wp-content/uploads/2019/01/angular-logo.png"
//         email = "Angular@gmail.com"
//       />

//       <ImgTile 
//         name = "Vue"
//         imgURL = "https://iotvnaw69daj.i.optimole.com/6LNb4w-PBnphd4f/w:141/h:122/q:90/https://mk0codeinwp10tp0961a.kinstacdn.com/wp-content/uploads/2019/01/vue-logo.png"
//         email = "Vue@gmail.com"
//       />

//       <ImgTile 
//         name = "Redux"
//         imgURL = "https://miro.medium.com/max/1400/0*U2DmhXYumRyXH6X1.png"
//         email = "Redux@gmail.com"
//       />

//       <NewButton />
//     </div>
//   )
// }

// export default App




// *******************************TESTING********************************

import React, { Component } from 'react'
import Joke from './Testing/Joke'

class App extends Component {
  state = {
    jokesData: [
      {
          id: 1,
          question: "Covid 19",
          punchLine: "It’s hard"
      },
      {
          id: 2,
          question: "Switzerland",
          punchLine: "flag is a big plus!"
      }
    ]
  }

  nextJoke = () => {
    console.log('Button Clicked')
    this.setState( {
      jokesData: [
        {
            id: 1,
            question: "Corona virus",
            punchLine: "It’s very hard"
        },
        {
            id: 2,
            question: "India",
            punchLine: "flag is a big orange!"
        }
      ]
    }
    )
  }

  render() {
    return (
      <div>
        <button onClick = {this.nextJoke}>Next</button>
        <Joke 
          id = {this.state.jokesData[0].id} 
          question = {this.state.jokesData[0].question} 
          punchLine = {this.state.jokesData[0].punchLine}
        />
      </div>
    )
  }
}

export default App