<template>
    <div class="qst">
        <ul>
            <li v-for="(item,index) in qste" :key="index">
                {{item.id}}
                {{item.csentence}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"qst",
    data(){
        return{
            qste:null
        }
    },
    methods:{
        async getQuestion(){
            let {data} = await axios.get("/api/Question")
            console.log(data)
            this.qste = data.list
        }
    },
    created(){
        this.getQuestion()
    }
}
</script>