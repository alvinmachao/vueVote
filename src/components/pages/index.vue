<template>
  <div class="IndexPage">

    <Modal v-if="this.showLogin">
      <Login></Login>
    </Modal>
    <div class="index_container">
      <div class="Index_top">
        <a href="javascript:;" class="login" @click="login">{{loginTitle}}</a>
        <router-link class="rule" to="/rule">
          活动规则
        </router-link>
      </div>
      <div class="index_img">
        <img src="../../images/top.png"/>
      </div>
      <div class="index_register">
        <router-link class="linkRegister" to="/register">
          我要报名
        </router-link>
      </div>
      <div class="SearchBox clear">
        <input type="text" id="searchInput"/><a href="javascript:;" @click="search">搜索</a>
      </div>
    </div>
    <div v-if="isLoading">Loading...</div>
    <div v-else="isLoading">
      <Users :allUsers="allUsers"></Users>
    </div>
  </div>
</template>

<script>
  import Users from '@/components/common/Users'
  import Modal from '@/components/common/Modal'
  import Login from '@/components/common/Login'
  import { mapMutations, mapActions } from 'vuex'

  export default {
    name: 'index',
    data () {
      return {isLoading: true}
    },
    created () {
      this.getAllUser()
      this.isLoading = false
    },
    computed: {
      allUsers () {
        return this.$store.state.allUsers
      },
      showLogin () {
        return this.$store.state.showLogin
      },
      isLogin () {
        return this.$store.state.isLogin
      },
      loginTitle () {
        return this.isLogin ? '个人中心' : '登录'
      }
    },
    components: {
      Users,
      Modal,
      Login
    },
    methods: {
      ...mapMutations(['SHOW_LOGIN']),
      ...mapActions(['getAllUser']),
      login () {
        if (this.isLogin) {
          this.$router.push('/homePage:' + this.$store.state.userInfo.id)
        } else {
          this.SHOW_LOGIN()
        }
      },
      search (e) {
        var value = e.target.previousElementSibling.value
        if (value === '') {
          return
        }
        this.$router.push('/search:' + value)
      }
    }

  }
</script>


<style scoped lang='less'>
  @gap: .2rem;
  .IndexPage {
    width: 100%;
    .index_container {
      background: #73bef7;
      padding-bottom: 10px;
    }

    .Index_top {
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      padding: 0 @gap;
      padding-top: .2rem;
      font-size: .34rem;

      .login {
        height: 100%;
        color: #105287;
        float: left;
        text-decoration: underline;
      }

      .rule {
        height: 100%;
        color: #105287;
        float: right;
        text-decoration: underline;
      }

    }
    .index_img {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;

      img {
        display: inline-block;
        text-align: center;
        width: 4.51rem;
        height: 3.01rem;
      }

    }
    .index_register {
      margin: 0 auto;
      background: #ff8a63;
      border-radius: .6rem;
      line-height: .6rem;
      height: .6rem;
      width: 2.34rem;
      font-size: .30rem;
      font-weight: 600;
      color: #fff;
      text-align: center;
      box-shadow: 0 6px 10px #58a6e8;
      margin-bottom: 20px;

      .linkRegister {
        color: #fff;
      }

    }
    .SearchBox {
      width: 5.1rem;
      height: .6rem;
      border-radius: .6rem;
      overflow: hidden;
      border: 1px solid #42a2e6;
      margin: 0 auto;
      margin-bottom: 20px;

      input {
        height: 100%;
        width: 4.1rem;
        line-height: .6rem;
        box-sizing: border-box;
        padding: 0 15px;
        border: 0;
        outline: none;
        float: left;
      }
      a {
        display: inline-block;
        float: left;
        width: 1rem;
        height: 100%;
        line-height: .6rem;
        text-align: center;
        background: #42a2e6;
        color: #fff;
      }
    }
  }
</style>
