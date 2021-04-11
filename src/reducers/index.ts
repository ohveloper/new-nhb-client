import { combineReducers } from 'redux';
import poemReducer from './poemReducer';
import getInfoReducer from './getInfoReducer';
import { initialState } from './initialState';
import reducer from './reducer';
import { UserInfoState } from './reducer';

const rootReducer = combineReducers({
  poemReducer,
  getInfoReducer,
  reducer,
});

export default rootReducer;
export type RootState = {
  getInfoReducer: initialState;
  poemReducer: initialState;
  reducer: UserInfoState;
};
