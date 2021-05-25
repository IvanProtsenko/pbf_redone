import Axios from 'axios';

const axios = Axios.create({
    baseURL: "http://localhost:8102"
});

export default axios;