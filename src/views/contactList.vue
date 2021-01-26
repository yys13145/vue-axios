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
    async getList(){
      let res = await this.$Http.getContactList();
      this.list = res.data;
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
    async onSave(info){
      if(this.isEdit){
        let res = await this.$Http.editContact(info);
        if(res.code == 200){
          Toast('编辑成功！');
          this.getList();
          this.show = false;
        }
      }else{
        let res = await this.$Http.newContactJson(info);
        if(res.code == 200){
          Toast('新建成功！');
          this.getList();
          this.show = false;
        }
      }
    },
    async onDelete(info){
      let res = await this.$Http.delContact({id: info.id});
      if(res.code === 200){
        this.show = false;
        Toast('删除成功！');
        this.getList();
      }
    }
  }
}
</script>
