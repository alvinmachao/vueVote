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
