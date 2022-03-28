<template>
  <div class="ActivityBtm">
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <img :src="item.imgurl" alt="" />
        <div class="Btn">
          <p>{{ item.desc }}</p>
          <div>
            <p>{{ item.datetime }}——{{ item.datatime }}</p>  
            <button>报名结束</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "ActivityBtm",
  data() {
    return {
      arr: null,
    };
  },
  methods: {
    async getAll() {
      let { data } = await axios.get("/api/activityBtm");

      console.log(data);
      // var res=JSON.parse(data)
      // console.log(res);
      this.arr = data[0].list;
    },
  },
  created() {
    this.getAll();
  },
};
</script>

<style scoped>
    .ActivityBtm {
       margin-top: 16px;
    }
    .ActivityBtm ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .ActivityBtm ul li {
        width:344px;
        height:330px;
        border-radius: 9px;
        background:#ffffff;
        overflow: hidden;
        box-shadow: 5px 5px 15px #e8e8f5;
        margin-bottom:14px;
    }
    .ActivityBtm ul li img {
        width: 344px;
        height: 190px;
    }
    .ActivityBtm ul li .Btn {
        width:304px;
        margin: 0 auto;
        padding-top: 8px;
    }
    .ActivityBtm ul li .Btn div {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
    }
    .ActivityBtm ul li .Btn div p {
        color: #999999;
        line-height: 36px;
    }
    .ActivityBtm ul li .Btn div button {
        width: 86px;
        height:34px;
        background: #e7e7e7;
        border: 1px solid #cccccc;
        border-radius: 2px;
    }
</style>