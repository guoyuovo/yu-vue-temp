// 懒加载路由
const Home = () => import('./Home.vue')
export default {
  path: '/Home',
  name: 'Home',
  component: Home,
  children: [
  ]
}
