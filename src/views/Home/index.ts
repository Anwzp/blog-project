export default {
    parent: ParentRouterKey.BlogPageLayout,
    name: 'Home',
    path: '/home',
    meta: {
        title: '首页',
        isKeepAlive: true,
    },
    component: () => import('./home.vue')
} satisfies PageRouterConfig;