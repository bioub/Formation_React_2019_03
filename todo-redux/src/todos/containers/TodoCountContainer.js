import { connect } from 'react-redux'
import { TodoCount } from '../components/TodoCount/TodoCount';
import { selectTodosCount } from '../selectors';

function mapStateToProps(state) {
  return {
    count: selectTodosCount(state),
  };
}

const TodoCountContainer = connect(mapStateToProps)(TodoCount)

export {
  TodoCountContainer,
}