import { selectTodos } from './selectors';

describe('selectTodos()', () => {
  it('should return state count', () => {
    expect(selectTodos({todos: 'ABC'})).toBe('ABC');
  });
});