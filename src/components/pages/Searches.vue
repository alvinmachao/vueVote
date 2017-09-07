<template>
  <ul class="userList">
    <div v-if="!isLoading">
      <ul class="userList clear">
        <items v-for="item in searchList" :item="item" :key="item.ID"></items>
      </ul>
      {{content}}
    </div>
    <div v-else="!isLoading">
      loading....
    </div>

  </ul>
</template>
<script>
  import items from '../common/UserListItem.vue'

  export default {
    name: 'search',
    data () {
      return {
        searchList: [],
        isLoading: false,
        content: null,
        error: null
      }
    },
    computed: {},
    components: {items},
    watch: {
      '$route': 'fetchData'
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.error = this.content = null
        this.isLoading = true
        this.searchList = [
          {
            'ID': '1',
            'name': 'a1',
            'selectedIDs': [
              '1',
              '2',
              '3',
              '4',
              '5'
            ],
            'sex': 0,
            'voteID': [
              '1',
              '2',
              '5',
              '7',
              '9',
              '10',
              '12'
            ]
          },
          {
            'ID': '2',
            'name': 'a2',
            'voteID': [
              '1',
              '2',
              '6'
            ],
            'sex': '1',
            'selectedIDs': [
              '1',
              '2',
              '6',
              '5',
              '8'
            ]
          }]
        this.isLoading = false
        console.log(this.$route.params.content)
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
