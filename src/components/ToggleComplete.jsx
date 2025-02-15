import React from 'react';
import { updateTodoApi } from '../utils/api';

function ToggleComplete({ todo, setTodos, hasEdited }) {
  const toggleComplete = async () => {
    const newCompletedStatus = hasEdited ? false : !todo.completed;

    try {
      await updateTodoApi(todo.id, { completed: newCompletedStatus });

      setTodos((prevTodos) =>
        prevTodos.map((_todo) =>
          _todo.id === todo.id
            ? { ..._todo, completed: newCompletedStatus }
            : _todo
        )
      );
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  return (
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={toggleComplete}
    />
  );
}

export default ToggleComplete;
