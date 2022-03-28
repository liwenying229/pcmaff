<template>
    <div class="all">
        <div class="main" v-for="(item,index) in all" :key = "index">
            {{item}}
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name:"all",
    data() {
        return {
            all:null
        }
    },
    methods:{
        async getAll(){
            let {data} = await axios.get("/api/Search")
            console.log(data)
            this.all = data
        }
    },
    created(){
        this.getAll()
    }
}
</script>