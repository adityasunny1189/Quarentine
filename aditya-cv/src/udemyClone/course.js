import React from 'react'
import CourseTile from './CourseTile'
import CourseList from './CourseList'

const Course = () => {
    const courseComponents = CourseList.map(cor => <CourseTile item = {cor} />)
    const styles = {
        marginTop: 50,
    }
    return (
        <div style = {styles}>
            {courseComponents}
        </div>
    )
}

export default Course
