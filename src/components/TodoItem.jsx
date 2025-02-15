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
  
        const updatedTodo = { ...todo, text: trimmedText, completed: newCompletedStatus };
  
        await updateTodoApi(todo.id, updatedTodo);
  
        setTodos((prevTodos) =>
          prevTodos.map((_todo) =>
            _todo.id === todo.id ? updatedTodo : _todo
          )
        );
  
        setIsEditing(false);
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
