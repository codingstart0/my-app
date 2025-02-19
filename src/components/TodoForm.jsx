import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTodoApi } from '../utils/api';
import { Box } from '@mui/material';

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
      <Box display='flex' gap={0.5}>
        <TextField
          label='Add new todo...'
          variant='outlined'
          size='small'
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
        <Button
          type='submit'
          variant='contained'
          sx={{ height: '40px' }}
          color='primary'
        >
          Add
        </Button>
      </Box>
    </form>
  );
}

export default TodoForm;
