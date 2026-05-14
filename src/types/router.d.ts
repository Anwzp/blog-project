import type { Router, RouteLocationNormalizedLoaded } from 'vue-router'

export { }

declare module 'vue' {
    interface ComponentCustomProperties {
        $router: Router
        $route: RouteLocationNormalizedLoaded
    }
}
