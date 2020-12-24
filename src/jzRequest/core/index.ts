import axios from 'axios';
import { requestInterceptors, responseInterceptors } from '../Interceptor';
import { transformRequest, transformResponse } from '../transform';
import type { RequestInterceptor, RequestAdapter, ResponseInterceptor, RequestConfig } from '../interface/Request'
import { isArray } from '../utils'
/**
 *
 * 请求封装类
 * @class jzRequest
 */
class jzRequest {
    /**
     * Creates an instance of jzRequest.
     * @param {*} #api 符合规范的实现请求
     * @constructor
     * @memberof jzRequest
     */
    #api : RequestAdapter
    constructor(api : RequestAdapter) {
        /** @access private */
        this.#api = api;

        this.initRequestInterceptor(this.#api);
        this.initResponseInterceptor(this.#api);

        this.initTransformRequest(this.#api);
        this.initTransformResponse(this.#api);
    }
    /**
     *
     * 初始化请求拦截器
     * @param {*} #api 符合规范的实现请求
     * @memberof jzRequest
     */
    initRequestInterceptor(api : RequestAdapter) : void {
        requestInterceptors.forEach(({ onFulfilled, onRejected } :RequestInterceptor) => {
            api.interceptors.request.use(onFulfilled, onRejected);
        });
    }
    /**
     *
     * 初始化响应拦截器
     * @param {*} #api 符合规范的实现请求
     * @memberof jzRequest
     */
    initResponseInterceptor(api : RequestAdapter) : void {
        responseInterceptors.forEach(({ onFulfilled, onRejected } : ResponseInterceptor) => {
            api.interceptors.response.use(onFulfilled, onRejected);
        });
    }
    /**
     * 添加请求拦截器并返回此拦截器id
     * @param {*} { onFulfilled, onRejected }
     * @return {Number} 请求拦截器id
     * @memberof jzRequest
     */
    addRequestInterceptor({ onFulfilled, onRejected } : RequestInterceptor) : number {
        return this.#api.interceptors.request.use(onFulfilled, onRejected);
    }
    /**
     * 添加响应拦截器并返回此拦截器id
     * @param {*} { onFulfilled, onRejected }
     * @return {Number} 响应拦截器id
     * @memberof jzRequest
     */
    addResponseInterceptor({ onFulfilled, onRejected } : ResponseInterceptor): number {
        return this.#api.interceptors.response.use(onFulfilled, onRejected);
    }
    /**
     *  删除指定请求拦截器
     * @param {Number} id 请求拦截器id
     * @memberof jzRequest
     */
    clearRequestInterceptor(id : number): void {
        this.#api.interceptors.request.eject(id);
    }
    /**
     *  删除指定响应拦截器
     * @param {Number} id 响应拦截器id
     * @memberof jzRequest
     */
    clearResponseInterceptor(id : number): void {
        this.#api.interceptors.response.eject(id);
    }
    /**
     *
     * 初始化请求转化器
     * @param {*} #api 符合规范的实现请求
     * @memberof jzRequest
     */
    initTransformRequest(api : RequestAdapter) {
      if (isArray(api.defaults.transformRequest)) {
         api.defaults.transformRequest.unshift(transformRequest);
      }
    }
    /**
     *
     * 初始化响应转化器
     * @param {*} #api 符合规范的实现请求
     * @memberof jzRequest
     */
    initTransformResponse(api: RequestAdapter) {
      if (isArray(api.defaults.transformResponse)) {
        api.defaults.transformResponse.unshift(transformResponse);
     }
    }
    /**
     * request
     * @async
     * @param {AxiosRequestConfig} [config={}] 请求配置
     * @return {Promise<AxiosResponse>} 返回结果
     * @memberof jzRequest
     */
    request(config: RequestConfig) {
        const { isShowWholeResponse = false } = config;
        return this.#api.request(config).then((response) => {
            return isShowWholeResponse
                ? Promise.resolve(response)
                : Promise.resolve(response.data);
        });
    }
    /**
     * delete
     * @async
     * @param {String} url url
     * @param {AxiosRequestConfig} [config={}] 请求配置
     * @return {Promise<AxiosResponse>} 返回结果
     * @memberof jzRequest
     */
    delete(url: string, config = {}) {
        return this.request({
            method: 'delete',
            url,
            ...config,
        });
    }
    /**
     * get
     * @async
     * @param {String} url url
     * @param {AxiosRequestConfig} [config={}] 请求配置
     * @return {Promise<AxiosResponse>} 返回结果
     * @memberof jzRequest
     */
    get(url: string, config = {}) {
        return this.request({
            method: 'get',
            url,
            ...config,
        });
    }
    /**
     * head
     * @async
     * @param {String} url url
     * @param {AxiosRequestConfig} [config={}] 请求配置
     * @return {Promise<AxiosResponse>} 返回结果
     * @memberof jzRequest
     */
    head(url: string, config = {}) {
        return this.request({
            ...config,
            url,
        });
    }
    /**
     * options
     * @async
     * @param {String} url url
     * @param {AxiosRequestConfig} [config={}] 请求配置
     * @return {Promise<AxiosResponse>} 返回结果
     * @memberof jzRequest
     */
    options(url: string, config = {}) {
        return this.request({
            method: 'options',
            url,
            ...config,
        });
    }
    /**
     * post
     * @async
     * @param {String} url url
     * @param {AxiosRequestConfig} [config={}] 请求配置
     * @return {Promise<AxiosResponse>} 返回结果
     * @memberof jzRequest
     */
    post(url: string, config = {}) {
        return this.request({
            method: 'post',
            url,
            ...config,
        });
    }
    /**
     *
     * put
     * @async
     * @param {String} url url
     * @param {AxiosRequestConfig} [config={}] 请求配置
     * @return {Promise<AxiosResponse>} 返回结果
     * @memberof jzRequest
     */
    put(url: string, config = {}) {
        return this.request({
            method: 'put',
            url,
            ...config,
        });
    }
    /**
     *
     * patch请求
     * @async
     * @param {String} url url
     * @param {AxiosRequestConfig} [config={}] 请求配置
     * @return {Promise<AxiosResponse>} 返回结果
     * @memberof jzRequest
     */
    patch(url: string, config = {}) {
        return this.request({
            method: 'patch',
            url,
            ...config,
        });
    }
    /**
     *  获取取消token和cancel函数
     * @return {CancelTokenStatic} 取消token和cancel函数
     * @memberof jzRequest
     */
    getCancelToken(): any {
        const {CancelToken} = this.#api;
        if (CancelToken) {
          const source = CancelToken.source();
          return source;
        }
      }
    /**
     * 判断请求是否取消
     * @param {*} val 异常
     * @return {Boolean} boolean
     * @memberof jzRequest
     */
    isCancel(val: any): boolean | undefined {
        return this.#api.isCancel && this.#api.isCancel(val);
    }
    create() {
      return create()
    }
}
/**
 *
 * 创建一个请求实例
 * @instance
 * @return { jzRequest} jzRequest实例
 */
function create(): jzRequest {
    const axiosInstance: RequestAdapter = axios.create({});

    axiosInstance.CancelToken = axios.CancelToken;

    axiosInstance.isCancel = axios.isCancel;

    return new jzRequest(axiosInstance);
}


export default create();
