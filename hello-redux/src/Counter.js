import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideable } from './hideable';

class Counter extends Component {
  handleClick = () => {
    this.props.dispatch({type: 'INCREMENT'});
  };
  render() {
    return (
      <button className="Counter" onClick={this.handleClick}>
        {this.props.count}
      </button>
    )
  }
}

// const enhance = connect();
// const CounterContainer = enhance(Counter);

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

const CounterContainer = connect(mapStateToProps)(Counter);

const HideableCounterContainer = hideable(CounterContainer);


export {
  Counter,
  CounterContainer,
  HideableCounterContainer,
}