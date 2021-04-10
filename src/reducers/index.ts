import { combineReducers } from 'redux';
import poemReducer from './poemReducer';
import getInfoReducer from './getInfoReducer';
import { initialState } from './initialState';

const rootReducer = combineReducers({
  poemReducer,
  getInfoReducer,
});

export default rootReducer;
export type RootState = {
  getInfoReducer: initialState;
  poemReducer: initialState;
};
