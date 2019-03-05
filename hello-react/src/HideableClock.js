import React, { Component } from 'react';
import { Clock } from './Clock';

class HideableClock extends Component {
  state = {
    show: true,
  };
  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    // let clockJsx;

    // if (this.state.show) {
    //   clockJsx = <Clock />;
    // }

    return (
      <div className="HideableClock">
        {this.state.show && <Clock {...this.props} />}
        <button onClick={this.handleClick}>
          {this.state.show ? 'Off' : 'On'}
        </button>
      </div>
    )
  }
}

export {
  HideableClock,
}