import React, { useState } from 'react';
import { myHelper, myHelperInline } from '../utils/utils';
import { deleteTodoApi, updateTodoApi } from '../utils/api';

function TodoItem({ todo, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const toggleComplete = async () => {
    myHelper('toggleComplete');
    myHelperInline('toggleComplete2');
    // TODO PATCH request to update TODO
    try {
      await updateTodoApi(todo.id, { completed: !todo.completed });

      setTodos((prevTodos) =>
        prevTodos.map((_todo) =>
          _todo.id === todo.id
            ? { ..._todo, completed: !_todo.completed }
            : _todo
        )
      );
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  const deleteTodo = async () => {
    setIsEditing(false); // Exit edit mode immediately

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
    if (e.type === 'blur' && e.relatedTarget?.id === `delete-${todo.id}`) {
      // Prevent blur from triggering update when clicking delete
      return;
    }

    if (e.type === 'blur' || e.key === 'Enter') {
      if (!editedText.trim()) {
        setEditedText(todo.text);
        setIsEditing(false);
        return;
      }

      try {
        await updateTodoApi(todo.id, { text: editedText });

        setTodos((prevTodos) =>
          prevTodos.map((_todo) =>
            _todo.id === todo.id ? { ..._todo, text: editedText } : _todo
          )
        );
        setIsEditing(false);
      } catch (error) {
        console.error('Failed to update todo:', error);
      }
    }
  };

  return (
    <ul style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={toggleComplete}
      />

      {isEditing ? (
        <input
          type='text'
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleBlurOrEnter}
          onKeyDown={handleBlurOrEnter}
          autoFocus
        />
      ) : (
        <span onClick={startEditing} style={{ cursor: 'pointer' }}>
          {todo.text}
        </span>
      )}

      <button id={`delete-${todo.id}`} onClick={deleteTodo}>
        Delete
      </button>
    </ul>
  );
}

export default TodoItem;
