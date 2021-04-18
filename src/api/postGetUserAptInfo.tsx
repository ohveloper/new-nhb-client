import axios from 'axios';
import dotenv from 'dotenv';
import { Apt } from '../reducers/reducer';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface postGetUserAptInfoTProps {
  userId: number;
}

export async function postGetUserAptInfoT(userId: postGetUserAptInfoTProps) {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

  const response = await apiClient.post<Apt>('/user/apt', userId);
  return response.data;
}
