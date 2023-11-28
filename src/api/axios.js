import axios from 'axios';

axios.defaults.baseURL = 'https://www.goldapi.io/api/XAU/USD';
axios.defaults.withCredentials = true;

export const api_key = 'goldapi-47gnrlpim79s5-io';

export default axios;
