<template>
  <div class="test2">
    <p>axios请求方法：get,post,put,patch,delete</p>
    <p>get:获取数据</p>
    <p>post:提交数据（表单提交+文件上传）</p>
    <p>put:更新数据（所有数据推送到后端）</p>
    <p>patch:更新数据（只推送修改的数据）</p>
    <p>delete:删除数据</p>
  </div>
</template>

<script>
import axios from 'axios' 
export default {
  name: 'test2',
  components: {
    
  },
  created(){
    axios.get('/data.json',{params:{id:12}}).then((res)=>{
      console.log(res)
    });
    axios({
        method: 'get',
        url: '/data.json',
        params: {id:12}
    }).then((res)=>{
      console.log(res)
    });
    let data = {
      id: 12
    }
    //post content-type
    //form-data 用于表单提交（图片文件上传）
    //application/json 常见交互模式
    axios.post('/post',data).then((res)=>{
      console.log(res)
    });
    axios({
      method:'post',
      url: '/post',
      data: data
    }).then(res=>{
      console.log(res)
    });
    //form-data请求
    let formData = new FormData()
    for(let key in data){
      formData.append(key,data[key]);
    }
    axios.post('/post',formData).then((res)=>{
      console.log(res)
    });
    //put
    axios.put('/put',data).then((res)=>{
      console.log(res)
    });
     //patch
    axios.patch('/patch',data).then((res)=>{
      console.log(res)
    });
    //delete
    axios.delete('/delete',{
      params:{
        id:12
      }
    }).then((res)=>{
      console.log(res)
    });
    axios.delete('/delete',{
      data:{
        id:12
      }
    }).then((res)=>{
      console.log(res)
    });
  }
}
</script>
