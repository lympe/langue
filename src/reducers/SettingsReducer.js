import { CHANGE_LANG } from '../actions/types';

const INITIAL_STATE = {
  lang: 'fr',
  langLearn: 'eng'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};
