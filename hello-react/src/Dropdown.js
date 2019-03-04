import React, { Component } from 'react';

class Dropdown extends Component {
  handleClick(item) {
    this.props.onSelected(item);
  }
  render() {
    const {selected = '', items = []} = this.props;

    const itemsJsx = items.map((item) => <div key={item} onClick={() => this.handleClick(item)}>{item}</div>);

    return (
      <div className="Dropdown">
        <div className="selected">
          {selected}
        </div>
        <div className="items">
          {itemsJsx}
        </div>
      </div>
    )
  }
}

export {
  Dropdown,
};