import { AxiosRequestConfig, AxiosInterceptorManager, AxiosResponse, AxiosInstance, CancelStatic, CancelTokenStatic } from 'axios';
interface RequestConfig extends AxiosRequestConfig{
  suffix? : string
  prefix? : string
  isShowWholeResponse?: boolean
}
interface AxiosInterceptorUse<T>{
  onFulfilled : Parameters<AxiosInterceptorManager<T>['use']>[0]
  onRejected : Parameters<AxiosInterceptorManager<T>['use']>[1]
}

type RequestInterceptor = AxiosInterceptorUse<AxiosRequestConfig>

type ResponseInterceptor = AxiosInterceptorUse<AxiosResponse>

interface RequestAdapter extends AxiosInstance {
  Cancel?: CancelStatic
  CancelToken?: CancelTokenStatic
  isCancel?(value: any): boolean
}
export {
  RequestConfig,
  RequestInterceptor,
  RequestAdapter,
  ResponseInterceptor
}
