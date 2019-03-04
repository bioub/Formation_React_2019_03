import React from 'react'

// Composant Stateless
function Hello({name = ''}) {
  // return React.createElement('div', {className: 'Hello'}, 'Hello ' + name)
  return (
    <div className="Hello">
      Hello {name}
    </div>
  );
}

export {
  Hello,
};
