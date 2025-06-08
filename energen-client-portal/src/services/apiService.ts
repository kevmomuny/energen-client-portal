import axios from 'axios';
import { logout } from './authService'; // Import logout to handle token expiration or 401 errors

const API_BASE_URL = 'https://mobile-bid-tool-888909920.development.catalystserverless.com/server/';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add JWT token to headers
apiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors, e.g., 401 Unauthorized
apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token might be expired or invalid
      console.error('Unauthorized request (401). Logging out.');
      logout(); // Call logout from authService
      // Optionally redirect to login page
      // window.location.href = '/login'; // This might be too abrupt, consider app-level handling
    }
    return Promise.reject(error);
  }
);

export default apiService;
