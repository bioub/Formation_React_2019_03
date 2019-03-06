import { TODO_ADD, TODO_CHANGE } from './constants';

// redux-actions pour automatiser les actions creators
function todoAdd(newTodo) {
  return {
    type: TODO_ADD,
    payload: {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      text: newTodo,
      completed: false,
    },
  };
}

function todoChange(newTodo) {
  return {
    type: TODO_CHANGE,
    payload: newTodo,
  };
}

export {
  todoAdd,
  todoChange,
};
