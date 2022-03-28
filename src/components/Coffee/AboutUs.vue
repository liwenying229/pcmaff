<template>
    <div>
        <div>
            <ul>
                <li v-for="(item,index) in arrs" :key="index">
                    <div>
                        <h3>{{item.label}}</h3>
                        <p>
                            <span>{{item.username}}</span>
                            <span>{{item.id}}</span>
                        </p>
                    </div>
                    <img :src="item.avatar" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"AboutUs",
    data(){
        return{
            arrs:null
        }
    },
    created(){
        this.fetchSourceData()
    },
    methods:{
        async fetchSourceData(){
            let {data} = await axios.get("http://localhost:8088/getResource")
            this.arrs=data
            console.log( this.arrs)
        }
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
}
img{
    display: block;
    border-radius:5px;
}
ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:680px;
    box-sizing: border-box;
    padding:20px 10px;
    border-bottom: 1px solid rgb(233, 233, 233);
    margin:0 auto;
    border-radius:5px;
}
ul li div{
    padding-right: 8px;  
}
ul li p{
    color: #999;
    font-size:12px;
    margin-top:8px;
}
ul li p span{
    margin-right:8px;
}
h3{
    color:#151515;
    font-size: 18px;
}
li:hover{
    background: rgb(247, 247, 247);
}
</style>