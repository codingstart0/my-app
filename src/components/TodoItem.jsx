import React, { useEffect, useState } from 'react';
import { deleteTodoApi, updateTodoApi } from '../utils/api';
import TodoEdit from './TodoEdit';
import TodoDelete from './TodoDelete';
import ToggleComplete from './ToggleComplete';

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

    if (e.type === 'blur' && isDeleting) return; // Don't save if deleting
    if (e.type === 'blur' || e.key === 'Enter') {
      const trimmedText = editedText.trim();

      if (!trimmedText) {
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
        setHasEdited(false); // Reset the editing state after saving
      } catch (error) {
        console.error('Failed to update todo:', error);
      }
    }
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <ToggleComplete todo={todo} setTodos={setTodos} hasEdited={hasEdited} />

      {isEditing ? (
        <TodoEdit
          editedText={editedText}
          setEditedText={setEditedText}
          handleBlurOrEnter={handleBlurOrEnter}
        />
      ) : (
        <span onClick={startEditing} style={{ cursor: 'pointer' }}>
          {todo.text}
        </span>
      )}

      <TodoDelete deleteTodo={deleteTodo} todoId={todo.id} />
    </li>
  );
}

export default TodoItem;
