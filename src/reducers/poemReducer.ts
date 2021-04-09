import { type } from 'node:os';
import { CREATE_POEM, MODIFY_POEM, REMOVE_POEM } from '../actions/actionTypes';
import { PoemAction } from '../actions/poemActions';
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
  action: PoemAction
): initialState {
  switch (action.type) {
    case CREATE_POEM:
      // eslint-disable-next-line no-case-declarations
      const { data } = action.payload;
      return {
        ...state,
        newFeed: action.payload.newFeed,
      };

    default:
      return state;
  }
}

export default poemReducer;
