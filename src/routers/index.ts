import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routeModuleList: RouteRecordRaw[] = []

const routes: Array<RouteRecordRaw> = [
    {
        component: () => import('@/components/root/index.vue'),
        path: '/root',
        name: 'Root',
        alias: '/', //访问/root或/ 都可以访问到root页面
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router
