import { todosReducer } from "./reducers";

describe('todosReducer()', () => {
  it('should add a new todo', () => {
    const previousState = ['a', 'b'];
    const nextState = todosReducer(previousState, {type: 'TODO_ADD', payload: 'c'});
    expect(nextState).toEqual(['a', 'b', 'c']);
    expect(nextState).not.toBe(previousState);
  });
});