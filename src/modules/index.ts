import { combineReducers } from 'redux';
import myPage, { Welcome } from './myPage';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default combineReducers({
  myPage,
});

export type RootState = { myPage: Welcome };
