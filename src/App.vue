<template>
  <div id="app">
      <div id="nav">
        <div class="nav">
          <router-link to="/"
            ><img src="@/assets/logo.png" class="logo" alt=""
          /></router-link>
          <div class="column">
            <ul>
              <li><router-link to="/Coffee">咖啡日报</router-link></li>
              <li><router-link to="/home">社区</router-link></li>
              <li><router-link to="/Engage">招聘</router-link></li>
              <li><router-link to="/Activity">活动</router-link></li>
              <li><router-link to="">云队友</router-link></li>
            </ul>
            <div>
              <p>提问</p>
              <p>创作</p>
            </div>
          </div>
          <div class="nav_right">
            <div><router-link to="/App">App下载</router-link></div>
            <div class="icon">
              <router-link to="/Search"><van-icon name="search" /></router-link>
            </div>
            <div><router-link to="">登录</router-link></div>
            <div><router-link to="">注册</router-link></div>
          </div>
        </div>
      </div>
    <router-view />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#nav {
   width: 100%;
  height: 60px;
  box-shadow: 5px 5px 15px #e8e8f5;
  background: #fff;
  z-index: 6;
  position: fixed;
  left:50%;
  transform:translate(-50%);
  top: 0;
  margin-bottom: 20px;
  bottom: 30px;
}
.nav {
  width: 96%;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
   margin-bottom: 20px;
  z-index: 1;
}
.logo {
  width: 110px;
  height: 20px;
}
.column {
  display: flex;
}
.column ul {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
}
.column ul li {
  margin-left: 30px;
}
.column div {
  display: flex;
  font-size: 16px;
}
.column div p {
  width: 52px;
  height: 30px;
  color: #fff;
  background: #82b64a;
  border-radius: 3px;
  line-height: 30px;
  text-align: center;
  margin-left: 20px;
}
.column a {
  color: #151515;
}
.nav_right {
  display: flex;
}
.nav_right div {
  margin-left: 32px;
  font-size: 16px;
  font-weight: 400;
}
.nav_right div a {
  color: #151515;
}
.icon i {
  font-size: 20px;
}
#app:nth-child(2){
  margin-top: 70px;
}
</style>
