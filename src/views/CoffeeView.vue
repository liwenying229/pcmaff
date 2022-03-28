<template>
  <div class="div">
    <!-- 咖啡日报 -->
    <div class="leff">
      <!-- 发表 -->
      <div style="margin: 20px 0">
        <el-input
          type="textarea"
          v-model="textarea"
          maxlength="499"
          show-word-limit
          rows="5"
        >
        </el-input>

        <el-input
          placeholder="粘贴你要分享的链接,例如:https://www.pmcaff.com/article/12345"
          v-model="input1"
        >
          <template slot="prepend">解析</template>
        </el-input>
      </div>
      <div class="btn">
        <button class="btn1">取消</button>
        <button>发布</button>
      </div>
    </div>
    <div class="button">
      <router-link to="/Coffee/aboutUs">今日推荐</router-link>
      <router-link to="/Coffee/aboutMs">PMCAFF 精选</router-link>
    </div>
    <div class="rightt">
      <ul>
        <li>
          <img
            src="https://download-cdn.pmcaff.com/coffee-b16437cb8c318fb852cd73e2275ce317"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://download-cdn.pmcaff.com/coffee-4d75ddc902b4f39310569cd30f4142a3"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://download-cdn.pmcaff.com/coffee-0a7519526a9dec8a42cc06c420a983ff"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://download-cdn.pmcaff.com/coffee-389ff2938f3186086372c3772d615d4a"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://download-cdn.pmcaff.com/coffee-54bd1d3b4a9bacf09603bc6058c92c4b"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://download-cdn.pmcaff.com/coffee-0598edb725dd12e901e1fcf544df1e5a"
            alt=""
          />
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "CoffeeView",
  data() {
    return {
      text: "",
      textarea: "",
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.el-textarea {
  border: none;
}
.div {
  width: 690px;
  margin: 0 auto;
  position: relative;
}
.leff {
  width: 660px;
  height: 250px;
  margin: 0 auto;
  box-shadow: 2px 2px 15px rgb(241, 241, 241);
  box-sizing: border-box;
  padding: 0 20px;
}
.btn {
  width: 660px;
  margin-top: 20px;
  margin-left: 480px;
}
.btn button {
  border: none;
  background: white;
}
.btn .btn1 {
  color: #82b64a;
}
.btn button:nth-child(2) {
  width: 90px;
  height: 34px;
  background: #82b64a;
  color: white;
  border-radius: 2px;
}
.btn1 {
  margin-right: 20px;
}
.button {
  margin: 20px auto;
}
.button a {
  color: #999;
  font-size: 18px;
  margin-left: 15px;
}
li {
  list-style: none;
}
.rightt ul li img {
  width: 158px;
  height: 78px;
}
.rightt ul li {
  border: solid 1px #ccc;
  margin-bottom: 10px;
}
.rightt {
  position: absolute;
  right: -170px;
  top: 0px;
}
div >>> .el-textarea__inner {
  border: none;
}
div >>> .el-input__inner {
  background: #f7f7f7;
  border: none;
}
div >>> .el-input__inner {
  height: 50px;
}
div >>> .el-input {
  margin-top: 10px;
}
</style>

