<template>
  <div id="app">
    <Navibar />
    <div id="content" class="content">
      <router-view></router-view>
      <!-- 여기부분만 재로딩 -->
    </div>
  </div>
</template>

<script>
import Navibar from './components/layout/Navibar.vue'

export default {
  name: 'App',
  components: {
    Navibar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
