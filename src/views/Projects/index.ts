export default {
    parent: ParentRouterKey.BlogPageLayout,
    name: 'Projects',
    path: '/projects',
    component: () => import('./projects.vue'),
    meta: {
        title: '项目',
        isKeepAlive: true,
    },
} as PageRouterConfig