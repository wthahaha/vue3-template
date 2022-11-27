import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[]  = [
    {
        component: () => import('@/components/login.vue'),
        path: '/login',
        name: 'Login',
        alias: '/', //访问/login或/ 都可以访问到login页面
    },
    {
        component: () => import('@/components/salary.vue'),
        path: '/salary',
        name: 'Salary',
    },
]

export default routes



