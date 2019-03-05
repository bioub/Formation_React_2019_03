import React, { Component } from 'react';
import { Hello } from './Hello';
import { Clock } from './Clock';
import { Counter } from './Counter';
import { ContactForm } from './ContactForm';
import { HideableClock } from './HideableClock';
import { Dropdown } from './Dropdown';

class App extends Component {
  state = {
    selected: 'Romain',
    items: ['Romain', 'Jean', 'Pierre'],
  }

  handleSelected = (item) => {
    this.setState({
      selected: item,
    });
  };

  render() {
    const dropdownProps = {
      selected: this.state.selected,
      items: this.state.items,
      onSelected: this.handleSelected,
    };

    return (
      <div className="App">
        <Hello />
        <Hello name={this.state.selected} />
        <Clock />
        <Counter />
        <ContactForm />
        <HideableClock />
        <Dropdown selected={this.state.selected} items={this.state.items} onSelected={this.handleSelected} />
        <Dropdown {...dropdownProps} />
      </div>
    );
  }
}

export default App;
