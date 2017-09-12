<template>
  <ul class="userList">
    <div v-if="isLoading" style="text-align: center;line-height: 30px">
      loading....
    </div>
    <div v-else="isLoading">
      <div v-if="searchList.length===0" style="text-align: center;line-height: 50px">没有查到任何用户信息</div>
      <ul v-else="searchList.length===0" class="userList clear">
        <items v-for="item in searchList" :item="item" :key="item.id"></items>
      </ul>
    </div>

  </ul>
</template>
<script>
  import items from '../common/UserListItem.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'search',
    data () {
      return {
        isLoading: true
      }
    },
    computed: {
      searchList () {
        return this.$store.state.searchedUserInfo
      }
    },
    components: {items},
    watch: {
      '$route': 'fetchData'
    },
    created () {
      this.fetchData()
    },
    methods: {
      ...mapActions(['getSearchedUsers']),
      fetchData () {
        this.getSearchedUsers(this.$route.params.content.split(':')[1])
        this.isLoading = false
      }
    }
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
