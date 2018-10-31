<template>
    <div class="list">
        <div v-for="(item, index) in builder" :key="index">
           <Abutton v-if='item.type === "button"' :dom='item.dom' :btn-click='btnClick'></Abutton>
           <ATable v-if='item.type === "table"' :dom='item.dom' :tdata='item.data' :operation   ='item.operation'></ATable> 
           <APage v-if='item.type === "page"' :tdata='item.data' :operation ='item.operation'></APage> 
        </div>
    </div>
</template>
<script>
import Abutton from '@/components/Builder/Abutton'
import ATable from '@/components/Builder/ATable'
import APage from '@/components/Builder/APage'
export default {
    components:{Abutton,ATable,APage},
    name:'list',
    props:{
        builder:{
            type:Array,
            default: () => []
        },
        btnClick: {
            type: Function,
            default: (e) => {}
        }
    },
    data(){
        return {
        }
    },
    mounted(){
        builder:this.builder
    },
    created(){
    }   
}
</script>
