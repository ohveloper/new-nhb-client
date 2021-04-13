import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

const apiClient = axios.create({
  baseURL: api,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'withCredentials': true,
    'authorization':
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE4Mjg4ODM0LCJleHAiOjE2MTgzMDY4MzR9.t03w_OsLusXuBoZZn2j7OLWi6dfWPrGGem6RkQx7Wkg',
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
