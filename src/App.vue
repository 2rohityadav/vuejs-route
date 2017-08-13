<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>Rohit Yadav</h2>
    <hr>
    <router-link to="/">Home</router-link>
    <br>
    <router-link to="/Page1/">Page One</router-link>
    <br>
    <router-link to="/Page2/10">Page Two with ID 10</router-link>
    <br>
    <router-link to="/Page2/20">Page Two with ID 20</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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

a {
  color: #42b983;
}
</style>
