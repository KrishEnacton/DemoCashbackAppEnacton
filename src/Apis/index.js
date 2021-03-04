import axios from 'axios';
import { base_url } from './config';

export default api = axios.create({
    baseURL: `${base_url}`,
    headers: {
        local: 'en'
    },
});