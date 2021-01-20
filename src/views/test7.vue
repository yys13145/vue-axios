<template>
  <div class="test7">
    <p>axios拦截器</p>
  </div>
</template>

<script>
import axios from 'axios' 
export default {
  name: 'test7',
  components: {
    
  },
  created(){
    //请求拦截器
    axios.interceptors.request.use(
      config=>{
        //在发送请求前做些什么
        return config
      },err=>{
        //在请求错误时
        return Promise.reject(err)
      }
    );
    //响应拦截器
    axios.interceptors.response.use(
      res=>{
        //在发送请求前做些什么
        return res
      },err=>{
        //在请求错误时
        return Promise.reject(err)
      }
    )
    //取消拦截器
    let myInterceptors = axios.interceptors.request.use(
      config =>{
        config.headers = {
          auth: true
        }
        return config
      }
    );
    axios.interceptors.request.reject(myInterceptors);

    //例子 带token的登录状态
    let instance = axios.create({});
    instance.interceptors.request.use(
      config=>{
        config.headers.token = '';
        return config;
      }
    )
    //不需要登录的接口
    let newInstance = axios.create({});
    
    //移动端开发
    let instance_mobile = axios.create({});
    instance_mobile.interceptors.request.use(
      config=>{
        $('modal').show();
        return config
      }
    );
    instance_mobile.interceptors.response.use{
      res=>{
        $('modal').hide();
        return res
      }
    }
  }
}
</script>
