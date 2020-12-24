import { isObject, encode, forEach, isArray, isDate } from '../../utils';
import { AxiosError, AxiosRequestConfig } from 'axios';

export default {
    /**
     *  处理默认post的Content-Type和参数格式化
     *   ref: https://github.com/axios/axios/issues/1195
     * @param  { AxiosRequestConfig } config config
     * @return { AxiosRequestConfig } config
     */
    onFulfilled(config: AxiosRequestConfig): AxiosRequestConfig {
        let { data } = config;
        const { method } = config
        if (
            isObject(data) &&
            method === 'post' &&
            config.headers.post['Content-Type'] ===
                'application/x-www-form-urlencoded'
        ) {
            const parts: string [] = [];

            forEach(data, function serialize(val : unknown, key :string) {
                if (val === null || typeof val === 'undefined') {
                    return;
                }

                if (isArray(val)) {
                    key = `${key }[]`;
                } else {
                    val = [val];
                }

                forEach(val, function parseValue(v) {
                    if (isDate(v)) {
                        v = v.toISOString();
                    } else if (isObject(v)) {
                        v = JSON.stringify(v);
                    }
                    parts.push(`${encode(key) }=${ encode(v)}`);
                });
            });

            data = parts.join('&');

            config.data = data;
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
