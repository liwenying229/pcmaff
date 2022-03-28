<template>

    <div>
    <div class="Activity">
        <ul>
            <li><router-link to="/Activity/ActivityAll" active-class="active"> 全部 </router-link> </li>
            <li><router-link to="/Activity/ActivityTop" active-class="active"> 线上活动 </router-link> </li>
            <li><router-link to="/Activity/ActivityBtm" active-class="active"> 线下活动 </router-link> </li>
        </ul>
        <router-view> </router-view>
    </div>
        
    </div>
</template>
<script>
export default {
    name:"ActivityView"
}
</script>
<style scoped>
    .Activity {
        width: 704px;
        margin: 0 auto;
        padding-top:50px;
        
    }
    .Activity ul {
        display: flex;
        font-size: 16px;
        margin-bottom:16px;
    }
    .Activity ul li {
        margin-right: 20px;
        padding-bottom: 12px;
    }
    .Activity ul li a {
        color: #999999;
        font-weight: 400;
        padding-bottom: 12px;
        border-bottom: 1px solid transparent;
    }
    /* .Activity ul li a {
         border-bottom: 2px solid #82b64a;
    } */
    .Activity ul li a.active{
         border-bottom: 2px solid #82b64a;
    }
</style>
