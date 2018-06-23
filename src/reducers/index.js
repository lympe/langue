import { combineReducers } from 'redux';
import NavReducer from './NavReducer';
import GameReducer from './GameReducer';

export default combineReducers({
  nav: NavReducer,
  game: GameReducer
});
