import { AxiosResponse, AxiosError } from 'axios';
export default {
    /**
     * 处理IE下responsedata异常的问题
     * ref: https://github.com/axios/axios/issues/1310
     * @param  { AxiosResponse } response httpResponse
     * @return { AxiosResponse } response
     */
    onFulfilled(response : AxiosResponse) : AxiosResponse {
        if (
            response.data == null &&
            response.config.responseType === 'json' &&
            response.request.responseText != null
        ) {
            try {
                response.data = JSON.parse(response.request.responseText);
            } catch (e) {}
        }
        return response;
    },
    /**
     * 默认错误处理
     * @param {AxiosError} error AxiosError
     * @return {Promise<AxiosError>} AxiosError
     */
    onRejected(error:AxiosError) : Promise<AxiosError> {
        return Promise.reject(error);
    },
};
