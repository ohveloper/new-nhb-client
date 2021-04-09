import { combineReducers } from 'redux';
import poemReducer from './poemReducer';
import getInfoReducer from './getInfoReducer';
import { Welcome } from '../actions/getInfoTypes';

const rootReducer = combineReducers({
  poemReducer,
  getInfoReducer,
});

export default rootReducer;
export type RootState = { getInfoReducer: Welcome };
