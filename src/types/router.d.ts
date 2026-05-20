import type { Router, RouteLocationNormalizedLoaded } from 'vue-router'

export { }

declare module 'vue' {
    interface ComponentCustomProperties {
        $router: Router
        $route: RouteLocationNormalizedLoaded
    }
}

declare module 'vue-router' {
    interface RouteMeta {
        title?: string
        requiresAuth?: boolean
    }
}