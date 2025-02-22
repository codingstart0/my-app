import React from 'react';
import { updateTodoApi } from '../utils/api';
import { IconButton } from '@mui/material';
import PlaylistAddCheckTwoToneIcon from '@mui/icons-material/PlaylistAddCheckTwoTone';

function ToggleComplete({ todo, setTodos }) {
  const toggleComplete = async () => {
    try {
      const updatedStatus = !todo.completed;
      await updateTodoApi(todo.id, { completed: updatedStatus });
      setTodos((prevTodos) =>
        prevTodos.map((_todo) =>
          _todo.id === todo.id ? { ..._todo, completed: updatedStatus } : _todo
        )
      );
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  return (
    <IconButton onClick={toggleComplete} size='small'>
      <PlaylistAddCheckTwoToneIcon color={todo.completed ? 'success' : 'secondary'} />
    </IconButton>
  );
}

export default ToggleComplete;