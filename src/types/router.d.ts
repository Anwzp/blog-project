import type { Router, RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'
export interface PageRouterConfig extends Omit<RouteRecordRaw, 'component'> {
    component: () => Promise<any>
    parent?: ParentRouterKey;
    meta: RouterMeta;
}
export interface RouterMeta {
    title: string;
    isKeepAlive?: boolean;

}

declare global {
    type PageRouterConfig = PageRouterConfig
}