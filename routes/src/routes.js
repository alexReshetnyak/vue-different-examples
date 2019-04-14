import UserComp from './Components/User.vue';
import AboutComp from './Components/About_us.vue';
import HomeComp from './Components/Home.vue';

export const routes = [
  { path: '/user', component: UserComp },
  { path: '/about', component: AboutComp },
  { path: '', component: HomeComp }
];
