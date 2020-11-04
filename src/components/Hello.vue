<template>
  <div class="hello text-center m-t-lg">
    <img src="../assets/logo.png" height="200" width="200" alt="">
    <h1>{{ title }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <p class="m-t-lg">
      <a title="前端老徐 Github" href="https://github.com/waihaolaoxu" target="_blank" class="fa fa-github text-2x text-muted"></a>
      <a title="前端老徐 Blog" href="http://www.loveqiao.com/" target="_blank" class="m-l-xs fa fa-home text-2x text-muted"></a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'BootstrapVueAdmin'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
