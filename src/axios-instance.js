import axios from 'axios';

const instance = axios.create({
     baseURL: 'https://mailer-api-app.herokuapp.com/api/v1'
     //baseURL: 'http://localhost:3333/api/v1/'
});

export default instance;