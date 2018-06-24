import {
  LETTER_NUMBER,
  LOOSE_HEART,
  GOOD_ANSWER,
  NEXT_WORD,
  WORD_NUMBER,
  ADD_LETTER,
  PLAY
} from '../actions/types';

const INITIAL_STATE = {
  heart: 3,
  list: [{ fr: 'Bonjour', eng: 'Good morning' }, { fr: 'Salut', eng: 'Hi' }],
  propositions: [
    { letter: 'o' },
    { letter: 'j' },
    { letter: 'o' },
    { letter: 'B' },
    { letter: 'n' },
    { letter: 'r' },
    { letter: 'u' },
    { letter: 'a' },
    { letter: 'n' }
  ],
  letters: [],
  wordNumber: 0,
  letterNumber: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        list: action.payload.list,
        propositions: action.payload.propositions
      };
    case LOOSE_HEART:
      return { ...state, heart: action.payload };
    case ADD_LETTER:
      return {
        ...state,
        list: action.payload.list,
        letters: action.payload.letters,
        letterNumber: action.payload.letterNumber
      };
    case NEXT_WORD:
      return {
        ...state,
        letters: [],
        wordNumber: action.payload.wordNumber,
        list: action.payload.list,
        propositions: action.payload.propositions
      };
    default:
      return state;
  }
};
