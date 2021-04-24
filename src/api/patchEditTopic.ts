import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface patchEditTopicTPrams {
  topicId: number;
  word: string;
}

export async function patchEditTopicT(
  patchEditTopicTPrams: patchEditTopicTPrams,
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
  const response = await apiClient.patch('/admin/topic', patchEditTopicTPrams);
  return response.data;
}
