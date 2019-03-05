import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const initialState = {
  count: 0,
  name: 'Romain',
};

function countReducer(previousState = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return previousState + 1;
    default: 
      return previousState;
  }
}

function nameReducer(previousState = 'Romain', action) {
  switch (action.type) {
    case 'NAME_CHANGE':
      return action.payload;
    default: 
      return previousState;
  }
}

const reducer = combineReducers({
  count: countReducer,
  name: nameReducer,
});

// équivalent à :
// function reducer(previousState = initialState, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...previousState,
//         count: countReducer(previousState.count, action),
//       };
//     case 'NAME_CHANGE':
//       return {
//         ...previousState,
//         name: nameReducer(previousState.name, action),
//       };
//     default: 
//       return previousState;
//   }
// }

// const previousState = undefined;
// const nextState = reducer(previousState, {type: '@@INIT'});
// console.log(nextState.count); // 0
// console.log(previousState === nextState); // false

// const previousState = {count: 123};
// const nextState = reducer(previousState, {type: 'INCREMENT'});
// console.log(nextState.count); // 124
// console.log(previousState === nextState); // false

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
