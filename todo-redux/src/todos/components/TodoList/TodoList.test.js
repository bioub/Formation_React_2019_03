import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './TodoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList todos={[{id: 1, text: 'A'}, {id: 2, text: 'B'}]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
