import React from 'react';

function TodoDelete({ deleteTodo, todoId }) {
  return (
    <button id={`delete-${todoId}`} onClick={deleteTodo}>
      Delete
    </button>
  );
}

export default TodoDelete;
