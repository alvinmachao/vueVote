<template>
  <div>
    <div class="index_container">
      <img src="../../images/bg2.png" class="index_img"/>

      <div class="pIndex_top">
        <div class="li_f li_l" :class="pInfo.sex==1?'boy':'girl'">

        </div>
        <div class="li_f li_m">
          <div class="li_r_t">
            <span>{{pInfo.account}}</span><i>编号#<b>{{pInfo.id}}</b></i>
          </div>

        </div>
        <div class="li_f li_r">
          <div class="li_r_t">
            <span v-if="pInfo.votedNums==0">暂无排名</span>
            <span v-else="pInfo.votedNums==0">第{{pInfo.ranking}}名</span>
            <i>{{pInfo.votedNums}}票</i>
          </div>

        </div>
        <p class="li_des">
          {{pInfo.des}}
        </p>
      </div>
      <router-link class="linkIndex" to="/">
        活动首页
      </router-link>

      <div class="logout" @click="logOut">退出</div>
    </div>
    <div class="ListTitle">
      <span></span>

      <p>已投票的好友</p>
      <i></i>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'pHead',
    data () {
      return {}
    },
    computed: {},
    props: ['pInfo'],
    methods: {
      logOut () {
        this.$store.commit('LOGOUT')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import (reference) "../../public/publics";

  .index_container {
    position: relative;
    width: 6.40rem;
    height: 3.59rem;
    margin-bottom: .88rem;
    .index_img {
      border: 0;
      position: absolute;
      text-align: center;
      width: 6.40rem;
      height: 3.59rem;
      z-index: -1;
    }
    .pIndex_top {
      box-sizing: border-box;
      padding: 0 @gap;
      padding-top: .43rem;
      height: 2.05rem;
      width: 100%;
      .li_f {
        float: left;
        height: 1rem;
      }
      .li_l {
        width: 1.02rem;
        margin-right: 0.14rem;
        /*background: url("../../../images/photo.png") no-repeat 0 0;
        background-size: .99rem .99rem;*/
        img {
          width: 1rem;
          height: 1rem;
          border: 0;
        }
      }
      .boy {
        background: url("../../images/boy.png") no-repeat 0 0;
        background-size: 1rem 1rem;
      }
      .girl {
        background: url("../../images/girl.png") no-repeat 0 0;
        background-size: 1rem 1rem;
      }
      .li_r {
        width: 1.84rem;
        .li_r_t {
          height: .5rem;
          box-sizing: border-box;
          padding: .12rem 0;
          line-height: .5rem;
          span {
            display: block;
            height: .36rem;
            line-height: .38rem;
            max-width: 1.84rem;
            box-sizing: border-box;
            font-size: .38rem;
            color: #ff8961;
            margin-bottom: .2rem;
            text-align: right;
            margin-top: -.3rem;
          }
          i {
            display: block;
            height: .3rem;
            line-height: .3rem;
            max-width: 1.84rem;
            box-sizing: border-box;
            color: #fff;
            text-align: right;
          }
        }
      }
      .li_m {
        width: 3rem;
        .li_r_t {
          height: .5rem;
          box-sizing: border-box;
          padding: .12rem 0;
          line-height: .5rem;
          span {
            display: block;
            height: .36rem;
            line-height: .36rem;
            max-width: 3rem;
            box-sizing: border-box;
            padding-right: .14rem;
            font-size: .30rem;
            color: #fff;
            margin-bottom: .1rem;
          }
          i {
            display: block;
            height: .3rem;
            line-height: .3rem;
            max-width: 3rem;
            box-sizing: border-box;
            padding-right: .14rem;
            color: #fff;
          }
        }

      }
      .li_des {
        line-height: .46rem;
        text-align: center;
        margin: 0 auto;
        width: 5rem;
        font-size: .34rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        color: #fff67f;

      }
    }
    .linkIndex {
      position: absolute;
      left: 50%;
      bottom: .46rem;
      transform: translateX(-50%);
      background: #ff8a63;
      border-radius: .34rem;
      line-height: .54rem;
      height: .54rem;
      padding: 0 15px;
      font-size: .30rem;
      font-weight: 600;
      color: #fff;
      text-align: center;
      box-shadow: 0 6px 10px #58a6e8;

    }
    .logout {
      position: absolute;
      right: 0.2rem;
      bottom: 0.1rem;
      width: .8rem;
      height: .4rem;
      line-height: .4rem;
      text-align: center;
      background-color: #ff8a63;
      border-radius: .08rem;
      color: #fff;
    }
  }

  .ListTitle {
    height: .44rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0 @gap;
    margin-bottom: .7rem;
    span {
      margin-top: .2rem;
      float: left;
      width: 1.92rem;
      height: .04rem;
      position: relative;
      background-color: #ff8a63;
    }
    span:after {
      position: absolute;
      width: .1rem;
      height: .1rem;
      border-radius: 50%;
      background-color: #ff8a63;
      content: "";
      overflow: hidden;
      right: -0.09rem;
      top: -.02rem;
    }
    p {
      float: left;
      display: block;
      width: 1.8rem;
      height: .44rem;
      line-height: 0.44rem;
      border-radius: .44rem;
      background-color: #ff8a63;
      color: #fff;
      font-size: .24rem;
      margin-left: .23rem;
      margin-right: .23rem;
      text-align: center;
    }
    i {
      margin-top: .2rem;
      float: left;
      width: 1.79rem;
      background-color: #ff8a63;
      height: .04rem;
      position: relative;
    }
    i:before {
      position: absolute;
      width: .1rem;
      height: .1rem;
      content: "";
      overflow: hidden;
      border-radius: 50%;
      background-color: #ff8a63;
      left: -0.09rem;
      top: -.02rem;
    }

  }
</style>
