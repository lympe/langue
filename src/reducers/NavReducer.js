import { NAV } from '../actions/types';

const INITIAL_STATE = {
  view: 'List'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAV:
      return { ...state, view: action.payload };
    default:
      return state;
  }
};
