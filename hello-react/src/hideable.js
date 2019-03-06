import React, { Component } from 'react';

function hideable(InnerComponent) {

  InnerComponent.displayName = InnerComponent.displayName || InnerComponent.name;

  class OuterComponent extends Component {
    state = {
      show: this.props.show,
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
      const {show, ...innerProps} = this.props;
  
      return (
        <div className="HideableClock">
          {this.state.show && <InnerComponent {...innerProps} />}
          <button onClick={this.handleClick}>
            {this.state.show ? 'Off' : 'On'}
          </button>
        </div>
      )
    }
  }

  OuterComponent.displayName = `Hideable(${InnerComponent.displayName})`;

  OuterComponent.defaultProps = {
    show: true,
  };

  return OuterComponent;
}

export {
  hideable,
}