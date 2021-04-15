import { combineReducers } from 'redux';
import poemReducer, { poemInitState } from './poemReducer';
import getInfoReducer from './getInfoReducer';
import { initialState } from './initialState';
import reducer from './reducer';
import { InitState } from './reducer';

const rootReducer = combineReducers({
  poemReducer,
  getInfoReducer,
  reducer,
});

export default rootReducer;
export type RootState = {
  getInfoReducer: initialState;
  poemReducer: poemInitState;
  reducer: InitState;
};
