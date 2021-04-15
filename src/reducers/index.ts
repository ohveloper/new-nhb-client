import { combineReducers } from 'redux';
import poemReducer, { poemInitState } from './poemReducer';
import reducer from './reducer';
import { InitState } from './reducer';

const rootReducer = combineReducers({
  poemReducer,
  reducer,
});

export default rootReducer;
export type RootState = {
  poemReducer: poemInitState;
  reducer: InitState;
};
