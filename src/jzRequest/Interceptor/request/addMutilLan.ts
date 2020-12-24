import { AxiosError, AxiosRequestConfig } from 'axios';
import { isAbsoluteURL } from '../../utils';
const lanCodeList = [
    'cn',
    'en',
    'tcn',
    'jp',
    'kor',
    'lo',
    'th',
    'es',
    'ru',
    'fra',
    'it',
    'de',
    'ug',
];
export default {
    /**
     * 自动拼接多语言
     * @param  { AxiosRequestConfig } config config
     * @return { AxiosRequestConfig } config
     */
    onFulfilled(config: AxiosRequestConfig): AxiosRequestConfig {
        let lancode = '';
        // url含有多语言路径，取出多语言前缀
        const {pathname} = window.location;
        lanCodeList.forEach((lanCodeItem) => {
            if (pathname.includes(`/${lanCodeItem}/`)) {
                lancode = lanCodeItem;
            }
        });
        // url不是绝对路径，拼接多语言前缀
        if (lancode && !isAbsoluteURL(config.url) && config.url) {
            config.url = `/${lancode}/${config.url.replace(/^\/+/, '')}`;
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
