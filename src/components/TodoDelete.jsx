import { Button } from '@mui/material';
import React from 'react';

function TodoDelete({ deleteTodo }) {
  return (
    <Button
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
