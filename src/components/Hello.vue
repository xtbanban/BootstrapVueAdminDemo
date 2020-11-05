<template>
  <div class="hello text-center m-t-lg">
    <img src="../assets/logo.png" height="200" width="200" alt="" />
    <h1>{{ title }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      title: "BootstrapVueAdmin",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

ul a {
  color: #42b983;
}
</style>
