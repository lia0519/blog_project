import axios from "axios";
import {useAuthStore} from "../stores/useAuthStore"

export const axiosInstance = axios.create({
    baseURL: "http://113.198.66.75:18099",
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
});
