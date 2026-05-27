import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import RouterUtil from './router.util'
const dynamicRoutes = RouterUtil.asyncImportAll()
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'root',
        component: () => import('../components/PageLayout'),
        children: []
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
export type AppRouter = typeof router
