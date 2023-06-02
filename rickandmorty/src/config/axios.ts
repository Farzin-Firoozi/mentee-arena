import axios, { AxiosError } from "axios";

import config from ".";

const axiosHandler = axios
    .create({
        baseURL: config.api.url
    })

axiosHandler.interceptors.response.use(undefined, (error: AxiosError) => {
    
    return Promise.reject(error.response?.data);
})

export default axiosHandler