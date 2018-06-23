import { LETTER_NUMBER } from './types';

export const nextLetter = letterNumber => {
  letterNumber++;
  return {
    type: LETTER_NUMBER,
    payload: letterNumber
  };
};
