<template>
  <div class="test5">
    <p>axios实例</p>
  </div>
</template>

<script>
import axios from 'axios' 
export default {
  name: 'test5',
  components: {
    
  },
  created(){
    let instance = axios.create({
      baseURL:'http://localhost:8080',
      timeout: 1000
    });
    instance.get('./data.json').then(res =>{
      console.log(res);
    })
  }
}
</script>
