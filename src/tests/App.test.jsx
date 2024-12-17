import { initializeTimes, updateTimes, availableTimesReducer } from '../App';  // Import your initializeTimes function

test('initializeTimes should return the correct initial times array', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const result = initializeTimes(); // Call the function
  expect(result).toEqual(expectedTimes); // Assert the result matches the expected times
});

describe('updateTimes function', () => {
  test('updateTimes dispatches the correct action', () => {
    const dispatch = jest.fn(); // Mock dispatch
    const date = '2024-12-17';

    updateTimes(dispatch, date); // Call the refactored function

    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', date }); // Assert dispatch was called correctly
  });
});

describe('availableTimesReducer', () => {
  test('should return the same value as provided in the state when UPDATE_TIMES is dispatched', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE_TIMES', date: '2024-12-17' };

    const updatedState = availableTimesReducer(initialState, action);

    // Validate that the reducer returns the correct updated state
    const expectedState = ['17:00', '18:00', '19:30', '20:00', '21:00', '22:00'];
    expect(updatedState).toEqual(expectedState);
  });

  test('should return the initial state for an unknown action type', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UNKNOWN_ACTION' };

    const updatedState = availableTimesReducer(initialState, action);

    // Validate that the state remains unchanged for unknown actions
    expect(updatedState).toEqual(initialState);
  });
});
