import { combineReducers } from 'redux';
import getInfo from './getInfo';

const rootReducer = combineReducers({
  getInfo,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
