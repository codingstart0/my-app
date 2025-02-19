import React from 'react';
import TextField from "@mui/material/TextField";

function TodoEdit({ editedText, setEditedText, handleBlurOrEnter }) {
  return (
    <TextField
    variant="outlined"
    size="small"
    autoFocus
    fullWidth
    value={editedText}
    onChange={(e) => setEditedText(e.target.value)}
    onBlur={handleBlurOrEnter}
    onKeyDown={handleBlurOrEnter}
    sx={{
      minWidth: "200px",
      maxWidth: "100%",
      width: "100%",
      marginRight: "6px",
    }}
  />
  );
}

export default TodoEdit;
