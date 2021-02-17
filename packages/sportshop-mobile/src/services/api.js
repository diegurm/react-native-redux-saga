import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/diegurm/demo-api',
});

export default api;
