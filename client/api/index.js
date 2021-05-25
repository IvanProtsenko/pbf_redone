import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: "http://localhost:8102"
});
apiInstance.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export default {
    async getFib() {
        return await apiInstance.get(`/cur`);
    },
    async nextFib() {
        return await apiInstance.get(`/next`);
    },
    async toBegin() {
        return await apiInstance.post(`/begin`);
    }
}