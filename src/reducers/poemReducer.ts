import { stat } from 'node:fs';
import {
  CREATE_POEM,
  MODIFY_POEM,
  REMOVE_POEM,
  poemType,
  poemDispatchType,
} from '../actions/actionTypes';
// import { initialState } from './initialState';

interface initialState {
  feed?: poemType;
}

const initialState: initialState = {};

const poemReducer = (
  state = initialState,
  action: poemDispatchType
): initialState => {
  switch (action.type) {
    case CREATE_POEM:
      const { data } = action.payload;
      return {
        ...state,
        feed: { data },
      };
    case MODIFY_POEM:
    case REMOVE_POEM:
    default:
      return state;
      break;
  }
};
export default poemReducer;
