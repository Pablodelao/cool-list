import React, { useState } from 'react';
import TodoListItems from './components/TodoListItems';
import TodoForm from './components/TodoForm';
import TodoSummary from './components/TodoSummary';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a to-do list app', completed: false },
    { id: 3, text: 'Share with the world', completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };


  

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossOrigin="anonymous"
      />
      <div className="container mt-5">
        <h1 className="text-center">To-Do List</h1>
        <TodoForm addTodo={addTodo} />
        <ul className="list-group">
          {todos.map((todo) => (
          <TodoListItems
          key={todo.id}
          todo={todo}
          toggleTodo={() => toggleTodo(todo.id)}
          handleDelete={() => handleDelete(todo.id)}
        />
          ))}
        </ul>
        <TodoSummary todos={todos} />
      </div>
    </>
  );
};

export default TodoList;
