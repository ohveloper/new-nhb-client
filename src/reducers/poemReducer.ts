import { CREATE_POEM } from '../actions/actionTypes';
import { PoemActions } from '../actions';
import { initialState, UserFeed } from './initialState';

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

function poemReducer(
  state: UserFeed = initialState.userFeeds,
  action: PoemActions
): UserFeed {
  switch (action.type) {
    case CREATE_POEM:
      // eslint-disable-next-line no-case-declarations
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default poemReducer;
