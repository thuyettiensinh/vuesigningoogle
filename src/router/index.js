import Vue from 'vue';
import Router from 'vue-router';
import GSignInButton from 'vue-google-signin-button';
import Hello from '@/components/Hello';
import Signin from '@/components/Signin';

Vue.use(GSignInButton);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
    },
  ],
});
