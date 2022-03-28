<template>
    <div class="AppView">
        <div class="all">
            <div class="left">
                <img src="@/assets/AppImg/phone.png" alt="">
            </div>
            <ul class="right">
                <li><img src="@/assets/AppImg/tea.png" alt="" class="tea"></li>
                <li><img src="@/assets/AppImg/shangbiao.png" alt="" class="biao"></li>
                <li><img src="@/assets/AppImg/二维码.png" alt="" class="er">
                <p class="text">扫码下载APP</p></li>
            </ul>
        </div>
        <div class="bottom">
            <img src="@/assets/AppImg/dui.png" alt="" class="dui">
        </div>
    </div>
</template>

<script>
export default {
  name: "AppView",
};
</script>

<style scoped>
.all {
  display: flex;
}
.left {
  margin-left: 320px;
}
.left img {
  width: 850px;
  height: 727px;
}
.right {
  list-style: none;
  margin-top: 162px;
}
.tea {
  width: 122px;
  height: 118px;
  border: 1px solid #e6e6e6;
  border-radius: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
}
.biao {
  width: 188px;
  height: 52px;
  margin-bottom: 29px;
}
.er {
  width: 125px;
  height: 125px;
  margin-left: 30px;
  margin-bottom: 10px;
}
.text {
  margin-left: 50px;
}
.bottom {
  width: 40px;
  height: 40px;
  background: #008bf7;
  display: flex;
  align-items: center;
  margin-left: 1850px;
}
.dui {
  display: block;
  margin: 0 auto;
}
</style>