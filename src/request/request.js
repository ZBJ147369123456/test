import axios from 'axios'

export function request(config) {
    //1.创建axios实例
  const instance = axios.create({
    baseURL:'https://api.apiopen.top',
    timeout:5000
  })
  //2.请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err =>{
    return err
  })

  instance.interceptors.response.use(response =>{
    return response.data
  }, err => {
    return err
  })
  //3.返回值
  return instance(config);
}
