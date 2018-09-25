import { combineReducers } from 'redux';
import uuidv1 from 'uuid/v1';

export const loading = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.bool;
    default:
      return state;
  }
};

export const addresses = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      return [
        ...state,
        {
          id: uuidv1(),
          ...action.data,
        },
      ];
    case 'REMOVE_ADDRESS':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

const reducers = combineReducers({
  addresses,
  loading,
});

export default reducers;
