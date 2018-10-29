<template>
    <div class="abutton">
        <div class="layout-from-header">
            <el-row>
                <el-button v-for="(item, index) in dom" :key="index" :type='item.type' size='mini' @click="btnClick(item.action)">
                    {{item.text}}
                </el-button>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name:'abutton',
    props:{
        dom:{
            type:Array,
            default:() => []
        }
    },
    methods:{
        /**
         * action{
         *    type:'1', 动作类型
         *    path:'',  是否有路由路径
         *    parameter: { //参数
         *      
         *    },
         *  }
         */
        btnClick(action){
            console.log(action);
            this.$router.push({path: `/components${action.path}`})
            
        }
    },
    created(){
    }
}
</script>
<style lang="less" scoped>
.layout-from-header{
    margin-top: 15px;
}
</style>

