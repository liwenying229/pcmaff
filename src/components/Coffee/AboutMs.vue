<template>
    <div class="nr">
        <div class="center">
          <div v-for="(item,index) in arrs" :key="index" class="center1">
              <div class="list">
                <h4>{{item.title}}</h4>
                <p>{{item.text}}</p>
              </div>
              <div class="two"><img :src="item.img" alt=""></div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"AboutMs",
  data(){
    return{
      arrs:null,
    };
  },
  components:{},
  methods:{
    async getMs(){
      let {data}=await axios.get("/api/selection")
      this.arrs =data;
      console.log(this.arrs)
    }
  },
  created(){
    this.getMs();
  }
}
</script>
<style scoped>
  .center1{
    width: 660px;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  .two img{
    width: 120px;
    height: 80px;
    border-bottom:solid 1px #000;
  }
  .list{
    line-height: 28px;
  }
  p{
    font-size: 12px;
    color: #999;
  }
  h4{
    font-size: 18px;
    color: #151515;
  }
</style>