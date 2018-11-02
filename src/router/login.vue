<template>
  <div class="login-container">
    <div class="content-container">
      <div class="logo"></div>
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="form-box">
        <el-form-item prop="name">
          <!-- <i class="svg-container svg-label">
            <svg-icon icon-class="user" />
          </i> -->
          <el-input v-model="loginForm.name" auto-complete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <!-- <i class="svg-container svg-label">
            <svg-icon icon-class="password" />
          </i> -->
          <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-button type="primary" class="subBtn" :loading="loading"  @click="submitForm('loginForm')">提交</el-button>
      </el-form>
      <!-- <div class="options">
        <router-link to="/">立即注册</router-link>
        <router-link to="/">忘记密码</router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      },
      loading: false,
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
        ]
      }
    }
  },
  created () {
    let sid = this.$route.query.sid
    if (sid) {
      this.login(sid)
    }
    console.log(this.testData);
    
  },
  computed: {
    ...mapGetters([
      'testData'
    ])
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        }
      })
    },
    login (sid) {
      this.loading = true
      if (sid) { this.loginForm.token = sid }
      /* this.$store.dispatch('LoginByUsername', this.loginForm)
        .then(() => {
          this.loading = false
          this.$router.replace({ path: '/' })
        })
        .catch(() => {
          this.loading = false
        }) */
      this.loading = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  .login-container {
    height: 100vh;
    background: $bg;
    .content-container {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      .logo {
        text-align: center;
        padding-bottom: 30px;
      }
      .form-box {
        padding: 40px;
        background: #fff;
        border-radius: 5px;
        .el-form-item {
          margin-bottom: 27px;
        }
        .el-form-item__content {
          position: relative;
        }
        .el-input__inner {
          height: 50px;
          line-height: 50px;
          // padding: 0 30px 0 50px;
          padding: 0 20px;
          font-size: 18px;
        }
        .svg-container {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 10;
          height: 50px;
          line-height: 50px;
          margin-left: 15px;
          font-size: 24px;
        }
        .subBtn {
          width: 100%;
          padding: 20px;
          font-size: 18px;
        }
      }
      .options {
        display: flex;
        align-items: center;
        padding-top: 20px;
        a {
          flex: 1;
          width: 100%;
          font-size: 14px;
          text-align: center;
          color: #5a6a80;
        }
      }
    }
  }
</style>
