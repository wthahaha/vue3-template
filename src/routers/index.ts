import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routeModuleList: RouteRecordRaw[] = []

const routes: Array<RouteRecordRaw>  = [
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


// const modules = import.meta.glob('./modules/*.ts', { eager: true})


// Object.values(modules).forEach((val: any) => {
//     const mod = val["routes"]
//     const modList = Array.isArray(mod) ? [...mod] : [mod];
//     routeModuleList.push(...modList);
//   });


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
