import axios from 'axios';

export const CREATE_POEM = 'CREATE_POEM';
export const MODIFY_POEM = 'MODIFY_POEM';
export const REMOVE_POEM = 'REMOVE_POEM';

const FEED_URL = 'http://localhost:3000/feed';

//? -------------------액션 생성 함수 ----------------------//
export function createPoem(content: string, word: string) {
  return async () => {
    const data = await axios
      .post(FEED_URL, { content, word })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
}
