<template>
  <ul class="userList">
    <div v-if="!isLoading">
      <ul class="userList clear">
        <items v-for="item in userList" :item="item" :key="item.ID"></items>
      </ul>
    </div>
    <div v-else="!isLoading">
      loading....
    </div>

  </ul>
</template>
<script>
  import items from './VoteUuserListItem.vue'

  export default {
    name: 'users',
    data () {
      return {
        userList: [],
        isLoading: false,
        error: null
      }
    },
    created () {
      this.getUsers()
    },
    components: {items},
    methods: {
      getUsers () {
        this.error = null
        this.isLoading = true
        var vu = this
        setTimeout(function () {
          vu.userList = [
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
            },
            {
              'ID': '3',
              'name': 'a3',
              'voteID': [
                '1',
                '10'
              ],
              'sex': 0,
              'selectedIDs': [
                '5',
                '7',
                '8'
              ]
            },
            {
              'ID': '4',
              'name': 'a4',
              'voteID': [
                '1',
                '10'
              ],
              'sex': 1,
              'selectedIDs': [
                '5',
                '7',
                '8'
              ]
            }]
          vu.isLoading = false
        }, 1000)
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
