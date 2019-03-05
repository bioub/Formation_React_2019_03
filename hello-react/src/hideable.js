import React, { Component } from 'react';

function hideable(InnerComponent) {

  class OuterComponent extends Component {
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
          {this.state.show && <InnerComponent {...this.props} />}
          <button onClick={this.handleClick}>
            {this.state.show ? 'Off' : 'On'}
          </button>
        </div>
      )
    }
  }

  return OuterComponent;
}

export {
  hideable,
}