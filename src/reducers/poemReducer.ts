import {
  CREATE_POEM,
  MODIFY_POEM,
  REMOVE_POEM,
  GET_ALL_FEEDS,
} from '../actions/actionTypes';
import { PoemActions } from '../actions';
import { initialState } from './initialState';

// interface initialState {
//   feed?: poemType;
// }

// const initialState: initialState = {};

// const poemReducer = (
//   state = initialState,
//   action: poemDispatchType
// ): initialState => {
//   switch (action.type) {
//     case CREATE_POEM:
//       // eslint-disable-next-line no-case-declarations
//       const { data } = action.payload;
//       return {
//         ...state,
//         feed: { data },
//       };
//     case MODIFY_POEM:
//     case REMOVE_POEM:
//     default:
//       return state;
//       break;
//   }
// };

//?--------------------WITH DUMMY DATA---------------------//
// 상태에서 사용할 데이터 타입
// export type Poem = {
//   id: number;
//   content: string;
//   word: string;
// };

function poemReducer(
  state: initialState = initialState,
  action: PoemActions
): initialState {
  switch (action.type) {
    case CREATE_POEM:
      // eslint-disable-next-line no-case-declarations
      return {
        ...state,
        newFeed: action.payload.newFeed,
      };
    case GET_ALL_FEEDS:
      return {
        ...state,
        userFeeds: action.payload.userFeeds,
      };

    default:
      return state;
  }
}

export default poemReducer;
