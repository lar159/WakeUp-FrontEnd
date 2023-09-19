import axios from "axios";

// const url = import.meta.env.VITE_URL_BACKEND
// url ? url :
const instance = axios.create({
  baseURL: 'https://localhost:3001/api',
  timeout: 1000,
  headers: { 'content-type': 'application/json' }
});

export default instance;

