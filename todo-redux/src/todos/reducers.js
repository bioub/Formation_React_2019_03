const initialState = {
  newTodo: 'Achet',
  todos: [{
    id: 1,
    text: 'Acheter du pain',
    completed: false,
  }, {
    id: 2,
    text: 'Aller au sport',
    completed: true,
  }, {
    id: 3,
    text: 'Utiliser Redux',
    completed: false,
  }],
};

function newTodoReducer(previousState = initialState.newTodo, {type, payload}) {
  switch (type) {
    case 'TODO_CHANGE':
      return payload;
    default:
      return previousState;
  }
}

function todosReducer(previousState = initialState.todos, {type, payload}) {
  switch (type) {
    case 'TODO_ADD':
      return [...previousState, payload];
    default:
      return previousState;
  }
}

export {
  newTodoReducer,
  todosReducer,
};