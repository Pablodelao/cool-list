import React from 'react';




const TodoListItems = ({ todo, toggleTodo, handleDelete }) => {
  const handleDeleteClick = (event) => {
    event.stopPropagation();
    handleDelete();
  };

  return (
    <li
      className={`list-group-item ${todo.completed ? 'list-group-item-success' : ''}`}
      onClick={toggleTodo}
    >
      <div className="d-flex justify-content-between align-items-center">
        <span>{todo.text}</span>
        <button className="btn btn-danger btn-sm" onClick={handleDeleteClick}>Delete</button>
      </div>
      {todo.completed && <span className="ml-3 text-success">Done</span>}
    </li>
  );
};

export default TodoListItems;