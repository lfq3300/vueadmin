<template>
    <div class="left">
        <el-menu router class="left-menu">
            <el-submenu index='index' v-for='(item,aindex) in link' :key='aindex'>
                <template slot="title">
                    <i class="el-icon-location"></i>    
                    <span>{{item.title}}</span>
                </template>
                <el-menu-item :index='linkitem.path' v-for='(linkitem,bindex) in item.links' :key='bindex'>
                        {{linkitem.title}}
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    name:'left',
    data(){
        return {
            link:[
                    {
                        title:'首页',
                        links:[
                            {path:"/components/admin",title:'Admin'}
                        ]
                    },
                    {
                        title:'日志管理',
                        links:[
                            {path:"/components/log",title:'日志列表'}
                        ]
                    }
                ]
        }
    }
}
</script>
<style lang="less" scoped>
.left {
  width: 100%;
  height: 100%;
  .left-menu {
    height: 100%;
  }
}
</style>
