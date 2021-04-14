import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';
const accessToken = process.env.REACT_APP_ACCESS_TOKEN || 'hello';

console.log(api);
console.log(accessToken);
export interface CommentId {
  commentId: number;
}

export async function postLikeCommentT(commentId: CommentId) {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'withCredentials': true,
      'authorization': 'accessToken',
    },
  });
  const response = await apiClient.post('/feed/comment/like', commentId);
  return response.data;
}
