<template>
    <div class="layout">
        <div class="layout-header">
            <admin-header></admin-header>
        </div>
        <div class="layout-content">
            <div class="layout-left" :style="height">
                <admin-left></admin-left>
            </div>
            <div class="layout-right" :style="height">
                <div class="layout-title">
                    <strong >{{$route.name}}</strong>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{ item.name }}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>    
</template>
<script>
import AdminHeader from '@/components/AdminHeader'
import AdminLeft from '@/components/AdminLeft'
export default {
    components:{ AdminHeader, AdminLeft},
    name:'layout',
    computed:{
        height(){
            console.log(document.documentElement.clientHeight - 56)
            return {'height':document.documentElement.clientHeight - 56+ 'px'};
        }
    },
    created(){
    }
}
</script>
<style lang="less" scoped>
.layout-header {
  width: 100%;
  height: 56px;
}
.layout-content {
  display: flex;
}
.layout-left {
  width: 241px;
  overflow: hidden;
  box-sizing: border-box;
  border-top: 1px solid #eee;
}
.layout-right {
  flex: 1;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
}
.layout-title {
  line-height: 15px;
  display: flex;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.layout-title strong {
  flex: 1;
  font-size: 24px;
  font-weight: 100;
}
.layout-title div {
  line-height: 25px;
}
</style>
