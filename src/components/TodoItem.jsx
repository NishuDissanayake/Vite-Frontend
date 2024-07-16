import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, index, removeTodo }) => {
  return (
    <li className="todo-item">
      {todo} <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
