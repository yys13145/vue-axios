<template>
  <div class="test3">
    <p>并发请求使用axios.all和axios.spread</p>
  </div>
</template>

<script>
import axios from 'axios' 
export default {
  name: 'test3',
  components: {
    
  },
  created(){
    axios.all([
        axios.get('/data.json'),
        axios.get('/data1.json'),
    ]).then( 
        axios.spread(function (acct, perms) {
            // 两个请求现在都执行完成
            console.log(acct);
            console.log(perms);
        })
    ) 
  }
}
</script>
