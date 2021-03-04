import React from 'react'

const TodoList = ({ list }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {list.map((item) => (
        <li key={item.id}>{item.task}</li>
      ))}
    </ul>
  )
}

export default TodoList
