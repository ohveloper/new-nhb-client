import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface Content {
  content: string[];
  word: string;
}
export interface FeedId {
  data: {
    feedId: number;
  };
}

export interface EditFeed {
  message: string;
}

export async function patchEditFeedT(
  content: Content,
  feedId: FeedId,
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
  const response = await apiClient.patch<EditFeed>('/feed', content, feedId);
  return response.data;
}
