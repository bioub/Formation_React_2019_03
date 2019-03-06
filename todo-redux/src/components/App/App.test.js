import React from 'react';
import {App} from './App';
import { shallow } from 'enzyme';
import { TodoFormContainer } from '../../todos/containers/TodoFormContainer';
import { TodoListContainer } from '../../todos/containers/TodoListContainer';
import { TodoCountContainer } from '../../todos/containers/TodoCountContainer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders correct JSX', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<div className="App">
      <TodoFormContainer />
      <TodoListContainer />
      <TodoCountContainer />
    </div>)).toEqual(true);
});