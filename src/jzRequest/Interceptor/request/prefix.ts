import { AxiosError } from 'axios';
import type { RequestConfig} from '../../interface/Request'
export default {
    /**
     * 后缀处理
     * @param  { AxiosRequestConfig } config config
     * @return { AxiosRequestConfig } config
     */
    onFulfilled(config:RequestConfig): RequestConfig {
        const { prefix, url } = config;

        if (prefix) {
            config.url = `${url}${prefix}`;
        }

        return config;
    },
    /**
     * 默认错误处理
     * @param {AxiosError} error AxiosError
     * @return {Promise<AxiosError>} AxiosError
     */
    onRejected(error: AxiosError) : Promise<AxiosError> {
        return Promise.reject(error);
    },
};
