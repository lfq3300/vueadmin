<template>
    <div class="apage">
        <div class="block">
            <el-pagination
                @prev-click='clickPage(1)'
                @next-click='clickPage(-1)'
                @current-change='changePage'
                background
                layout="total, prev, pager, next, jumper"
                :page-size='15'
                :total="tdata.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    name:'apage',
    props:{
        tdata:{
            type:Object,
            default:() => []
        }
    },
    methods:{
        clickPage(a){
            console.log(a)
        },
        changePage(a){
            console.log(a)
        }
    }
}
</script>
<style lang="less" scoped>
.apage{
    float: right;
    margin-top: 50px;
}
</style>

