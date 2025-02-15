import React, { useState, useEffect } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { loadTodos } from "./utils/api";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      async function fetchAndSetTodos() {
        try {
          const todosFromApi = await loadTodos();
          setTodos(todosFromApi); // Update state with API data
        } catch (error) {
          console.error("Failed to load todos:", error);
        }
      }
      fetchAndSetTodos();

    }, []);

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;
