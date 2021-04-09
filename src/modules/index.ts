import { combineReducers } from 'redux';
import myPage, { Welcome } from './myPage';

export default combineReducers({
  myPage,
});

export type RootState = { myPage: Welcome };
