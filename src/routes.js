// import components for routing
import PageOne from './components/Page1.vue'
import PageTwo from './components/Page2.vue'
import Home from './components/Home.vue'

// set up router
export default [
  { path:'/Page1', component: PageOne },
  { path:'/Page2/:teamID', component: PageTwo },
  { path:'/', component: Home }
];
