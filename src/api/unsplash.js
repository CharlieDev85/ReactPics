import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID 131bf192d653ab58b1aaf06a68c1ca0e6b416079496740606c15131cfa40bb26' }
});