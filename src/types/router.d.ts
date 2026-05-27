import type { Router, RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'
export interface PageRouterConfig extends RouteRecordRaw {
    name: string;
    path: string;
    component: () => Promise<typeof import('*.vue')>
    meta: RouterMeta
}
export interface RouterMeta {
    title: string;
    isKeepAlive?: boolean;
    parent: string;
}
export { }

declare module 'vue-router' {

}

declare global {
    type PageRouterConfig = PageRouterConfig
}