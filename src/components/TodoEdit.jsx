import React from 'react';

function TodoEdit({ editedText, setEditedText, handleBlurOrEnter }) {
  return (
    <input
      type='text'
      value={editedText}
      onChange={(e) => setEditedText(e.target.value)}
      onBlur={handleBlurOrEnter}
      onKeyDown={handleBlurOrEnter}
      autoFocus
    />
  );
}

export default TodoEdit;
