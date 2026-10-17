import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

// Fail with a clear message when the environment is not configured.
api.interceptors.request.use((config) => {
  if (!baseURL) {
    return Promise.reject(
      new Error('VITE_API_URL is not set. Copy client/.env.example to client/.env and restart the dev server.')
    );
  }
  return config;
});

// Turn any failure into an Error with a readable message and optional field errors.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { data, status } = error.response;
      const err = new Error(data?.message || 'Something went wrong. Please try again.');
      err.status = status;
      err.fieldErrors = data?.errors || [];
      return Promise.reject(err);
    }
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('The request timed out. Please try again.'));
    }
    if (error.request) {
      return Promise.reject(new Error('Cannot reach the server. Check your connection and try again.'));
    }
    return Promise.reject(error);
  }
);

export default api;
