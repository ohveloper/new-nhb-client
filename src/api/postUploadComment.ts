import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';
const accessToken = process.env.AccessToken || 'hello';

const apiClient = axios.create({
  baseURL: api,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'withCredentials': true,
    'authorization': `Bearer ${accessToken}`,
  },
});
export interface CommentFeedId {
  feedId: number;
  comment: string;
}

export async function postUploadCommentT(commentFeedId: CommentFeedId) {
  const response = await apiClient.post('/feed/comment', commentFeedId);
  return response.data;
}
