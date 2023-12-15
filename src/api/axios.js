import axios from 'axios';

axios.defaults.baseURL = `${import.meta.env.VITE_MAIN_URL}`;
axios.defaults.withCredentials = true;

export const api_key = `${import.meta.env.VITE_CLIENT_ID}`;

export default axios;
