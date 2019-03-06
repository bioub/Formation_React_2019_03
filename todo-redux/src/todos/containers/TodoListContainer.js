import { connect } from 'react-redux'
import { TodoList } from '../components/TodoList/TodoList';

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

const TodoListContainer = connect(mapStateToProps)(TodoList)

export {
  TodoListContainer,
}