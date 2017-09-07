

<template>
  <transition name="slide-left">

    <div class="hello">
      <h2>{{msg}}</h2>
      <h2>{{msg}}</h2>
    </div>

  </transition>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: this.$store.state.msg
      }
    }

  }
</script>


<style scoped>

</style>
