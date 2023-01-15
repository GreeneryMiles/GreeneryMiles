import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/apis' });

export const getCoords = (formData) => API.post('/coordinates', formData);

export const getDistanceByAddress = (formData) => API.post('/distance_addr', formData);
