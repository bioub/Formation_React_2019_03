import { todoAdd } from "./actions";

describe('todoAdd()', () => {
  it('should add a new todo action', () => {
    Math.random = jest.fn();
    Math.random.mockReturnValue(0);

    const action = todoAdd('ABC');

    expect(action).toEqual({
      type: 'TODO_ADD',
      payload: {id: 0, text: 'ABC', completed: false}
    });
    expect(Math.random).toHaveBeenCalled();

    // restaurer l'ancienne fonction
    Math.random.mockRestore();
  });

  // Vérifier que Math.random ait bien été restaurée
  // it('should restore Math.random', () => {
  //   expect(Math.random()).not.toBe(0);
  // });
});