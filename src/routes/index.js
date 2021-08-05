import {createWebHistory, createRouter} from 'vue-router';
import Test from '../views/Test.vue'

console.info(Test);
const routes = [
    {
      path: '/',
      name: 'test',
      component: Test
    }
    /*
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: about
    }
    */
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router