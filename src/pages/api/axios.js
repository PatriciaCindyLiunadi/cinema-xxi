import axios from 'axios';

export default axios.create({
    baseURL: 'https://dummyjson.com/auth/login'
});