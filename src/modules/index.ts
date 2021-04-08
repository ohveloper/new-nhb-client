import { combineReducers } from 'redux';
import getInfo, { Welcome } from './getInfo';

export default combineReducers({
  getInfo,
});

export type RootState = { getInfo: Welcome };
