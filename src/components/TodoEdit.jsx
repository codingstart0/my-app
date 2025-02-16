import React from 'react';
import TextField from "@mui/material/TextField";

function TodoEdit({ editedText, setEditedText, handleBlurOrEnter }) {
  return (
    <TextField
    variant="outlined"
    size="small"
    // fullWidth
    autoFocus
    value={editedText}
    onChange={(e) => setEditedText(e.target.value)}
    onBlur={handleBlurOrEnter}
    onKeyDown={handleBlurOrEnter}
  />
  );
}

export default TodoEdit;
