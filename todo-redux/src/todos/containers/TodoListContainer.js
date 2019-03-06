import { connect } from 'react-redux'
import { TodoList } from '../components/TodoList/TodoList';
import { selectTodosItems } from '../selectors';
import { todoDelete } from '../actions';

function mapStateToProps(state) {
  return {
    todos: selectTodosItems(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete(todo) {
      dispatch(todoDelete(todo));
    }
  }
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export {
  TodoListContainer,
}