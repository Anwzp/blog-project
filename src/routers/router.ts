import { createRouter, createWebHistory } from 'vue-router'
import RouterUtil from './router.util'


const bootStarp = async () => {
    const routes = await RouterUtil.createRoutes()
    return createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes,
    })
}
const router = await bootStarp()
export default router
export type AppRouter = typeof router
