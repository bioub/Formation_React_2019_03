import React, { Component } from 'react';
import { shape, number, bool, string } from 'prop-types';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    return (
      <div className="TodoItem">
        {this.props.todo.text}
        <button onClick={this.props.onDelete}>-</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: shape({id: number, text: string, completed: bool}),
};

export {
  TodoItem,
};
