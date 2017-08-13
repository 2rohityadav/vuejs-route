import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routerjs from './routes'

Vue.use(VueRouter);

// now how do we get route our application
const router = new VueRouter({
  // also you can do like this routes: routes but in ES^ we can do like this below
  routes: Routerjs,
  mode: 'history'
});

// now we need to add router to our vue instances

new Vue({
  el: '#app',
  //router: router,
  router,
  render: h => h(App)
})
