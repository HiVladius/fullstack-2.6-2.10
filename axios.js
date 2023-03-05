import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Cambia esta URL según tu proyecto
  timeout: 1000,
});

export default axiosInstance;
