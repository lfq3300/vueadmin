<template>
    <div class="left">
        <el-menu class="left-menu">
            <el-submenu index='0' v-for="(item, aindex) in link">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.title}}</span>
                </template>
                <el-menu-item index='0' v-for="(linkitem, bindex) in item.links">
                    <router-link :to="{path:linkitem.path}">
                        {{linkitem.title}}
                    </router-link>   
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    name:'left',
    link:[
        {
            title:'导航栏',
            links:[
                {path:"/",title:'选项3'}
            ]
        }
    ]
}
</script>
<style lang="less" scoped>
.left {
  width: 241px;
  position: fixed;
  height: 100%;
  .left-menu {
    height: 100%;
  }
}
</style>
