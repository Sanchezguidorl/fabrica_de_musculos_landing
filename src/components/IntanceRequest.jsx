import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-fabrica-de-musculos.vercel.app'
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default instance;