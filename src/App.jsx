import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { loadTodos } from './utils/api';
import './index.css';
import { Box, Paper } from '@mui/material';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchAndSetTodos() {
      try {
        const todosFromApi = await loadTodos();
        setTodos(todosFromApi); // Update state with API data
      } catch (error) {
        console.error('Failed to load todos:', error);
      }
    }
    fetchAndSetTodos();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 3,
          width: '90%',
          maxWidth: 400,
          textAlign: 'center',
        }}
      >
        <h2>Todo App</h2>
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Paper>
    </Box>
  );
}

export default App;
