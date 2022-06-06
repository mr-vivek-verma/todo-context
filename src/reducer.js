import { v4 as uuidv4 } from "uuid";
export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex((t) => t.text === action.payload) > -1) {
        return state;
      }
      const newTodo = {
        id: uuidv4(),
        Text: action.payload,
        done: false,
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos,
      };
    case "TOGGLE_TODO":
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, done: !action.payload.done }
          : t
      );
      return {
        ...state,
        todos: toggleTodos,
      };
    case "DELETE_TODO":
      const filterTodo = state.todos.filter((t) => t.id !== action.payload.id);
      const isRemovedTodo =
        state.currentTodo.id === action.payload.id ? {} : state.currentTodo;
      return {
        ...state,
        currentTodo: isRemovedTodo,
        todos: filterTodo,
      };
    case "UPDATE_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex((t) => t.text === action.payload) > -1) {
        return state;
      }
      const updatedTodo = { ...state.currentTodo, text: action.payload };
      const updatedTodoIndex = state.todos.findIndex(
        (t) => t.id === state.currentTodo.id
      );
      const updatedTodos = [
        ...state.todos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.todos.slice(updatedTodoIndex + 1),
      ];
      return {
        ...state,
        todos: updatedTodos,
      };
    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload,
      };
    default:
      return state;
  }
}
