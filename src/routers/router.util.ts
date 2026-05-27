// src/router/auto-routes.ts
import { z } from 'zod'
import { type RouteRecordRaw, type RouteComponent } from 'vue-router'
// 定义路由配置的类型
const routeConfigSchema = z.object({
    name: z.string(),
    path: z.string(),
    component: z.function(), // 可更精确
})



class RouterUtil {
    //自动路由引入
    async asyncImportAll(): Promise<RouteRecordRaw[]> {
        const routerList: RouteRecordRaw[] = [];
        // 使用 Vite 的 import.meta.glob 来动态导入路由配置文件
        const modules = import.meta.glob<{ default: PageRouterConfig }>('../views/**/*.ts')
        for (const [path, loader] of Object.entries(modules)) {
            const mod = await loader() as any
            //校验声明路由配置是否合法
            const result = routeConfigSchema.safeParse(mod.default)
            if (!result.success) {
                console.error(`路由配置错误：${path}`, result.error.issues)
                continue
            }
            // 将验证通过的路由配置添加到 routers 数组中
            routerList.push({
                name: result.data.name,
                path: result.data.path,
                component: result.data.component as RouteComponent
            })
        }
        return routerList
    }
}
const routerUtil = new RouterUtil();
export default routerUtil;