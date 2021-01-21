<template>
  <div class="test8">
    <p>axios错误处理</p>
  </div>
</template>

<script>
import axios from 'axios' 
export default {
  name: 'test8',
  components: {
    
  },
  created(){
    axios.interceptors.request.use(
      config=>{
        return config;
      },err=>{
        return Promise.reject(err)
      }
    )
    axios.interceptors.response.use(
      res=>{
        return res
      },err=>{
        return Promise.reject(err)
      }
    )

    axios.get('./data.json').then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    //统一的错误处理
    let instance = axios.create({});
    instance.interceptors.request.use(
      config=>{
        return config
      },err=>{
        //请求错误 常见：401超时 404 not foud
        $('#modal').show()
        setTimeout(()=>{
           $('#modal').hide()
        },2000)
        return Promise.reject(err)
      }
    )
    instance.interceptors.response.use(
      res=>{
        return res
      },err=>{
        $('#modal').show()
        setTimeout(()=>{
           $('#modal').hide()
        },2000)
        //响应错误处理 常见：500系统错误 502系统重启
        return Promise.reject(err)
      }
    )
    //错误需要单独处理地话添加catch
    axios.get('./data.json').then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }

  
}
</script>
