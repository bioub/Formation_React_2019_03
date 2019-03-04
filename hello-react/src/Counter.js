import React, { Component } from 'react';

// Composant Statefull
// https://reactjs.org/docs/faq-functions.html
class Counter extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <button className="Counter" onClick={this.handleClick}>
        {this.state.count}
      </button>
    )
  }
}

export {
  Counter,
}