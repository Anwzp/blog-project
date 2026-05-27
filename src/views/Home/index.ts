export default {
    name: 'Home',
    path: '/',
    meta: {
        title: '首页',
        isKeepAlive: true,
        parent: 'root'
    },
    component: () => import('./home.vue')
} satisfies PageRouterConfig;