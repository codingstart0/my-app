import React from 'react';
import { myHelper, myHelperInline } from '../utils/utils';
import { updateTodoApi } from '../utils/api';

function TodoItem({ todo, setTodos }) {
  const toggleComplete = async () => {
    myHelper('toggleComplete');
    myHelperInline('toggleComplete2');
    // TODO PATCH request to update TODO
    try {
      await updateTodoApi(todo.id, { completed: !todo.completed });

      setTodos((prevTodos) =>
        prevTodos.map((_todo) =>
          _todo.id === todo.id
            ? { ..._todo, completed: !_todo.completed }
            : _todo
        )
      );
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  const deleteTodo = () => {
    // TODO DELETE request to delete TODO
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={toggleComplete}>{todo.text}</span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;
