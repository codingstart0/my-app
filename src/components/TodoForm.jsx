import React, { useState } from "react";

function TodoForm({ setTodos }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(), // Unique ID
      text,
      completed: false,
    };
    // TODO Post request to create new TODO
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setText(""); // Clear input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
