import axios from 'axios';
import { Dispatch } from 'redux';
import {
  poemDispatchType,
  CREATE_POEM,
  MODIFY_POEM,
  REMOVE_POEM,
} from './actionTypes';

const FEED_URL = 'http://54.173.92.145:5000/feed';

//? -------------------액션 생성 함수 ----------------------//
export const createPoem = (content: string, word: string) => async (
  dispatch: Dispatch<poemDispatchType>
) => {
  try {
    const result = await axios.post(FEED_URL, { content, word });
    const data = result.data;

    dispatch({
      type: CREATE_POEM,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const modifyPoem = (id: number, content: string) => async (
  dispatch: Dispatch<poemDispatchType>
) => {
  try {
    const result = await axios.patch(FEED_URL, { id, content });
    const data = result.data;
    dispatch({
      type: MODIFY_POEM,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removePoem = (id: number) => async (
  dispatch: Dispatch<poemDispatchType>
) => {
  try {
    const result = await axios.delete(FEED_URL, {
      data: {
        id: id,
      },
    });
    const data = result.data;
    dispatch({
      type: REMOVE_POEM,
      payload: data,
    });
  } catch (err) {
    //
  }
};
