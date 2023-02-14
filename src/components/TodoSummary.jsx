import React from 'react';

const TodoSummary = ({ todos }) => {
  const numCompleted = todos.filter(todo => todo.completed).length;
  const numRemaining = todos.length - numCompleted;

  return (
    <div className="mt-3">
      <p>Completed: {numCompleted}</p>
      <p>Remaining: {numRemaining}</p>
    </div>
  );
};

export default TodoSummary;
