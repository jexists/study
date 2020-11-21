<template>
  <div>
    <h1>welcome to {{ title }}!</h1>
    <input type="text" v-model="name" />
    <button type="button" @click="getData">데이터보기</button>
    <button type="button" @click="setData">데이터넣기</button>

    <br />
    <br />

    <select class="form-control" v-model="myClass" @change="changeClass">
      <option :key="index" :value="data.value" v-for="(data, index) in options">{{data.label}}</option>
    </select>

    <br />

    <table class="table table-bordered" v-if="isLoading">
      <tr :key="index" v-for="(data, index) in options">
        <td>{{data.value}}</td>
        <td>{{data.label}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "vue 기초 수업",
      name: "jexists",
      options: [
        {label: 'A Class', value: 0},
        {label: 'B Class', value: 1},
        {label: 'C Class', value: 2},
        {label: 'D Class', value: 3},
        {label: 'E Class', value: 4},
      ],
      myClass: 1,
      isLoading: false
    };
  },
  // data 명이랑 동일하게 만들면 데이터 변경 캐치 가능
  watch: {
    name() {
      console.log(this.name);
    },
  },

  methods: {
    getData() {
      alert(this.name);
    },
    setData() {
      this.name = "데이터 넣기";
    },
    changeClass() {
      alert(this.myClass);
    }
  },
  // Life Cycle
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>