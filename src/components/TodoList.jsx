import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
}

export default TodoList;
