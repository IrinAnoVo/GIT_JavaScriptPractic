import React from 'react'

const TodoList = ({tasks}) => {
  return (
    <ul>
        {
            tasks && tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))
        }
    </ul>
  )
}

export default TodoList