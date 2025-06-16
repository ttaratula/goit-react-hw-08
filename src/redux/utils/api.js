import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export default axiosInstance;
