import { fetchAPI } from '../api/api';
import { initializeTimes, updateTimes, availableTimesReducer } from '../App';

test('initializeTimes should return the correct initial times array', () => {
  const expectedTimes = fetchAPI(new Date());
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

describe('updateTimes function', () => {
  test('updateTimes dispatches the correct action', () => {
    const dispatch = jest.fn();
    const date = '2024-12-17';

    updateTimes(dispatch, date);

    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', date });
  });
});

describe('availableTimesReducer', () => {
  test('should return the same value as provided in the state when UPDATE_TIMES is dispatched', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const date_str = '2024-12-17'
    const action = { type: 'UPDATE_TIMES', date: date_str };

    const updatedState = availableTimesReducer(initialState, action);

    const expectedState = fetchAPI(new Date(date_str));
    expect(updatedState).toEqual(expectedState);
  });

  test('should return the initial state for an unknown action type', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UNKNOWN_ACTION' };

    const updatedState = availableTimesReducer(initialState, action);

    expect(updatedState).toEqual(initialState);
  });
});
