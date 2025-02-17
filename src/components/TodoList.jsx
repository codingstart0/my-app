import React from "react";
import TodoItem from "./TodoItem";
import { Box } from "@mui/material";

function TodoList({ todos, setTodos }) {
  return (
<Box sx={{ mt: 2 }}>
        {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </Box>
  );
}

export default TodoList;
