const CONTACT_API = {
    getContactList:{
        method: 'get',
        url:'/contactList'
    },
    newContactForm:{
        method: 'post',
        url:'/contact/new/form'
    },
    newContactJson:{
        method: 'post',
        url:'/contact/new/json'
    },
    editContact:{
        method:'put',
        url:'/contact/edit'
    },
    delContact:{
        method:'delete',
        url:'/contact'
    }
}
export default CONTACT_API