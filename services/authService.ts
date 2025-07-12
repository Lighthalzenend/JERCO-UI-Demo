
import apiService from './api';
import { User, UserRole } from '../types';

export interface LoginCredentials {
  identifier: string; // username or email
  password?: string; // Password might be optional for other auth methods in future
}

export interface RegisterData {
  username: string;
  email: string;
  password?: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // MOCK IMPLEMENTATION
  console.log('Attempting login with:', credentials);
  if ((credentials.identifier === 'user@example.com' || credentials.identifier === 'user') && credentials.password === 'password123') {
    return new Promise(resolve => setTimeout(() => resolve({ 
      token: 'fake-user-token-123', 
      user: { id: '1', username: 'TestUser', email: 'user@example.com', role: UserRole.CUSTOMER } 
    }), 500));
  }
  if ((credentials.identifier === 'admin@example.com' || credentials.identifier === 'admin') && credentials.password === 'adminpass') {
     return new Promise(resolve => setTimeout(() => resolve({ 
      token: 'fake-admin-token-456', 
      user: { id: '0', username: 'AdminUser', email: 'admin@example.com', role: UserRole.ADMIN } 
    }), 500));
  }
  return new Promise((_, reject) => setTimeout(() => reject(new Error('Invalid credentials')), 500));
  // return apiService<AuthResponse>('/auth/login', { method: 'POST', data: credentials });
};

export const register = async (userData: RegisterData): Promise<User> => {
  // MOCK IMPLEMENTATION
  console.log('Attempting registration for:', userData);
  if (userData.email === 'exists@example.com') {
    return new Promise((_, reject) => setTimeout(() => reject(new Error('Email already exists')), 500));
  }
  return new Promise(resolve => setTimeout(() => resolve({ 
    id: Math.random().toString(36).substring(7), 
    username: userData.username, 
    email: userData.email, 
    role: UserRole.CUSTOMER
  }), 500));
  // return apiService<User>('/auth/register', { method: 'POST', data: userData });
};

export const getMe = async (token: string): Promise<User> => {
  // MOCK IMPLEMENTATION
  console.log('Fetching current user with token:', token);
  if (token === 'fake-user-token-123') {
    return new Promise(resolve => setTimeout(() => resolve(
      { id: '1', username: 'TestUser', email: 'user@example.com', role: UserRole.CUSTOMER }
    ), 300));
  }
  if (token === 'fake-admin-token-456') {
     return new Promise(resolve => setTimeout(() => resolve(
      { id: '0', username: 'AdminUser', email: 'admin@example.com', role: UserRole.ADMIN }
    ), 300));
  }
  return new Promise((_, reject) => setTimeout(() => reject(new Error('Invalid token')), 300));
  // return apiService<User>('/auth/me', { method: 'GET', token });
};
