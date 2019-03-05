import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Dropdown.module.scss';
import { connect } from 'react-redux';

class Dropdown extends Component {
  handleClick(item) {
    this.props.dispatch({type: 'NAME_CHANGE', payload: item});
  }
  render() {
    const {selected = '', items = []} = this.props;

    const itemsJsx = items.map((item) => <div key={item} onClick={() => this.handleClick(item)}>{item}</div>);

    return (
      <div className={css.Dropdown}>
        <div className={css.Selected}>
          {selected}
        </div>
        <div className={css.Items}>
          {itemsJsx}
        </div>
      </div>
    )
  }
}

Dropdown.propTypes = {
  selected: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  onSelected: PropTypes.func,
};

Dropdown.defaultProps = {
  selected: '',
  items: [],
  onSelected: () => {},
};

function mapStateToProps(state) {
  return {
    selected: state.name,
  };
}

const DropdownContainer = connect(mapStateToProps)(Dropdown);

export {
  Dropdown,
  DropdownContainer,
};