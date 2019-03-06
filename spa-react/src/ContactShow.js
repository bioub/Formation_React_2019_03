import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class ContactShow extends Component {
  render() {
    return (
      <div className="ContactShow">
        Contact {this.props.match.params.id}
      </div>
    );
  }
}

export {
  ContactShow,
};
