import { AxiosResponse } from 'axios'
type Data = AxiosResponse['data']
/**
 *
 * 对返回的data处理的hook
 * @export
 * @param {Object} data 返回的data
 * @return {Object} data 返回的data
 */
export default function (data : Data) : Data {
    return data;
}
