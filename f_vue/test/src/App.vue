<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
      <!-- 여기부분만 재로딩 -->
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
