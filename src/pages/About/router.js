// 懒加载路由
const About = () => import('./About')
export default {
  path: '/About',
  name: 'About',
  component: About,
  children: [
  ]
}
