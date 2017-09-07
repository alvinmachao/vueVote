<template>
  <div class="login_container">
    <p class="login_title">请输入用户信息进行验证</p>
    <input placeholder="请输入用户信息进行验证" id="name" v-model="account" type="text"/>
    <input placeholder="请输入用户密码" id="password" v-model="password" type="password"/>
    <a href="javascript:;" class="login_submit" @click="submit">提交</a>

    <p class="login_bottom">没有用户名和编号？
      <router-link
        class="linkRegister" to="/register">
        请先进行报名
      </router-link>
    </p>
  </div>
</template>
<script>
  import Crypto from 'crypto'

  export default {
    name: 'login',
    data () {
      return {
        account: '',
        password: ''
      }
    },
    created () {
    },
    components: {},
    methods: {
      submit () {
        if (this.account.trim() === '') {
          return
        }
        if (this.password.trim() === '') {
          return
        }
        var md5 = Crypto.createHash('md5')
        var password = md5.update(this.password.trim()).digest('hex')
        var account = this.account.trim()
        const obj = {
          account,
          password
        }
        console.log(obj)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import (reference) "../../public/publics";

  .login_container {
    width: 5.4rem;
    box-sizing: border-box;
    padding: .2rem;
    border-radius: 10px;
    p {
      text-align: center;
    }
    input {
      display: block;
      width: 3.66rem;
      height: .6rem;
      margin: 0 auto;
      margin-bottom: .2rem;
      box-sizing: border-box;
      padding: 0 .2rem;
      border-radius: 5px;
      border: 2px solid #a0d5ff;
    }
    .login_submit {
      display: block;
      height: .5rem;
      line-height: .5rem;
      text-align: center;
      width: 1.32rem;
      font-size: .30rem;
      color: #fff;
      background: #50aaeb;
      margin: 0 auto;
      border-radius: .5rem;
      margin-bottom: .2rem;
      box-shadow: 0 6px 10px lighten(#50aaeb, 20%);
    }
    .login_title {
      text-align: center;
      margin-bottom: .2rem;
      font-size: .34rem;
    }
    .login_bottom {
      font-size: .30rem;
      .linkRegister {
        text-decoration: underline;
        color: #ed937c;
        font-size: .32rem;
      }
    }
  }
</style>
