import axios from "axios";
import {useAuthStore} from "../stores/useAuthStore"

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
});