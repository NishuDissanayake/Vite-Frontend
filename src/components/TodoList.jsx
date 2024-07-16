import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="main-container">
      <div className="todo-list">
        <h1>Todo List</h1>
        <AddTodo addTodo={addTodo} />
        <ul>
          {todos.map((todo, index) => (
            <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
