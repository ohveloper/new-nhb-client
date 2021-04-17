import axios from 'axios';
import dotenv from 'dotenv';
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

export interface Email {
  email: string;
}
export async function postSendAuthEmailT(email: Email) {
  const response = await apiClient.post('/main/authemail', email);
  return response.data;
}
