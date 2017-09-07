<template>
  <div class="rule_page">
    <div class="rule_top">
      <div class="r_t_l"><span></span></div>
      <div class="r_t_c">活动规则</div>
      <div class="r_t_r"><span></span></div>
    </div>
    <div class="rule_content">
      <p>一个人最多投5票</p>

      <p>只有注册账户才可以有权限投票</p>

      <p>一个账户不能重复投给同一个人</p>

      <p>用户也可以将票投给自己</p>
    </div>
    <router-link class="rule_back noSelect" to="/">返回</router-link>
  </div>
</template>
<script>
  export default {
    name: 'rule',
    methods: {}
  }
</script>
<style lang="less" scoped>
  @import (reference) "../../public/publics";

  @gap: .2rem;
  .rule_page {
    width: 100%;
    box-sizing: border-box;
    padding: .34rem @gap;
    .rule_top {
      height: .46rem;
      line-height: .46rem;
      width: 100%;
      position: relative;
      margin-bottom: .6rem;
      .r_t_c {
        width: 1.78rem;
        height: .46rem;
        line-height: .46rem;
        margin: 0 auto;
        background: #ff8a63;
        border-radius: .46rem;
        text-align: center;
        color: #fff;
        font-weight: 600;
      }
      .r_t_l {
        position: absolute;
        width: 1.79rem;
        height: .04rem;
        top: .21rem;
        left: 0;
        background: #ff8a63;

        span {
          position: absolute;
          width: .09rem;
          height: .09rem;
          left: 1.79rem;
          border-radius: 50%;
          background: #ff8a63;
          top: -50%;
        }

      }
      .r_t_r {
        position: absolute;
        top: .21rem;
        right: 0;
        width: 1.79rem;
        height: .04rem;
        background: #ff8a63;

        span {
          position: absolute;
          width: .09rem;
          height: .09rem;
          border-radius: 50%;
          background: #ff8a63;
          right: 1.79rem;
          top: -50%;
        }
      }
    }
    .rule_content {
      p {
        text-align: center;
        line-height: .8rem;
        font-weight: 600;
        color: #000;
        font-size: .30rem;
      }
    }
    .rule_back {
      display: block;
      cursor: pointer;
      margin: 0 auto;
      height: .4rem;
      width: .8rem;
      line-height: .4rem;
      margin-top: 30px;
      border: 1px solid #ddd;
      text-align: center;
      color: #fff;
      background-color: #ff8a63;
      border-radius: .08rem;
    }

  }
</style>
