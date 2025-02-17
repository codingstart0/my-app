import React, { useEffect, useState } from 'react';
import { updateTodoApi } from '../utils/api';
import { Checkbox } from '@mui/material';

function ToggleComplete({ todo, setTodos, hasEdited }) {
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  useEffect(() => {
    // Reset completed to false if the todo was edited
    if (hasEdited) {
      setIsCompleted(false);
    }
  }, [hasEdited]);

  const toggleComplete = async () => {
    try {
      const updatedStatus = !isCompleted;

      await updateTodoApi(todo.id, { completed: updatedStatus });

      setTodos((prevTodos) =>
        prevTodos.map((_todo) =>
          _todo.id === todo.id ? { ..._todo, completed: updatedStatus } : _todo
        )
      );

      setIsCompleted(updatedStatus);
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  return (
    <Checkbox
      checked={isCompleted}
      onChange={toggleComplete}
      size='small'
      color={isCompleted ? 'success' : 'primary'} // Green if completed, blue otherwise
    />
  );
}

export default ToggleComplete;
