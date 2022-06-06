import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom/client";
import TodoContext from "./context";
import reducer from "./reducer";
import TodoList from "./components/TodoList";
// import "./index.css";

const App = () => {
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodoContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
