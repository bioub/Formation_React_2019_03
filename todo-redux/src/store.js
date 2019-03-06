import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { newTodoReducer, todosReducer } from './todos/reducers';

const reducer = combineReducers({
  // users: combineReducers(),
  todos: combineReducers({
    newTodo: newTodoReducer,
    items: todosReducer,
  }),
});

const store = createStore(reducer, composeWithDevTools());

export {
  store,
};