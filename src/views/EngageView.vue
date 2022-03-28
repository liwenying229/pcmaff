<template>
  <div>
    <div class="wrap">
      <h1>专注互联网/IT<br />提供招聘和求职服务</h1>
      <div class="btn-group">
        <i class="icon iconfont icon-plus1187514easyiconnet"></i>
        <a class="btn btn-create">发布职位</a>
        <a class="btn btn-ourwork">招远程员工</a>
      </div>
    </div>

    <div class="job-content container">
      <ul class="jobs-list">
        <li class="item" v-for="(value, key) in arrd" :key="key">
          <table>
            <tbody>
              <tr>
                <td class="item-count">
                    {{value.id}}
                  <div class="item-count-text">{{value.text}}</div>
                </td>

                <td class="item-view">
                  {{value.init}}
                  <div class="item-view-txt">{{value.dos}}</div>
                </td>

                <td class="item-content">
                  <a
                    href="/article/3314744138448000?newwindow=1"
                    target="_blank"
                    class="item-title"
                    >{{value.banner}}</a
                  >
                  <div class="item-more">
                    <a
                      data-v-2b9b5a66=""
                      href="/user/profile/6OBMnPE6k8?newwindow=1"
                      >{{value.list}}</a
                    >

                    &nbsp;|&nbsp;北京爱智尚科技有限公司&nbsp;组织部负责人
                    &nbsp;&nbsp;
                    <span title="2022-03-18 11:29:06">{{value.time}}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "EngageView",
  data() {
    return {
      arrd: null,
    };
  },
  created() {
    axios.get("/api/Engage").then((res) => console.log(res.data));
  },
  methods: {
    async getPublic() {
      let { data } = await axios.get("/api/Engage");
      console.log(data);
      this.arrd = data;
    },
  },
  created() {
    this.getPublic();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.wrap {
  height: 300px;
  background: url(https://static.pmcaff.com/static/img/job-header.44ecd20.png)
    50% no-repeat;
  background-size: 1920px 300px;
}

.wrap > h1 {
  padding-top: 75px;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-size: 30px;
  font-weight: 700;
}

.btn-group .btn.btn-create {
  background: #82b64a;
  margin-left: 420px;
  margin-top: 30px;
}

.btn-group .btn {
  display: inline-block;
  width: 115px;
  height: 40px;

  border-radius: 2px;
  text-align: center;
  color: #fff;
  line-height: 40px;
  font-size: 14px;
}

.btn-group .btn.btn-ourwork {
  background: #008bf7;
  margin-left: 27px;
  margin-top: 30px;
}

.btn-group .btn {
  display: inline-block;
  width: 115px;
  height: 40px;

  border-radius: 2px;
  text-align: center;
  color: #fff;
  line-height: 40px;
  font-size: 14px;
}

/* .icon-plus1187514easyiconnet:before{
    content: "\E641";
} */
.item {
  margin: 18px 0;
}
table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}

.jobs-list .item .item-count {
  color: #82b64a;
  font-size: 13px;
  width: 48px;
  text-align: center;
  vertical-align: top;
  line-height: 20px;
}

.jobs-list .item .item-count-txt {
  text-align: center;
  font-size: 12px;
  margin-top: 6px;
}

.jobs-list .item .item-view {
  font-size: 16px;
  color: #999;
  width: 48px;
  text-align: center;
  vertical-align: top;
  line-height: 16px;
}

.jobs-list .item .item-view-txt {
  color: #999;
  text-align: center;
  font-size: 12px;
  margin-top: 6px;
}

.jobs-list .item .item-content {
  padding-left: 10px;
  vertical-align: top;
}

.jobs-list .item .item-content .item-title {
  font-size: 16px;
  color: #333;
  line-height: 16px;
}

.jobs-list .item .item-content .item-more {
  color: #999;
  font-size: 12px;
  margin-top: 6px;
  line-height: 1.6;
}
.container {
  width: 700px;
  margin:0 auto;
 
}
</style>