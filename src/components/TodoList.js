// TodoList.js
import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
        <h3 style={{marginLeft:"45px"}}>Child Component</h3>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
