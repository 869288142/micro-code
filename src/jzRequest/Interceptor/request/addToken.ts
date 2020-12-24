import { AxiosError, AxiosRequestConfig } from 'axios';
import { inBrowser } from '../../utils';
export default {
    /**
     * 业务自动携带token
     * @param  { AxiosRequestConfig } config config
     * @return { AxiosRequestConfig } config
     */
    onFulfilled(config: AxiosRequestConfig): AxiosRequestConfig {
        const { params } = config;

        let token = null;
        // 处理同构请求
        if (inBrowser()) {
            const tokenMeta = document.getElementById('_TOKEN');
            token = tokenMeta && tokenMeta.getAttribute('value');
        }
        params._TOKEN = token;

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
