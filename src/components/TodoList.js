// TodoList.js
// import React from "react";

// const TodoList = ({ todos, handleComplete }) => {
//   return (
//     <div>
//         <h3 style={{marginLeft:"45px"}}>Child Component</h3>
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           {todo.text}
//           {!todo.completed && (<button onClick={()=> handleComplete(todo.id)}>Complete</button>)}
//         </li>
//       ))}
//     </ul>
//     </div>
//   );
// };

// export default TodoList;


import React from "react";
import "./../styles/App.css";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.todo} {!todo.state && <button onClick={()=>handleComplete(index)}>Complete</button>}
        </li>
      ))}
    </div>
  );
};

export default TodoList;
