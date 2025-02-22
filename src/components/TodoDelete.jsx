import { Button } from '@mui/material';
import React from 'react';

function TodoDelete({ deleteTodo, todoId }) {
  return (
    <Button
      id={`delete-${todoId}`}
      onClick={deleteTodo}
      variant='contained'
      color='error'
      size='small'
      sx={{
        padding: 0.3,
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: 'error.dark',
        },
      }}
    >
      Delete
    </Button>
  );
}

export default TodoDelete;
