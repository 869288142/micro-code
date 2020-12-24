import { AxiosRequestConfig } from 'axios'
type Data = AxiosRequestConfig['data']
/**
 *
 * 对请求的body数据data的hook
 * @export
 * @param {Object} data 请求的body数据
 * @return {Object} data 请求的body数据
 */
export default function (data : Data) : Data {
    return data;
}
