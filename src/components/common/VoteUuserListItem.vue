<template>
  <li class="VotedListItem clear">
    <div class="li_f li_l" :class="item.sex==1?'boy':'girl'"></div>

    <div class="li_f li_m">
      <div class="li_m_t">
        <span>{{item.account}}</span><i>编号#<b>{{item.id}}</b></i>

      </div>
    </div>
    <div class="li_r"> 投了一票</div>
  </li>

</template>
<script>
  export default {
    name: 'items',
    props: ['item']
  }
</script>
<style lang="less" scoped>
  .VotedListItem {
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
    .li_l {
      width: 1rem;
      height: 1rem;
      margin-right: .2rem;
      background-size: 1rem 1rem;
    }
    .boy {
      background: url("../../images/boy.png") no-repeat 0 0;
      background-size: 1rem 1rem;
    }
    .girl {
      background: url("../../images/girl.png") no-repeat 0 0;
      background-size: 1rem 1rem;
    }
    .li_m {
      width: 3.6rem;
      .li_m_t {
        height: .5rem;
        box-sizing: border-box;
        padding: .12rem 0;
        line-height: .5rem;
        span {
          display: block;
          height: .26rem;
          line-height: .26rem;
          max-width: 3.56rem;
          color: #333;
          font-size: .26rem;
          margin-bottom: .2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        i {
          display: block;
          height: .26rem;
          line-height: .26rem;
          max-width: 3.56rem;
          color: #b5b3b5;
          font-size: .24rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

    }
    .li_r {
      width: 1.2rem;
      height: 1rem;
      float: left;
      line-height: 1rem;
      color: #333;
      font-size: .28rem;
      text-align: center;
    }
  }

</style>
