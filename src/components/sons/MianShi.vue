<template>
    <div>
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <div class="li-left">
                    <p class="p-top">{{item.integer}}</p>
                    <p class="p-top1">回答3</p>
                </div>
                <div class="li-con">
                    <p class="p-con">{{item.intege}}</p>
                    <p class="p-con1">阅读</p>
                </div>
                <div class="li- right">
                    <p class="p-btn">{{item.desc}}</p>
                    <div class="p-btn1">
                        <p>匿名用户</p>
                        <p>参与讨论</p>
                        <p>{{item.datetime}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"FaXian",
    data(){
        return{
            arr:null
        }
    },
    methods:{
        async getFaxian(){
            let {data}=await axios.get("/api/home");
            console.log(data);
            this.arr=data[0].list
        }
    },
    created(){
        this.getFaxian()
    }
}
</script>
<style scoped>
    li{
        list-style: none;
        display: flex;
        margin-left: 15px;
        margin-top: 20px;
    }
    li>div{
        margin-right: 20px;
    }
    .p-top{
        text-align: center;
        color: #82b64a;
        font-size: 14px;
        line-height: 25px;
    }
    .p-top1{
        text-align: center;
        color: #82b64a;
        font-size: 12px;
        line-height: 25px;
    }
    .p-con{
        text-align: center;
        color: #a1a39f;
        font-size: 14px;
        line-height: 25px;
    }
    .p-con1{
        text-align: center;
    color: #a1a39f;
        font-size: 12px;
        line-height: 25px;
    }
    .p-btn{
        text-align: center;
        color: #333332;
        font-size: 14px;
        line-height: 25px;
    }
    .p-btn1{
        text-align: center;
       color: #333332;
        font-size: 12px;
        line-height: 25px;
        display: flex;
    }
    .p-btn1>p{
        display: block;
        margin-right: 5px;
        color: #a1a39f;
    }
</style>