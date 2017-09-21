<template>
  <div class="register_page">
    <img class="headImg" src="../../images/head.png"/>
    <div class="form">
      <div class="box">
        <label for="account">用户名：</label>
        <input type="text" v-model="account" id="account" name="account" v-validate="'required|account'">

        <p class="prompt" v-show="errors.has('account')">{{ errors.first('account') }}</p>
      </div>
      <div class="box">
        <label for="password">密码：</label>
        <input type="password" v-model="password" name="passwords" id="password" v-validate="'required|min:6'">

        <p class="prompt" v-show="errors.has('passwords')">{{ errors.first('passwords') }}</p>
      </div>
      <div class="box">
        <label for="rPassword">确认密码：</label>
        <input type="password" name="rPassword" id="rPassword" v-validate="'confirmed:passwords'">

        <p class="prompt" v-show="errors.has('rPassword')">{{ errors.first('rPassword')}}</p>
      </div>
      <div class="box">
        <label for="phone">手机号：</label>
        <input type="text" v-model="phone" name="phone" id="phone" v-validate="'required|phone'">

        <p class="prompt" v-show="errors.has('phone')">{{ errors.first('phone')}}</p>


      </div>
      <div class="box">
        <label for="des">自我描述：</label>
        <input type="text" v-model="des" name="des" id="des" v-validate="'required'">

        <p class="prompt" v-show="errors.has('des')">{{ errors.first('des')}}</p>
      </div>
      <div class="box">
        <label>性别：</label>
        <div class="sexBox"><input name="sex" type="radio" value="1" v-model="sex"/>男</div>
        <div class="sexBox"><input name="sex" type="radio" value="2" v-model="sex"/>女</div>
      </div>

    </div>
    <a href="javascript:;" class="submit" @click="submit">提交</a>

  </div>
</template>
<script>
  import Vue from 'vue'
  import VeeValidate, { Validator } from 'vee-validate'
  import messages from 'vee-validate/dist/locale/zh_CN'
  import Crypto from 'crypto'
  import { mapActions } from 'vuex'

  Validator.addLocale(messages)
  Validator.updateDictionary({
    zh_CN: {
      messages,
      attributes: {
        account: '用户名',
        passwords: '密码',
        rPassword: '确认密码',
        phone: '手机号',
        des: '自我描述'
      }
    }
  })
  Validator.extend('phone', {
    messages: {
      zh_CN: field => field + '由11位数字组成'
    },
    validate: value => {
      return (value.length === 11) && /^1[0-9]{10}$/.test(value)
    }
  })
  Validator.extend('account', {
    messages: {
      zh_CN: field => field + '由汉字字母下划线组成'
    },
    validate: value => {
      return /^[\u4e00-\u9fa5a-zA-Z_]+$/.test(value)
    }
  })
  const config = {
    errorBagName: 'errors',
    delay: 0,
    locale: 'zh_CN',
    messages: null,
    strict: true
  }
  Vue.use(VeeValidate, config)
  export default {
    data () {
      return {
        account: '',
        password: '',
        phone: '',
        des: '',
        sex: '2'
      }
    },
    name: 'register',
    methods: {
      ...mapActions(['register', 'isExist']),
      submit () {
        var bok = this.$validator.errors.any()
        if (bok) {
          return
        }
        if (this.account === '') {
          return
        }
        if (this.des === '') {
          return
        }
        if (this.password === '') {
          return
        }
        if (this.phone === '') {
          return
        }
        var md5 = Crypto.createHash('md5')
        var password = md5.update(this.password.trim()).digest('hex')
        var account = this.account.trim()
        var phone = this.phone.trim()
        var des = this.des.trim()
        var sex = this.sex.trim()
        var user = {account, password, phone, des, sex}
        this.register(user)
      },
      check (e) {
        this.isExist(e)
      }
    },
    computed: {}
  }
</script>
<style lang="less" scoped>
  @import (reference) "../../public/publics";

  .register_page {
    width: 100%;
    .headImg {
      width: 100%;
      border: 0;
    }
    .form {
      width: 100%;
      box-sizing: border-box;
      padding: .2rem .54rem;
      .box {
        position: relative;
        width: 100%;
        margin-bottom: .12rem;
        label {
          display: block;
          height: .3rem;
          line-height: .3rem;
          width: 100%;
          margin-bottom: .1rem;
        }
        input[type="text"], input[type="password"] {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #97d4ff;
          border-radius: 4px;
          height: .57rem;
          padding: 0 .2rem;
          /*margin-bottom: .24rem;*/
          color: #333;
        }
        .sexBox {
          display: block;
          height: .4rem;
          line-height: .4rem;
          input[type="radio"] {
            line-height: .4rem;
            margin-right: .2rem;
          }
        }
        .prompt {
          text-align: center;
          line-height: .24rem;
          color: red;
          left: 0rem;
          top: .97rem;
          background: #fff;
        }
      }
    }
    .submit {
      display: block;
      margin: 0 auto;
      width: 1.77rem;
      height: .71rem;
      background: #52aaef;
      color: #fff;
      line-height: .71rem;
      text-align: center;
      border-radius: .71rem;
      margin-bottom: 20px;
      font-size: .34rem;
    }
  }
</style>
