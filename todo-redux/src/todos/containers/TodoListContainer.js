import { connect } from 'react-redux'
import { TodoList } from '../components/TodoList/TodoList';
import { selectTodosItems } from '../selectors';

function mapStateToProps(state) {
  return {
    todos: selectTodosItems(state),
  };
}

const TodoListContainer = connect(mapStateToProps)(TodoList)

export {
  TodoListContainer,
}