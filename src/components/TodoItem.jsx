import React, { useEffect, useState } from 'react';
import { deleteTodoApi, updateTodoApi } from '../utils/api';
import TodoEdit from './TodoEdit';
import TodoDelete from './TodoDelete';
import ToggleComplete from './ToggleComplete';
import { Box, Typography } from '@mui/material';

function TodoItem({ todo, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [hasEdited, setHasEdited] = useState(false);

  useEffect(() => {
    if (editedText !== todo.text) {
      setHasEdited(true);
    }
  }, [editedText, todo.text]);

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
    const isDeleting = e.relatedTarget?.id === `delete-${todo.id}`;

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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0.5,
        marginBottom: 1,
        maxWidth: '400px', // Control the width here
        width: '100%',
      }}
    >
      <ToggleComplete todo={todo} setTodos={setTodos} hasEdited={hasEdited} />

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
            flexGrow: 1, // Makes sure the text takes up the middle space
            textAlign: 'left',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis', // Adds "..." if text is too long
            padding: '0 10px',
          }}
        >
          {todo.text}
        </Typography>
      )}

      <TodoDelete deleteTodo={deleteTodo} todoId={todo.id} />
    </Box>
  );
}

export default TodoItem;
