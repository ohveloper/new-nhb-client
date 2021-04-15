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

export interface CommentCommnetId {
  comment: string;
  commentId: number;
}

export async function patchEditCommentT(commentCommnetId: CommentCommnetId) {
  const response = await apiClient.patch('/feed/comment', commentCommnetId);
  return response.data;
}
