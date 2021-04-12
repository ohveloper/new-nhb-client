//? --------------------Action Types----------------------//
//? POEM ACTIONS
export const CREATE_POEM = 'CREATE_POEM' as const;
export const MODIFY_POEM = 'MODIFY_POEM' as const;
export const REMOVE_POEM = 'REMOVE_POEM' as const;
export const GET_ALL_FEEDS = 'GET_ALL_FEEDS' as const;

//? ---------------Action Type의 타입 정의-----------------//
//? POEM ACTIONS
// export type poemType = {
//   data: poemCreateData;
// };
// export type poemCreateData = {
//   data: {
//     userFeeds: {
//       id: {
//         user: {
//           userId: string;
//           nickName: string;
//           tag: string;
//         };
//         topic: string;
//         content: string;
//         likes: number;
//         comments: number;
//         createdAt: Date;
//         updatedAt: Date;
//       };
//     };
//   };
//   message: 'ok';
// };

// export const poemModifyData = {};
// export const poemRemoveData = {};

// export interface createPoemDispatch {
//   type: typeof CREATE_POEM;
//   payload: { data: poemCreateData };
// }

// export interface modifyPoemDispatch {
//   type: typeof MODIFY_POEM;
// }

// export interface removePoemDispatch {
//   type: typeof REMOVE_POEM;
// }

// export type poemDispatchType =
//   | createPoemDispatch
//   | modifyPoemDispatch
//   | removePoemDispatch;

//?--------------------WITH DUMMY DATA---------------------//
//? POEM ACTIONS
export interface createPoemDispatch {
  type: typeof CREATE_POEM;
  payload: {
    content: string;
    word: string;
  };
}
export interface modifyPoemDispatch {
  type: typeof MODIFY_POEM;
  payload: {
    id: number;
    content: string;
  };
}
export interface removePoemDispatch {
  type: typeof REMOVE_POEM;
  payload: { id: number };
}

export interface getUserFeedsDispatch {
  type: typeof GET_ALL_FEEDS;
}
