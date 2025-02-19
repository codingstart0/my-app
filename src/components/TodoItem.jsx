import React, { useState, useRef } from 'react';
import { deleteTodoApi, updateTodoApi } from '../utils/api';
import TodoEdit from './TodoEdit';
import TodoDelete from './TodoDelete';
import ToggleComplete from './ToggleComplete';
import { Box, Typography } from '@mui/material';

function TodoItem({ todo, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const deleteButtonRef = useRef(null); // useRef to reference the delete button

  // Move the deleteTodo function and others to the top
  const deleteTodo = async () => {
    setIsEditing(false);

    try {
      await deleteTodoApi(todo.id);
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const handleBlurOrEnter = async (e) => {
    const isDeleting = deleteButtonRef.current && deleteButtonRef.current.contains(e.relatedTarget);

    if (e.type === 'blur' && isDeleting) return;

    if (e.type === 'blur' || e.key === 'Enter') {
      const trimmedText = editedText.trim();
      if (!trimmedText) {
        setEditedText(todo.text);
        setIsEditing(false);
        return;
      }

      try {
        const hasTextChanged = trimmedText !== todo.text;
        const newCompletedStatus = hasTextChanged ? false : todo.completed;

        const updatedTodo = {
          ...todo,
          text: trimmedText,
          completed: newCompletedStatus,
        };

        await updateTodoApi(todo.id, updatedTodo);

        setTodos((prevTodos) =>
          prevTodos.map((_todo) => (_todo.id === todo.id ? updatedTodo : _todo))
        );

        setIsEditing(false);
      } catch (error) {
        console.error('Failed to update todo:', error);
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <ToggleComplete todo={todo} setTodos={setTodos} />

      {isEditing ? (
        <TodoEdit
          editedText={editedText}
          setEditedText={setEditedText}
          handleBlurOrEnter={handleBlurOrEnter}
        />
      ) : (
        <Typography
          onClick={startEditing}
          sx={{
            cursor: 'pointer',
            flexGrow: 1,
            textAlign: 'left',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            padding: '0 10px',
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'gray' : 'inherit',
          }}
        >
          {todo.text}
        </Typography>
      )}

      <Box sx={{ marginLeft: '1' }}>
        <TodoDelete deleteTodo={deleteTodo} todoId={todo.id} ref={deleteButtonRef} />
      </Box>
    </Box>
  );
}

export default TodoItem;
