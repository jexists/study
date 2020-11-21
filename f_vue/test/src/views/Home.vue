<template>
  <div>
    <h1>welcome to {{title}}!</h1>
    <input type="text" v-model="name">
    <button type="button" @click="getData">버튼클릭</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'vue 기초 수업',
      name: 'jexists'
    };
  },
  methods: {
    getData() {
      alert(this.name);
    }
  }
}
</script>