import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASEURL, // 设置请求的baseURL
});
axios.defaults.withCredentials=false;
// 添加请求拦截器
http.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // 例如，在请求头中加入token
  config.headers['runkey'] ='7cu4PdMqVOk3uEnizfr7KGw4GFzITfH6';
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response;
}, error => {
  // 对响应错误做点什么
  // 例如，如果请求的状态为401，则跳转到登录页
  return Promise.reject(error);
});

export default http;