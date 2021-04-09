import axios from 'axios';
import { Dispatch } from 'redux';
import { CREATE_POEM, MODIFY_POEM, REMOVE_POEM } from './actionTypes';
import { newFeed } from '../reducers/initialState';

const FEED_URL = 'https://server.sangraecho.com/feed';

//? -------------------액션 생성 함수 ----------------------//
// export const createPoem = (content: string, word: string) => async (
//   dispatch: Dispatch<poemDispatchType>
// ) => {
//   try {
//     const result = await axios.post(FEED_URL, { content, word });
//     const data = result.data;

//     dispatch({
//       type: CREATE_POEM,
//       payload: data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const modifyPoem = (id: number, content: string) => async (
//   dispatch: Dispatch<poemDispatchType>
// ) => {
//   try {
//     const result = await axios.patch(FEED_URL, { id, content });
//     const data = result.data;
//     dispatch({
//       type: MODIFY_POEM,
//       payload: data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const removePoem = (id: number) => async (
//   dispatch: Dispatch<poemDispatchType>
// ) => {
//   try {
//     const result = await axios.delete(FEED_URL, {
//       data: {
//         id: id,
//       },
//     });
//     const data = result.data;
//     dispatch({
//       type: REMOVE_POEM,
//       payload: data,
//     });
//   } catch (err) {
//     //
//   }
// };

//?--------------------WITH DUMMY DATA---------------------//
export const createPoem = (newFeed: newFeed) => ({
  type: CREATE_POEM,
  payload: {
    newFeed,
  },
});

// export const modifyPoem = (id: number, content: string) => ({
//   type: MODIFY_POEM,
//   payload: {
//     id,
//     content,
//   },
// });

// export const removePoem = (id: number) => ({
//   type: REMOVE_POEM,
//   payload: id,
// });

// 모든 액션객체의 타입
export type PoemAction = ReturnType<typeof createPoem>;
// | ReturnType<typeof modifyPoem>
// | ReturnType<typeof removePoem>;
