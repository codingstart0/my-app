import React, { useState } from 'react';
import { createTodoApi } from '../utils/api';

function TodoForm({ setTodos }) {
  const [text, setText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return;

    try {
      const savedTodo = await createTodoApi({ text, completed: false });

      // Update state with the newly created todo
      setTodos((prevTodos) => [...prevTodos, savedTodo]);
      setText('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={({ target }) => setText(target.value)}
        placeholder='Add a todo...'
      />
      <button type='submit'>Add</button>
    </form>
  );
}

export default TodoForm;
