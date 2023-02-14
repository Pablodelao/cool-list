import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text.trim());
      setText('');
    }
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="todo"
          className="form-control"
          value={text}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
