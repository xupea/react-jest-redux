import { PORTFOLIO_LIST_SUCCESS } from '../constants/ActionTypes';

const initialState = {
  data: []
};

export default function dashboard(state = initialState, action) {
  switch(action.type) {
    case PORTFOLIO_LIST_SUCCESS:
      // return { ...state, data: action.body };
      return Object.assign({}, state, {
        data: action.body
      });
    default:
      return state;
  }
}