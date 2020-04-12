import * as actionTypes from "../actions/actionTypes";

// actions send requests to this reducer
const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      newState = state + action.payload;
      return newState;
    case actionTypes.DECREASE_COUNTER:
      newState = state - action.payload;
      return newState;
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      newState = state + action.payload;
      return newState;
    default:
      return state;
  }
};

export default counterReducer;