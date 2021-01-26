import axios from "axios"
import service from './contactApi'
import {Toast} from 'vant'

let instance = axios.create({
    baseURL:'http://localhost:9000/api',
    timeout:1000
})

const Http = {};

for(let key in service){
    let api = service[key];
    //async es6语法 避免进入回调地狱
    Http[key] = async function(params,isFormData=false,config={}){
        let newParams = {};
        if(params && isFormData){
            newParams = new FormData();
            for(let key in params){
                newParams.append(key,params[key]);
            }
        }else{
            newParams = params;
        }
        //请求返回值 
        let response = {};
        if(api.method == 'put' || api.method == 'post' || api.method == 'patch'){
            try{
                response = await instance[api.method](api.url,newParams,config);
            }catch(err){
                response = err;
            }     
        }else if(api.method == 'delete' || api.method == 'get'){
            config.params = newParams;
            try{
                response = await instance[api.method](api.url,config);
            }catch(err){
                response = err;
            }  
        }
        return response;
    }
}

//添加axios拦截器
instance.interceptors.request.use(config=>{
    Toast.loading({
        mask:false,
        duration:0,
        forbidClick:true,
        message:'加载中...'
    })
    return config;
},err=>{
    console.log(err);
    Toast.clear();
    Toast('请求错误，请稍后重试！');
})

instance.interceptors.response.use(res=>{
    Toast.clear();
    return res.data;
},err=>{
    console.log(err);
    Toast.clear();
    Toast('请求错误，请稍后重试！');
})

export default Http