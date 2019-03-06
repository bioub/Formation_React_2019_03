import React from 'react';
import ReactDOM from 'react-dom';
import { TodoCount } from './TodoCount';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoCount />, div);
  ReactDOM.unmountComponentAtNode(div);
});
