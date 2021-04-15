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
export interface FeedId {
  data: {
    feedId: number;
  };
}

export async function delRemoveFeedT(feedId: FeedId) {
  const response = await apiClient.delete('/feed', feedId);
  return response.data;
}
