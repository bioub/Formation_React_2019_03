// reselect pour améliorer le style et mettre en cache les résultats
export const selectTodos = (state) => state.todos;

export const selectTodosItems = (state) => selectTodos(state).items;
export const selectNewTodo = (state) => selectTodos(state).newTodo;


export const selectTodosCount = (state) => selectTodosItems(state).length;