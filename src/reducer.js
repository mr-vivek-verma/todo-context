export default function reducer(state, action) {
  switch (action.type) {
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
      return {
        ...state,
        todos: filterTodo,
      };
    default:
      return state;
  }
}
