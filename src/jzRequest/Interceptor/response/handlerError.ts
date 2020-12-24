import { AxiosResponse, AxiosError } from 'axios';
interface errMap {
   [key: string]: string
}
const errMap: errMap = {
    400: '请求错误(400)',
    401: '未授权，请重新登录(401)',
    403: '拒绝访问(403)',
    404: '请求路径不存在(404)',
    405: '不允许请求方法(405)',
    408: '请求超时(408)',
    414: 'URL长度超出(414)',
    500: '服务器错误(500)',
    501: '服务未实现(501)',
    502: '网络错误(502)',
    503: '服务不可用(503)',
    504: '网络超时(504)',
    505: 'HTTP版本不受支持(505)',
};

export default {
    /**
     * 处理网络错误
     * @param  { AxiosResponse } response httpResponse
     * @return { AxiosResponse } response
     */
    onFulfilled(response : AxiosResponse) : AxiosResponse {
        return response;
    },
    /**
     * 默认错误处理
     * @param {AxiosError} err AxiosError
     * @return {Promise<AxiosError>} AxiosError
     */
    onRejected(err: AxiosError) : Promise<AxiosError> {
        if (err && err.response) {
            err.message =
                errMap[err.response.status] ||
                `连接出错(${err.response.status})!`;
        } else {
            err.message = '连接服务器失败!';
        }
        return Promise.reject(err);
    },
};
