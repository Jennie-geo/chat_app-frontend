import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:8887/api/v1',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
})
Api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (!config.headers) {
        throw new Error("expected config and config.headers not to be undefined");
    }
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
});

export default Api