import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://466x4ag9y8.execute-api.us-east-1.amazonaws.com'
});


export default instance;