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
      minWidth: "200px", // Ensures a minimum width
      maxWidth: "100%", // Prevents it from being too large
      width: "100%", // Adjusts automatically
      marginRight: "6px",
    }}
  />
  );
}

export default TodoEdit;
