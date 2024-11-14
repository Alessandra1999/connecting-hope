import axios from 'axios';
export const API_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_URL,
});

export async function httpGet(url) {
  try {
    const { data } = await api.get(`${API_URL}${url}`);
    return data;
  } catch (e) {
    console.log('HTTP GET Error: ', e);
    return undefined;
  }
}
