import React from "react";

const TodoContext = React.createContext({
  Todo: [
    { id: 1, text: "hello Vivek", done: false },
    { id: 2, text: "hello Rahul", done: false },
    { id: 3, text: "hello Sam", done: true },
  ],
  currentTodo: {},
});

export default TodoContext;
