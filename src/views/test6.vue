<template>
  <div class="test6">
    <p>axios实例</p>
  </div>
</template>

<script>
import axios from 'axios' 
export default {
  name: 'test6',
  components: {
    
  },
  created(){
    axios.create({
        baseURL: "http://localhost:8080",
        timeout:1000,
        url: '/data.json',
        method: 'get', //get post put patch delete
        headers:{
            token: ''
        },
        params:{}, //get拼接到url上
        data:{}, //post放在请求体中
    });

    // 1.axios全局配置
    axios.defaults.timeout = 1000;
    axios.defaults.baseURL = "http://localhost:8080";
    // 2.axios实例配置
    let instance = axios.create({
        baseURL: "http://localhost:8080",
        timeout:1000,
    });
    instance.defaults.timeout = 2500;
    //请求配置
    instance.get('./data.json',{
        timeout:5000
    })

    //实际开发
    let insrance = axios.create({
        baseURL:'http://localhost:9090',
        timeout:1000
    });
    let insrance = axios.create({
        baseURL:'http://localhost:9091',
        timeout:3000
    });

  }
}
</script>
