import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

// axiosInstance.interceptors.request.use(config => {
//     const token = ProfileService.getInstance().getAuthToken();
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
// });

// axiosInstance.interceptors.response.use(
//     response => {
//         return response;
//     },
//     (error: any) => {
//         // if (error?.response?.status === HTTP_FORBIDDEN || error.response.status === HTTP_UNAUTHORIZED) {
//         // }
//         return error.response;
//     }
// );

export default axiosInstance;
