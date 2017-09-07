<template>
  <transition name="slide-right">
    <div class="hello">
      <h2>{{msg}}</h2>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: this.$store.state.msg
      }
    }

  }
</script>


<style scoped >
  h1, h2 {
    font-weight: normal;
  }
</style>
