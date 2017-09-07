<template>
  <transition name="fade" mode="out-in">
    <div id="app">
      <router-view></router-view>

    </div>
  </transition>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @import './public/reset.min.css';
  @import './public/public.css';

  html, body {
    width: 100%;
    overflow-x: hidden;
  }

</style>
