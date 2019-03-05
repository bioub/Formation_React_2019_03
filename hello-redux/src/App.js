import React, { Component } from 'react';
import { Counter, CounterContainer, HideableCounterContainer } from './Counter';
import { DropdownContainer } from './Dropdown';
import { HelloContainer } from './Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter count={12} />
        <CounterContainer toto="titi" />
        <CounterContainer />
        <CounterContainer />
        <HideableCounterContainer />
        <HelloContainer />
        <DropdownContainer items={['Romain', 'Jean', 'Pierre']}/>
      </div>
    );
  }
}

export default App;
