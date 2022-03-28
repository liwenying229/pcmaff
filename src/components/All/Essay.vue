<template>
    <div class="es">
        <ul>
            <li v-for="(item,index) in essay" :key="index">
            {{item.cparagraph}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"es",
    data(){
        return{
            essay:null
        }
    },
    methods:{
        async getEssay(){
            let {data} = await axios.get("/api/Essaya")
            this.essay = data.list
        }
    },
    created(){
        this.getEssay()
    }
}
</script>