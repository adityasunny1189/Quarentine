import React from 'react'
import MyButton from './MyButton'
import TodoItem from './TodoItem'
import './styles.css'


function MainContent() {
    return (
        <div className = "todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <MyButton />
        </div>
    )
}

export default MainContent