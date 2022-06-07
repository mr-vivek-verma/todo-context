import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom/client";
import TodoContext from "./context";
import reducer from "./reducer";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
import FormPage from "./pages/FormPage";
import ListingPage from "./pages/ListingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./index.css";

const App = () => {
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        {/* <TodoForm />
        <TodoList /> */}
        <Routes>
          <Route exact path="/" element={<FormPage />} />
          <Route exact path="/ListingPage" element={<ListingPage />} />
        </Routes>
      </BrowserRouter>
    </TodoContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
