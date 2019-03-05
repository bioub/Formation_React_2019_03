import React from 'react'
import { connect } from 'react-redux';

// Composant Stateless
function Hello({name = ''}) {
  // return React.createElement('div', {className: 'Hello'}, 'Hello ' + name)
  return (
    <div className="Hello">
      Hello {name}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

const HelloContainer = connect(mapStateToProps)(Hello);

export {
  Hello,
  HelloContainer,
};
