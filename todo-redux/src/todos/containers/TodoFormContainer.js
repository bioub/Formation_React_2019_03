import { connect } from 'react-redux';
import { TodoForm } from '../components/TodoForm/TodoForm';

function mapStateToProps(state) {
  return {
    newTodo: state.newTodo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoSubmit(newTodo) {
      dispatch({
        type: 'TODO_ADD',
        payload: {
          id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
          text: newTodo,
          completed: false,
        },
      });
    },
    onNewTodoChange(newTodo) {
      dispatch({type: 'TODO_CHANGE', payload: newTodo});
    },
  };
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)

export {
  TodoFormContainer,
};