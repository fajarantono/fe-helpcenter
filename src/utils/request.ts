import axios from 'axios';

const request = axios.create({
  baseURL: '/api/v1/', // api dari base_url
  timeout: 30 * 1000, // request timeout
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export { request };