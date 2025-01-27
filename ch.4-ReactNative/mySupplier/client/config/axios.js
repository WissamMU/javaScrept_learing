import axios from 'axios';
import { API_URL } from '@env';

// Create a new instance of axios with baseURL set to the API URL.
const instance = axios.create({
    baseURL: API_URL
})

export default instance;