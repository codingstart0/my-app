import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { loadTodos } from './utils/api';
import './styles.css';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchAndSetTodos() {
      try {
        const todosFromApi = await loadTodos();
        console.log(todosFromApi); // Add this to log the response from the API
        if (!todosFromApi) {
          console.error('No todos received');
        } else if (Array.isArray(todosFromApi)) {
          setTodos(todosFromApi); // Update state with valid data
        } else {
          console.error('Invalid todos format:', todosFromApi);
        }
      } catch (error) {
        console.error('Failed to load todos:', error);
      }
    }
    fetchAndSetTodos();
  }, []);

  return (
    <div className='app'>
      <h1>Todo App</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
