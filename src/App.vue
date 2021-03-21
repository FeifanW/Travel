<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body,html{
    background: #eeeeee;
  }
  #app{
    background: #eeeeee;
    max-width: 750px;
    margin: 0 auto;
  }
</style>
