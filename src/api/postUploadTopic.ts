import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface postUploadTopicTPrams {
  expiration: string;
  word: string;
}

export async function postUploadTopicT(
  postUploadTopicTPrams: postUploadTopicTPrams,
  accessToken: string
) {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
  const response = await apiClient.post('/admin/topic', postUploadTopicTPrams);
  return response.data;
}
