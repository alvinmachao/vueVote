<template>
  <ul class="userList">
    <div v-if="!isNoVoted">
      <ul class="userList clear">
        <items v-for="item in voteUserList" :item="item" :key="item.id"></items>
      </ul>
    </div>
    <div v-else="!isNoVoted" style="text-align: center">
      暂时还没有任何人投票
    </div>

  </ul>
</template>
<script>
  import items from './VoteUuserListItem.vue'

  export default {
    name: 'users',
    data () {
      return {}
    },
    computed: {
      isNoVoted () {
        if (this.voteUserList.length >= 1) {
          return false
        } else {
          return true
        }
      }
    },
    props: ['voteUserList'],
    components: {items}
  }
</script>
<style lang="less" scoped>
  @import (reference) "../../public/publics";

  .userList {
    width: 100%;
    box-sizing: border-box;
    padding: 0 .1rem;
    margin: 0 auto;
  }
</style>
