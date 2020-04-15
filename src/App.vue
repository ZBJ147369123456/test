<template>
  <div id="app">
    <router-view/>
    <my-bar></my-bar>
  </div>
</template>

<script>
  import MyBar from 'components/tabBar/myBar'

export default {
  name: 'App',
  components:{
    MyBar
  }
}
</script>

<style>
  @import "assets/style.css";
</style>
