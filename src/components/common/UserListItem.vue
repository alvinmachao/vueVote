<template>
  <li class="ListItem clear">
    <div class="li_f li_ll" :class="item.sex==1?'boy':'girl'"></div>

    <div class="li_f li_rr">
      <div class="li_r_tt">
        <span>{{item.account}}</span><i>编号#<b>{{item.id}}</b></i>

        <div>{{item.voteID.length}}票</div>
      </div>
      <div class="li_r_bb">
        <span>{{item.des}}</span>

        <div @click="voteTickets">投TA一票
        </div>
      </div>
    </div>
  </li>

</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'items',
    props: ['item'],
    methods: {
      ...mapActions(['vote']),
      voteTickets (e) {
        if (!this.$store.state.isLogin) {
          this.$store.commit('SHOW_LOGIN')
          return
        }
        var curE = e.target
        var curId = this.$store.state.userInfo.id
        var targetId = curE.parentNode.previousElementSibling.getElementsByTagName('b')[0].innerHTML
        this.vote({curId, targetId})
      }
    }
  }
</script>
<style lang="less" scoped>
  .ListItem {
    box-sizing: border-box;
    width: 100%;
    height: 1.6rem;
    border-bottom: 2px solid #e9e8ec;
    padding: .3rem 0;
    margin-bottom: .1rem;
    .li_f {
      float: left;
      height: 1rem;
    }
    .li_ll {
      width: 1rem;
      height: 1rem;
      margin-right: .2rem;

    }
    .boy {
      background: url("../../images/boy.png") no-repeat 0 0;
      background-size: 1rem 1rem;
    }
    .girl {
      background: url("../../images/girl.png") no-repeat 0 0;
      background-size: 1rem 1rem;
    }
    .li_rr {
      width: 4.8rem;
      .li_r_tt {
        height: .5rem;
        box-sizing: border-box;
        padding: .12rem 0;
        line-height: .5rem;
        span {
          display: inline-block;
          height: .26rem;
          line-height: .26rem;
          max-width: 2rem;
          box-sizing: border-box;
          border-right: 2px solid #ddd;
          color: #333;
          padding-right: .14rem;
        }
        i {
          display: inline-block;
          height: .26rem;
          line-height: .26rem;
          max-width: 1.56rem;
          color: #b5b3b5;
          box-sizing: border-box;
          padding-left: .14rem;
        }
        div {
          width: 1.24rem;
          height: .26rem;
          line-height: .26rem;
          color: #ff7f55;
          text-align: center;
          float: right;
        }
      }
      .li_r_bb {
        height: .5rem;
        line-height: .5rem;
        span {
          display: inline-block;
          width: 3.36rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-right: .2rem;
          color: #b5b3b5;
        }
        div {
          width: 1.24rem;
          height: .5rem;
          line-height: .5rem;
          color: #fff;
          font-weight: 600;
          text-align: center;
          float: right;
          background-color: #52aaef;
          border-radius: .26rem;
        }
      }

    }
  }

</style>
