import React, { Component } from 'react'
import Header from './udemyClone/header'
import Course from './udemyClone/course'
import Footer from './udemyClone/footer'

class Udemy extends Component {
    render() {
        return (
            <div>
                <Header />
                <Course />
                <Footer />
            </div>
        )
    }
}

export default Udemy