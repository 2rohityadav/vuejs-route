<template>
<div id="app">
  <h1>{{ msg }} with ID {{ $route.params.teamID }}</h1>
  <hr>
  <p>
    Team ID is {{ $route.params.teamID }}
    $route is made available from Vue.use(VueRouter);
    <br>
    teamID should be same as that passed into path:'/Page1/:teamID', component: PageOne
  </p>
  <button @click="goHome">Go Home</button>
</div>
</template>

<script>
export default {

  data () {
    return {
      msg: 'page 2'
    }
  },

  watch: {
    '$route' (to, from) {
      alert(to.params.teamID);
    }
  },

  created () {
    alert(this.$route.params.teamID);
  },

  methods: {
    goHome (){
      this.$router.push('/');
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

a {
  color: #42b983;
}
</style>
