<template>
    <div class="adminheader">
        <header>
            <div class="logo-container">
                <img src="@/assets/logo.svg"/>
            </div>
            <div class="header-fluid">
                <div class="pull-left">
                    <el-menu class="header-menu">
                        <el-submenu index="1">
                            <template slot="title">后台设置</template>
                            <el-menu-item index="1-1">权限设置</el-menu-item>
                            <el-menu-item index="1-2">菜单设置</el-menu-item>
                            <el-menu-item index="1-3">人员管理</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </div>
                <div class="pull-right">
                    <el-menu router class="header-menu">
                        <el-menu-item class="header-menu-item" index='' >
                             <span>root</span>
                        </el-menu-item >
                        <el-menu-item class="header-menu-item" index="/login">
                             <i  class="el-icon-circle-close-outline"></i>
                             <span>退出登陆</span>
                        </el-menu-item >
                        <el-menu-item class="header-menu-item" index="/">
                             <i  class="el-icon-setting"></i>
                             <span>修改密码</span>
                        </el-menu-item >
                        <el-menu-item class="header-menu-item" index=''>
                             <i  class="el-icon-delete"></i>
                             <span>清空缓存</span>
                        </el-menu-item >
                    </el-menu>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name:'adminheader',
    data(){
        return {
            index:1
        }
    }
}
</script>
<style lang="less" scoped>
header {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #eee;
  display: flex;
  .logo-container {
    width: 240px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
    }
  }
}
.header-fluid {
  flex: 1;
  height: 100%;
  border-left: 1px solid #eee;
  display: flex;
  .pull-left {
    flex: 1;
    height: 100%;
    .header-menu {
      width: 200px;
      height: 100%;
    }
  }
  .pull-right {
    height: 100%;
    display: flex;
    .header-menu {
      display: flex;
      height: 100%;
    }
    .header-menu-item a {
      line-height: 100%;
    }
  }
}
.el-menu {
  border-right: none;
}
</style>
