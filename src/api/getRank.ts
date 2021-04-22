import axios from 'axios';
import dotenv from 'dotenv';
import { Data } from '../reducers/reducer';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

const apiClient = axios.create({
  baseURL: api,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export async function getRankT() {
  const response = await apiClient.get<Data>('/feed/rank');
  return response.data;
}
