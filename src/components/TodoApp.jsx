import React, { useState } from 'react';
import TodoList from './TodoList';

const TodoApp = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.length){
      const newItem = {
        task: input,
        id: new Date(),
      }
      setList([...list, newItem]);
      setInput('');
    }
  }
  return (
    <div>
      <h2>TODO</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="newTodo">What needs to be done?</label>
        <br/>
        <input
          type="text"
          onChange={({ target: { value }}) => setInput(value) }
          value={input}
        />
        <button>Add Item</button>
      </form>
      <TodoList list={list} />
    </div>
  )
}

export default TodoApp
