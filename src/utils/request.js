import axios from 'axios'

const request = axios.create({
    baseURL: 'http://api-toutiao-web.itheima.net'
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (user) {
        config.headers.Authorization = `Bearer ${user.token}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default request