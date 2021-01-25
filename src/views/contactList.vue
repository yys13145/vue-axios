<template>
  <div class="home">
    <van-contact-list
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />

    <van-popup v-model="show" position="bottom">
      <van-contact-edit
        :is-edit="isEdit"
        show-set-default
        :contact-info="editingContact"
        set-default-label="设为默认联系人"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>

  </div>
</template>

<script>
import { ContactList,Toast,ContactEdit,Popup } from 'vant';
import axios from 'axios' 
export default {
  name: 'contactList',
  components: {
    [ContactList.name]:ContactList,
    [ContactEdit.name]:ContactEdit,
    [Popup.name]:Popup
  },
  data(){
    return{
      list:[],
      instance: null,
      show:false,
      editingContact:{},
      isEdit:false
    }
  },
  created(){
    this.instance =  axios.create({
      baseURL: 'http://localhost:9000/api',
      timeout: 1000
    });
    this.getList();
  },
  methods:{
    getList(){
      this.instance.get('/contactList')
      .then(res=>{
        this.list = res.data.data;
      }).catch(err=>{
        Toast(err);
      })
    },
    onAdd(){
      this.show = true;
      this.isEdit = false;
      this.editingContact = {};
    },
    onEdit(contact){
      this.show = true;
      this.isEdit = true;
      this.editingContact = contact;
    },
    onSave(info){
      if(this.isEdit){
        this.instance.put('/contact/edit',info)
        .then(res=>{
          console.log(res);
          Toast('编辑成功！');
          this.getList();
          this.show = false;
        }).catch(err=>{
          Toast(err);
        })
      }else{
        this.instance.post('/contact/new/json',info)
        .then(res=>{
          console.log(res);
          Toast('新建成功！');
          this.getList();
          this.show = false;
        }).catch(err=>{
          Toast(err);
        })
      }
    },
    onDelete(info){
      this.instance.delete('/contact',{
        params:{
          id: info.id
        }
      }).then(res=>{
        if(res.data.code === 200){
          this.show = false;
          Toast('删除成功！');
          this.getList();
        }
      }).catch(err=>{
        Toast(err);
      })
    }
  }
}
</script>
