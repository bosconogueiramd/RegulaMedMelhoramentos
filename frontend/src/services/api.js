import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const registerUser = async (user) => {
  const response = await axios.post(`${API_URL}/register`, user);
  return response.data;
};

export const loginUser = async (user) => {
  const response = await axios.post(`${API_URL}/login`, user);
  return response.data;
};

export const getUsers = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteUser = async (id) => {
  const token = localStorage.getItem('token');
  const response = await axios.delete(`${API_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateUser = async (id, user) => {
  const token = localStorage.getItem('token');
  const response = await axios.put(`${API_URL}/users/${id}`, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getStepsContent = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/steps`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateStepContent = async (step, content) => {
  const token = localStorage.getItem('token');
  const response = await axios.put(`${API_URL}/steps/${step}`, { content }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getStepById = async (id) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/steps/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getUserById = async (id) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
