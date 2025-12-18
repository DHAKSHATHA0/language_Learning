// Frontend API Service - Centralized API calls
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get token from localStorage
const getToken = () => localStorage.getItem('token');

// Helper function to make API calls
const apiFetch = async (endpoint, options = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add authorization header if token exists
  const token = getToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        message: data.message || 'API Error',
        data,
      };
    }

    return data;
  } catch (error) {
    console.error(`API Error on ${endpoint}:`, error);
    throw error;
  }
};

// ===== AUTH ENDPOINTS =====
export const authAPI = {
  signup: (name, email, password) =>
    apiFetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    }),

  login: (email, password) =>
    apiFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
};

// ===== USER ENDPOINTS =====
export const userAPI = {
  getProfile: () => apiFetch('/users/me'),

  updateProfile: (updates) =>
    apiFetch('/users/me', {
      method: 'PUT',
      body: JSON.stringify(updates),
    }),

  registerCourse: (name, color) =>
    apiFetch('/users/me/register', {
      method: 'POST',
      body: JSON.stringify({ name, color }),
    }),

  updateProgress: (courseName, progress) =>
    apiFetch(`/users/me/courses/${courseName}/progress`, {
      method: 'PUT',
      body: JSON.stringify({ progress }),
    }),

  syncCourses: (registeredCourses) =>
    apiFetch('/users/me/sync-courses', {
      method: 'POST',
      body: JSON.stringify({ registeredCourses }),
    }),

  getCourseUsers: (courseName) =>
    apiFetch(`/users/courses/${courseName}/users`),
};

// ===== COURSE ENDPOINTS =====
export const courseAPI = {
  getAllCourses: () => apiFetch('/courses'),

  getCourse: (courseName) => apiFetch(`/courses/${courseName}`),
};
