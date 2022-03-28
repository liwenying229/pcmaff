<template>
    <div class="SearchView">
        <div class="top">
            <input type="text" placeholder="搜索PMCAFF...">
            <ul class="list">
                <li @click="fn(item,0,$event)"><router-link to="/Search/all" active-class="a">全部</router-link></li>
                <li @click="fn(item,1,$event)"><router-link to="/Search/question" active-class="a">问答</router-link></li>
                <li @click="fn(item,2,$event)"><router-link to="/Search/essay" active-class="a">文章</router-link></li>
            </ul>
        </div>
        <div class="middle">
            <router-view></router-view>
        </div>
        <div class="dui">
            <img src="@/assets/AppImg/dui.png" alt="">
        </div>
        <div class="bottom">
            <p>© 2007~2022 PMCAFF [京ICP备16000448号-6]</p>
        </div>
    </div> 
</template>
<script>
export default {
    name:"SearchView",
    methods:{
        fn(item,index,e){
            // item.style.borderBottom="1px solid transparent"
            // for(var m=1;m<index.length;m++){
            //     item[m].style.borderBottom="1px solid transparent"
            // }
            // console.log(index);
            // e.currentTarget.style.borderBottom="1px solid red"
        }
    }
}
</script>

<style scoped>
    .list li a{
        list-style: none;
        text-decoration: none;
        color: #000;
    }
    .top{
        width: 100%;
        height: 150px;
        border-bottom: 1px solid #fafafa;
    }
    .top input{
        margin: 27px 609px;
        width: 700px;
        height: 50px;
        background: #f7f7f7;
        border: none;
        padding-left: 20px;
        font-size: 14px;
    }
    .list{
        display: flex;
        margin-left: 608px;
    }
    .list li{
        
        margin-right: 52px;
    }
    .middle{
        width: 100%;
        height: 450px;
        background: #fafafa;
    }
    .dui{
        width: 40px;
        height: 40px;
        background: #008bf7;
        display: flex;
        align-items: center;
        margin-left: 1850px;
        margin-top: 135px;
    }
    .dui img{
        display: block;
        margin: 0 auto;
    }
    .bottom{
        height: 60px;
        background: #191919;
        text-align: center;
        line-height: 60px;
        margin-top: 20px;
    }
    .bottom p{
        color: #999999;
    }
    .list .a {
        padding-bottom: 24px;
        /* border-bottom: 1px solid transparent; */
        border-bottom: 1px solid red;
    }
</style>
