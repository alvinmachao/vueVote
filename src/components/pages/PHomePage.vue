<template>
  <div class="pIndexPage">
    <div v-if="isLoading" style="text-align: center">loading...</div>
    <div v-else="isLoading">
      <pHead :pInfo="pInfo"></pHead>
      <list :voteUserList="voteUserList"></list>
    </div>

  </div>
</template>

<script>
  import list from '../common/VotedUsers.vue'
  import pHead from '../common/pHead.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'personalIndex',
    data () {
      return {isLoading: true}
    },
    created () {
      this.getVotedUsers()
    },
    computed: {
      voteUserList () {
        return this.$store.state.voteUserList
      },
      pInfo () {
        return this.$store.state.pInfo
      }

    },
    components: {list, pHead},
    methods: {
      ...mapActions(['getAllVotedUser']),
      getUsers () {
        this.error = null
        this.isLoading = true
        var vu = this
        setTimeout(function () {
          vu.voteUserList = [
            {
              'id': '1',
              'account': 'a1',
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
              'id': '2',
              'account': 'a2',
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
              'id': '3',
              'account': 'a3',
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
              'id': '4',
              'account': 'a4',
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
      },
      getVotedUsers () {
        var ID = this.$route.params.id.split(':')[1]
        this.getAllVotedUser(ID)
        this.isLoading = false
      }
    }
  }
</script>


<style scoped lang='less'>
  @gap: .2rem;
  .pIndexPage {
    width: 100%;

  }
</style>
