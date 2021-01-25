<template>
  <div class="home">
    <van-contact-list
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { ContactList } from 'vant';
import axios from 'axios' 
export default {
  name: 'contactList',
  components: {
    [ContactList.name]:ContactList
  },
  data(){
    return{
      list:[]
    }
  },
  created(){
    axios.create({});
  },
  methods:{
    onAdd(){

    },
    onEdit(){

    }
  }
}
</script>
