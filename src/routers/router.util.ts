// src/router/auto-routes.ts
import { z } from 'zod'
import { type RouteRecordRaw, type RouteComponent } from 'vue-router'
const childSchema = z.object({
    name: z.string(),
    path: z.string(),
    component: z.function(), // 组件可能动态导入
    meta: z.object({
        title: z.string(),
        isKeepAlive: z.boolean().optional(),
    }).optional(),
})

// 定义路由配置的类型
const routeConfigSchema = z.object({
    name: z.string(),
    path: z.string(),
    parent: z.string(),
    meta: z.object({
        title: z.string(),
        isKeepAlive: z.boolean().optional(),
    }).optional(),
    component: z.function(), // 可更精确
    children: z.array(childSchema).optional().default([]),
})



class RouterUtil {
    //自动路由引入
    async createRoutes(): Promise<RouteRecordRaw[]> {
        const routerMap: Record<string, PageRouterConfig[]> = {};
        const rootRouter: Record<string, PageRouterConfig> = {}
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
            const parent = result.data.parent;
            const name = result.data.name;
            //判断是否为根路由，如果是根路由则直接添加到routerMap中，否则根据parent进行分类存储
            if (!parent) {
                rootRouter[name] = result.data;
            } else if (!routerMap[parent]) {
                routerMap[parent] = [result.data];
            } else {
                routerMap[parent].push(result.data);
            }
        }
        const routerList: RouteRecordRaw[] = []
        Object.keys(rootRouter).forEach(key => {
            rootRouter[key].children = routerMap[key] || [];
            routerList.push(rootRouter[key])
        })
        console.log("🚀 ~ RouterUtil ~ asyncImportAll ~ rootRouter:", routerList)
        return routerList
    }

}
const routerUtil = new RouterUtil();
export default routerUtil;