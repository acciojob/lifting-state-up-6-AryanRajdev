// App.js
// import React, { useState } from "react";
// import TodoList from "./TodoList";

// const App = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, text: "Learn React", completed: false },
//     { id: 2, text: "Build a React app", completed: false },
//     { id: 3, text: "Deploy the React app", completed: false },
//   ]);

//   const handleComplete = (id) => {
//     const updatedTodos = todos.map((element) =>
//       element.id === id ? { ...element, completed: true } : element
//     );
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <TodoList todos={todos} handleComplete={handleComplete} />
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList.js";

const App = () => {
  const [todos, setTodos] = useState([
    { todo: "one", state: false },
    { todo: "two", state: false },
    { todo: "three", state: false },
  ]);
  
  
  function handleComplete(idx) {
    const updatedTodos = todos.map((todo, index) =>
      index === idx ? { ...todo, state: true } : todo
    );
    setTodos(updatedTodos);
  }
  
  return (
    <div>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;