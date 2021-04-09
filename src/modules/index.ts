import { combineReducers } from 'redux';
import myPage, { Welcome } from './myPage';
import { initialState } from '../reducers/initialState';
import poemReducer from '../reducers/poemReducer';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default combineReducers({
  myPage,
  poemReducer,
});

export type RootState = { myPage: Welcome; poemReducer: initialState };
});