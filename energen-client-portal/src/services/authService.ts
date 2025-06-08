import apiService from './apiService'; // Will be used once apiService is set up

const API_BASE_URL = 'https://mobile-bid-tool-888909920.development.catalystserverless.com/server';

interface UserData {
  token: string;
  // Add other user properties as needed
}

// Placeholder login function
export const login = async (username?: string, password?: string): Promise<UserData> => {
  // Example usage with apiService:
  // const response = await apiService.post<UserData>('/auth/login', { username, password });
  // if (response.data.token) {
  //   localStorage.setItem('token', response.data.token);
  // }
  // return response.data;

  console.log('Attempting login with:', username, password); // Keep username and password for now
  // Replace with actual API call
  // For now, simulate API call and successful login
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'test' && password === 'password') {
        const fakeToken = 'fake-jwt-token';
        localStorage.setItem('token', fakeToken);
        resolve({ token: fakeToken });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });
  // Example with apiService (once it's configured)
  // const response = await apiService.post<UserData>('/auth/login', { username, password });
  // if (response.data.token) {
  //   localStorage.setItem('token', response.data.token);
  // }
  // return response.data;
};

// Placeholder logout function
export const logout = (): void => {
  localStorage.removeItem('token');
  // Add any other cleanup tasks, e.g., redirecting the user
  console.log('User logged out');
  // window.location.href = '/login'; // Or use navigate if called from a component
};

// Placeholder function to check if user is authenticated
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if token exists, false otherwise
};
