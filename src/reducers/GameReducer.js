import { LETTER_NUMBER } from '../actions/types';

const INITIAL_STATE = {
  letterNumber: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LETTER_NUMBER:
      return { ...state, letterNumber: action.payload };
    default:
      return state;
  }
};
