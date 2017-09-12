<template>
  <ul class="userList">
    <div v-if="!isNoData">
      <ul class="userList clear">
        <items v-for="item in allUsers" :item="item" :key="item.id"></items>
      </ul>
    </div>
    <div v-else="!isNoData" style="text-align: center ;line-height: 30px">
      暂无任何用户信息
    </div>

  </ul>
</template>
<script>
  import items from './UserListItem.vue'

  export default {
    name: 'users',
    data () {
      return {}
    },
    computed: {
      isNoData () {
        if (this.allUsers.length >= 1) {
          return false
        } else {
          return true
        }
      }
    },
    props: ['allUsers'],
    watched: {},
    components: {items},
    methods: {}
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
