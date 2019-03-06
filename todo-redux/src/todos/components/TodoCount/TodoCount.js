import React, { Component } from 'react';
import { number } from 'prop-types';
import './TodoCount.css';

function TodoCount({count = 0}) {
  return (
    <div className="TodoCount">
      {count} todos
    </div>
  );
}

TodoCount.propTypes = {
  count: number,
};

export {
  TodoCount,
};
