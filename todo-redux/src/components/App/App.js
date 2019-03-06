import React, { Component } from 'react';
import { TodoFormContainer } from '../../todos/containers/TodoFormContainer';
import { TodoListContainer } from '../../todos/containers/TodoListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoFormContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export {
  App,
};
