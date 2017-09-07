<template>
  <div>
    <div class="m-mask" @scroll.prevent.stop="" @stouchstart.stop.repvent></div>

    <div class="m-dialog">
      <div class="md-dialog">
        <div class="md-dialog-title">
                            <span class="btn">
                                <i class="iconfont" @click="close">&times;</i>
                            </span>
        </div>
        <div class="md-dialog-content">
          <slot></slot>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'modal',
    data () {
      return {}
    },
    created () {
    },
    components: {},
    methods: {
      ...mapMutations(['CLOSE_LOGIN']),
      close () {
        this.CLOSE_LOGIN()
      }
    }
  }
</script>
<style lang="less" scoped>
  @import (reference) "../../public/publics";
  /* 弹层透明遮罩层样式 */
  .m-mask {
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    background-color: rgba(233, 233, 233, .6);
  }

  /*	弹层通用样式	*/
  .m-dialog {
    width: 100%;
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border: 1px solid #cacacb;
    box-shadow: 5px 5px 5px #ccc;
    z-index: 99;
  }

  /*	弹层通用头尾样式	*/
  .md-dialog {
    background-color: #fff;
    min-width: 3.70rem;
    &-title {
      overflow: hidden;
      height: .62rem;
      position: relative;
      border-bottom: 1px solid #ececec;
      line-height: .62rem;
      .iconfont {
        font-size: 20px;
        float: right;
        margin-right: .2rem;
        cursor: pointer;
      }
    }
    &-content {
      padding: 5px 24px;
      max-width: 5.40rem;
      word-wrap: break-word;
      word-break: break-all;
      overflow-y: auto;
    }
  }

</style>
