<template>
  <div class="home">
    <div class="box">
      <div class="box-top">
        <h3>人们常说的有人带,这个「带」是什么意思？</h3>
        <button>+ 发布提问</button>
      </div>
      <ul class="box-ul">
        <router-link to="/home/faxian"
          ><li class="box-li">发现</li></router-link
        >
        <router-link to="/home/zuire"><li class="box-li">最热</li></router-link>
        <router-link to="/home/daihuida"
          ><li class="box-li">待回答</li></router-link
        >
        <router-link to="/home/ribao"><li class="box-li">日报</li></router-link>
        <router-link to="/home/mianshi"
          ><li class="box-li">面试攻略</li></router-link
        >
        <router-link to="/home/zhuanlan"
          ><li class="box-li">专栏</li></router-link
        >
        <router-link to="/home/shuju"><li class="box-li">数据</li></router-link>
        <router-link to="/home/biduan"><li class="box-li">B端</li></router-link>
        <router-link to="/home/name"><li class="box-li">用户</li></router-link>
      </ul>
      <router-view></router-view>
      <ul class="left-ul">
        <li class="left-li"><p>Special Thanks</p></li>
        <li class="li-img">
          <img
            src="https://download-cdn.pmcaff.com/coffee-b16437cb8c318fb852cd73e2275ce317"
            alt=""
          />
        </li>
        <li class="li-img">
          <img
            src="https://download-cdn.pmcaff.com/coffee-4d75ddc902b4f39310569cd30f4142a3"
            alt=""
          />
        </li>
        <li class="li-img">
          <img
            src="https://download-cdn.pmcaff.com/coffee-0a7519526a9dec8a42cc06c420a983ff"
            alt=""
          />
        </li>
        <li class="li-img">
          <img
            src="https://download-cdn.pmcaff.com/coffee-389ff2938f3186086372c3772d615d4a"
            alt=""
          />
        </li>
        <li class="li-img">
          <img
            src="https://download-cdn.pmcaff.com/coffee-54bd1d3b4a9bacf09603bc6058c92c4b"
            alt=""
          />
        </li>
        <li class="li-img">
          <img
            src="https://download-cdn.pmcaff.com/coffee-0598edb725dd12e901e1fcf544df1e5a"
            alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style scoped>
.li-img {
  border: 1px solid rgb(233, 230, 230);
  margin-bottom:10px;
}
.li-img > img {
  width: 150px;
  height: 80px;
}
.left-li {
  font-size: 12px;
  color: rgb(172, 172, 172);
  margin-bottom: 18px;
}
.home {
  position: relative;
}
.left-ul {
  margin-top:20px;
  position: absolute;
  left: 1100px;
  top: 0;
}
ul {
  list-style: none;
}
.box-ul {
  list-style: none;
  display: flex;
}
.box-li {
  font-size: 12px;
  margin-left: 5px;
  color: rgb(61, 61, 61);
  padding: 0 10px;
  border: 1px solid #ccc;
  height: 25px;
  border-radius: 5px;
  line-height: 25px;
}
.box {
  margin: auto;
  width: 600px;
  height: 1000px;
  background: rgb(255, 255, 255);
}
.box-top {
  margin-top:20px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
button {
  border-radius: 4px;
  width: 100px;
  height: 30px;
  font-size: 14px;
  color: azure;
  background: #82b64a;
  border: none;
}
h3 {
  font-weight: 400;
  color: #82b64a;
}
</style>
