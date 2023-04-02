import { createStore } from 'redux';

const initialState = {
  appointments: [],
};

function appointmentReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return {};
    default:
      return state;
  }
}

const store = createStore();

export default store;
