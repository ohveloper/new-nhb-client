import { combineReducers } from 'redux';
import reducer from './reducer';
import { InitState } from './reducer';

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
export type RootState = {
  reducer: InitState;
};
