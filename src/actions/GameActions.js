import {
  LETTER_NUMBER,
  LOOSE_HEART,
  ADD_LETTER,
  NEXT_WORD,
  PLAY
} from './types';

const ALPHABET = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
const LIST = [
  { fr: 'bonjour', eng: 'good morning' },
  { fr: 'salut', eng: 'hi' }
];
const PROPOSITIONS = [
  { letter: 'a' },
  { letter: 'b' },
  { letter: 'o' },
  { letter: 'B' },
  { letter: 'b' },
  { letter: 'r' },
  { letter: 'x' },
  { letter: 'y' },
  { letter: 'z' }
];
export const nextLetter = letterNumber => {
  letterNumber++;
  return {
    type: LETTER_NUMBER,
    payload: letterNumber
  };
};

export const nextWord = (wordNumber, list, lang) => {
  var word, propositions, nb, arrayA, alea;
  var word = list[wordNumber][lang];
  wordNumber++;
  propositions = word.split('');
  nb = Math.round(propositions.length * 0.4);
  for (i = 0; i < nb; i++) {
    alea = Math.random();
    propositions.push(ALPHABET[Math.round(alea * ALPHABET.length)]);
  }
  propositions = shuffle(propositions);
  return {
    type: NEXT_WORD,
    payload: {
      wordNumber: wordNumber,
      list: list,
      propositions: propositions
    }
  };
};
export const looseHeart = heart => {
  heart--;
  return {
    type: LOOSE_HEART,
    payload: heart
  };
};
export const addLetter = (letterNumber, letter, letters, wordNumber, list) => {
  letters[letterNumber] = letter;
  letterNumber++;
  return {
    type: ADD_LETTER,
    payload: {
      list,
      letters,
      letterNumber
    }
  };
};
export const play = lang => {
  var word, propositions, nb, arrayA, alea;
  var word = LIST[0][lang];
  propositions = word.split('');
  nb = Math.round(propositions.length * 0.4);
  for (i = 0; i < nb; i++) {
    alea = Math.random();
    propositions.push(ALPHABET[Math.round(alea * ALPHABET.length)]);
  }
  propositions = shuffle(propositions);
  return {
    type: PLAY,
    payload: {
      list: LIST,
      propositions
    }
  };
};
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
