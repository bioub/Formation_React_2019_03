import React, { Component } from 'react';

// Composant Statefull
class Clock extends Component {
  constructor() {
    super();
    this.state = {
      format: 'HH:mm:ss',
      refreshDelay: 1000,
      now: new Date(),
    };
  }

  componentDidMount() {
    this._intervalId = setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  render() {
    return (
      <div className="Clock">
        {this.state.now.toLocaleTimeString()}
      </div>
    )
  }
}

export {
  Clock,
}