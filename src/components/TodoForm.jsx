import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
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
      <TextField
        label="Add a todo..."
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type='submit' variant='contained' color='primary'>
        Add
      </Button>
    </form>
  );
}

export default TodoForm;
