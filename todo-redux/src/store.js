import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { newTodoReducer, todosReducer } from './todos/reducers';

const reducer = combineReducers({
  newTodo: newTodoReducer,
  todos: todosReducer,
});

const store = createStore(reducer, composeWithDevTools());

export {
  store,
};