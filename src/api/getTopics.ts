import axios from 'axios';
import dotenv from 'dotenv';
import { Topics } from '../reducers/reducer';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export async function getTopicsT() {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

  const response = await apiClient.get<Topics>('/feed/topic');
  return response.data;
}
